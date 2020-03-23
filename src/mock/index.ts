/**
 * The strongly - typed nature of a GraphQL API lends itself extremely well to mocking.This is an important part of a GraphQL - First development process, because it enables frontend developers to build out UI components and features without having to wait for a backend implementation.
 *
 * Even with a backend that is already built, mocking allows you to test your UI without waiting on slow database requests or building out a component harness with a tool like React Storybook.
 *
 * ## Default mock example
 *
 * Let's take a look at how we can mock a GraphQL schema with just one line of code, using the default mocking logic you get out of the box with `graphql-tools`.
 *
 * To start, let's grab the schema definition string from the `makeExecutableSchema` example [in the "Generating a schema" article](/generate-schema/#example).
 *
 * ```
 * import { makeExecutableSchema, addMocksToSchema } from 'graphql-tools';
 * import { graphql } from 'graphql';
 *
 * // Fill this in with the schema string
 * const schemaString = `...`;
 *
 * // Make a GraphQL schema with no resolvers
 * const schema = makeExecutableSchema({ typeDefs: schemaString });
 *
 * // Add mocks, modifies schema in place
 * addMocksToSchema({ schema });
 *
 * const query = `
 * query tasksForUser {
 *   user(id: 6) { id, name }
 * }
 * `;
 *
 * graphql(schema, query).then((result) => console.log('Got result', result));
 * ```
 *
 * > Note: If your schema has custom scalar types, you still need to define the `__serialize`, `__parseValue`, and `__parseLiteral` functions, and pass them inside the second argument to `makeExecutableSchema`.
 *
 * This mocking logic simply looks at your schema and makes sure to return a string where your schema has a string, a number for a number, etc. So you can already get the right shape of result. But if you want to use the mocks to do sophisticated testing, you will likely want to customize them to your particular data model.
 *
 * ## Customizing mocks
 *
 * This is where the `mocks` option comes in, it's an object that describes your desired mocking logic. This is similar to the `resolverMap` in `makeExecutableSchema`, but has a few extra features aimed at mocking.
 *
 * It allows you to specify functions that are called for specific types in the schema, for example:
 *
 * ```
 * {
 *   Int: () => 6,
 *   Float: () => 22.1,
 *   String: () => 'Hello',
 * }
 * ```
 *
 * You can also use this to describe object types, and the fields can be functions too:
 *
 * ```
 * {
 *   Person: () => ({
 *     name: casual.name,
 *     age: () => casual.integer(0, 120),
 *   }),
 * }
 * ```
 *
 * In this example, we are using [casual](https://github.com/boo1ean/casual), a fake data generator for JavaScript, so that we can get a different result every time the field is called. You might want to use a collection of fake objects, or a generator that always uses a consistent seed, if you are planning to use the data for testing.
 *
 * ### Using MockList in resolvers
 *
 * You can also use the MockList constructor to automate mocking a list:
 *
 * ```
 * {
 *   Person: () => ({
 *     // a list of length between 2 and 6 (inclusive)
 *     friends: () => new MockList([2,6]),
 *     // a list of three lists of two items: [[1, 1], [2, 2], [3, 3]]
 *     listOfLists: () => new MockList(3, () => new MockList(2)),
 *   }),
 * }
 * ```
 *
 * In more complex schemas, MockList is helpful for randomizing the number of entries returned in lists.
 *
 * For example, this schema:
 *
 * ```
 * type Usage {
 *   account: String!
 *   summary: [Summary]!
 * }
 *
 * type Summary {
 *   date: String!
 *   cost: Float!
 * }
 * ```
 *
 * By default, the `summary` field will always return 2 entries. To change this, we can add a mock resolver with MockList as follows:
 *
 * ```
 * {
 *   Person: () =>({
 *     summary: () => new MockList([0, 12]),
 *   }),
 * }
 * ```
 *
 * Now the mock data will contain between zero and 12 summary entries.
 *
 * ### Accessing arguments in mock resolvers
 *
 * Since the mock functions on fields are actually just GraphQL resolvers, you can use arguments and context in them as well:
 *
 * ```
 * {
 *   Person: () => ({
 *     // the number of friends in the list now depends on numPages
 *     paginatedFriends: (root, { numPages }) => new MockList(numPages * PAGE_SIZE),
 *   }),
 * }
 * ```
 *
 * You can read some background and flavor on this approach in our blog post, ["Mocking your server with one line of code"](https://medium.com/apollo-stack/mocking-your-server-with-just-one-line-of-code-692feda6e9cd).
 *
 * ## Mocking interfaces
 *
 * You will need resolvers to mock interfaces. By default [`addMocksToSchema`](#addmockfunctionstoschema) will overwrite resolver functions.
 * By setting the property `preserveResolvers` on the options object to `true`, the type resolvers will be preserved.
 *
 * ```
 * import {
 *   makeExecutableSchema,
 *   addMocksToSchema
 * } from 'graphql-tools'
 * import mocks from './mocks' // your mock functions
 *
 * const typeDefs = `
 * type Query {
 *   fetchMore(listType: String!, amount: Int!, offset: Int!): List
 * }
 *
 * type Distributor {
 *   id: Int
 *   name: String
 * }
 *
 * type Product {
 *   id: Int
 *   name: String
 * }
 *
 * interface List {
 *   amount: Int
 *   offset: Int
 *   total: Int
 *   remaining: Int
 * }
 *
 * type DistributorList implements List {
 *   amount: Int
 *   offset: Int
 *   total: Int
 *   remaining: Int
 *   items: [Distributor]
 * }
 *
 * type ProductList implements List {
 *   amount: Int
 *   offset: Int
 *   total: Int
 *   remaining: Int
 *   items: [Product]
 * }
 * `
 *
 * const typeResolvers = {
 *   List: {
 *     __resolveType(data) {
 *       return data.typename // typename property must be set by your mock functions
 *     }
 *   }
 * }
 *
 * const schema = makeExecutableSchema({
 *   typeDefs,
 *   typeResolvers
 * })
 *
 * addMocksToSchema({
 *     schema,
 *     mocks,
 *     preserveResolvers: true
 * })
 * ```
 *
 * ## Mocking a schema using introspection
 *
 * The GraphQL specification allows clients to introspect the schema with a [special set of types and fields](https://facebook.github.io/graphql/#sec-Introspection) that every schema must include. The results of a [standard introspection query](https://github.com/graphql/graphql-js/blob/master/src/utilities/introspectionQuery.js) can be used to generate an instance of GraphQLSchema which can be mocked as explained above.
 *
 * This helps when you need to mock a schema defined in a language other than JS, for example Go, Ruby, or Python.
 *
 * To convert an [introspection query](https://github.com/graphql/graphql-js/blob/master/src/utilities/introspectionQuery.js) result to a `GraphQLSchema` object, you can use the `buildClientSchema` utility from the `graphql` package.
 *
 * ```
 * import { buildClientSchema } from 'graphql';
 * import * as introspectionResult from 'schema.json';
 *
 * const schema = buildClientSchema(introspectionResult);
 *
 * addMocksToSchema({schema});
 * ```
 *
 * ## API
 *
 * ### addMocksToSchema
 *
 * ```
 * import { addMocksToSchema } from 'graphql-tools';
 *
 * addMocksToSchema({
 *   schema,
 *   mocks: {},
 *   preserveResolvers: false,
 * });
 * ```
 *
 * Given an instance of GraphQLSchema and a mock object, `addMocksToSchema` modifies the schema in place to return mock data for any valid query that is sent to the server. If `mocks` is not passed, the defaults will be used for each of the scalar types. If `preserveResolvers` is set to `true`, existing resolvers will not be overwritten to provide mock data. This can be used to mock some parts of the server and not others.
 *
 * ### MockList
 *
 * ```
 * import { MockList } from 'graphql-tools';
 *
 * new MockList(length: number | number[], mockFunction: Function);
 * ```
 *
 * This is an object you can return from your mock resolvers which calls the `mockFunction` once for each list item. The first argument can either be an exact length, or an inclusive range of possible lengths for the list, in case you want to see how your UI responds to varying lists of data.
 *
 * ### mockServer
 *
 * ```
 * import { mockServer } from 'graphql-tools';
 *
 * // This can be an SDL schema string (eg the result of `buildClientSchema` above)
 * // or a GraphQLSchema object (eg the result of `buildSchema` from `graphql`)
 * const schema = `...`
 *
 * // Same mocks object that `addMocksToSchema` takes above
 * const mocks = {}
 * preserveResolvers = false
 *
 * const server = mockServer(schemaString, mocks, preserveResolvers);
 *
 * const query = `{ __typename }`
 * const variables = {}
 *
 * server.query(query, variables)
 *   .then(response => {
 *     console.log(response)
 *   })
 * ```
 *
 * `mockServer` is just a convenience wrapper on top of `addMocksToSchema`. It adds your mock resolvers to your schema and returns a client that will correctly execute
 * your query with variables. **Note**: when executing queries from the returned server,
 * `context` and `root` will both equal `{}`.
 *
 * @packageDocumentation
 */

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLType,
  GraphQLField,
  GraphQLResolveInfo,
  getNullableType,
  getNamedType,
  GraphQLNamedType,
  GraphQLFieldResolver,
  GraphQLNullableType,
  isSchema,
  isObjectType,
  isUnionType,
  isInterfaceType,
  isListType,
  isEnumType,
  isAbstractType,
} from 'graphql';
import { v4 as uuid } from 'uuid';

import { buildSchemaFromTypeDefinitions } from '../generate/index';
import { forEachField } from '../utils/index';

import {
  IMocks,
  IMockServer,
  IMockOptions,
  IMockFn,
  IMockTypeFn,
  ITypeDefinitions,
} from '../Interfaces';

/**
 * This function wraps addMocksToSchema for more convenience
 */
function mockServer(
  schema: GraphQLSchema | ITypeDefinitions,
  mocks: IMocks,
  preserveResolvers: boolean = false,
): IMockServer {
  let mySchema: GraphQLSchema;
  if (!isSchema(schema)) {
    // TODO: provide useful error messages here if this fails
    mySchema = buildSchemaFromTypeDefinitions(schema);
  } else {
    mySchema = schema;
  }

  addMocksToSchema({ schema: mySchema, mocks, preserveResolvers });

  return { query: (query, vars) => graphql(mySchema, query, {}, {}, vars) };
}

const defaultMockMap: Map<string, IMockFn> = new Map();
defaultMockMap.set('Int', () => Math.round(Math.random() * 200) - 100);
defaultMockMap.set('Float', () => Math.random() * 200 - 100);
defaultMockMap.set('String', () => 'Hello World');
defaultMockMap.set('Boolean', () => Math.random() > 0.5);
defaultMockMap.set('ID', () => uuid());

// TODO allow providing a seed such that lengths of list could be deterministic
// this could be done by using casual to get a random list length if the casual
// object is global.
function addMocksToSchema({
  schema,
  mocks = {},
  preserveResolvers = false,
}: IMockOptions): void {
  if (!schema) {
    throw new Error('Must provide schema to mock');
  }
  if (!isSchema(schema)) {
    throw new Error('Value at "schema" must be of type GraphQLSchema');
  }
  if (!isObject(mocks)) {
    throw new Error('mocks must be of type Object');
  }

  // use Map internally, because that API is nicer.
  const mockFunctionMap: Map<string, IMockFn> = new Map();
  Object.keys(mocks).forEach((typeName) => {
    mockFunctionMap.set(typeName, mocks[typeName]);
  });

  mockFunctionMap.forEach((mockFunction, mockTypeName) => {
    if (typeof mockFunction !== 'function') {
      throw new Error(`mockFunctionMap[${mockTypeName}] must be a function`);
    }
  });

  const mockType = function (
    type: GraphQLType,
    _typeName?: string,
    fieldName?: string,
  ): GraphQLFieldResolver<any, any> {
    // order of precendence for mocking:
    // 1. if the object passed in already has fieldName, just use that
    // --> if it's a function, that becomes your resolver
    // --> if it's a value, the mock resolver will return that
    // 2. if the nullableType is a list, recurse
    // 2. if there's a mock defined for this typeName, that will be used
    // 3. if there's no mock defined, use the default mocks for this type
    return (
      root: any,
      args: { [key: string]: any },
      context: any,
      info: GraphQLResolveInfo,
    ): any => {
      // nullability doesn't matter for the purpose of mocking.
      const fieldType = getNullableType(type) as GraphQLNullableType;

      if (fieldName && root && typeof root[fieldName] !== 'undefined') {
        let result: any;

        // if we're here, the field is already defined
        if (typeof root[fieldName] === 'function') {
          result = root[fieldName](root, args, context, info);
          if (result instanceof MockList) {
            result = result.mock(
              root,
              args,
              context,
              info,
              fieldType as GraphQLList<any>,
              mockType,
            );
          }
        } else {
          result = root[fieldName];
        }

        // Now we merge the result with the default mock for this type.
        // This allows overriding defaults while writing very little code.
        const namedFieldType = getNamedType(fieldType);
        if (mockFunctionMap.has(namedFieldType.name)) {
          const mock = mockFunctionMap.get(namedFieldType.name);

          result = mergeMocks(
            mock.bind(null, root, args, context, info),
            result,
          );
        }
        return result;
      }

      if (isListType(fieldType)) {
        return [
          mockType(fieldType.ofType)(root, args, context, info),
          mockType(fieldType.ofType)(root, args, context, info),
        ];
      }
      if (mockFunctionMap.has(fieldType.name) && !isAbstractType(fieldType)) {
        // the object passed doesn't have this field, so we apply the default mock
        const mock = mockFunctionMap.get(fieldType.name);
        return mock(root, args, context, info);
      }
      if (isObjectType(fieldType)) {
        // objects don't return actual data, we only need to mock scalars!
        return {};
      }
      // if a mock function is provided for unionType or interfaceType, execute it to resolve the concrete type
      // otherwise randomly pick a type from all implementation types
      if (isAbstractType(fieldType)) {
        let implementationType;
        if (mockFunctionMap.has(fieldType.name)) {
          const mock = mockFunctionMap.get(fieldType.name);
          const interfaceMockObj = mock(root, args, context, info);
          if (!interfaceMockObj || !interfaceMockObj.__typename) {
            return Error(`Please return a __typename in "${fieldType.name}"`);
          }
          implementationType = schema.getType(interfaceMockObj.__typename);
        } else {
          const possibleTypes = schema.getPossibleTypes(fieldType);
          implementationType = getRandomElement(possibleTypes);
        }
        return {
          __typename: implementationType,
          ...mockType(implementationType)(root, args, context, info),
        };
      }

      if (isEnumType(fieldType)) {
        return getRandomElement(fieldType.getValues()).value;
      }

      if (defaultMockMap.has(fieldType.name)) {
        const defaultMock = defaultMockMap.get(fieldType.name);
        return defaultMock(root, args, context, info);
      }

      // if we get to here, we don't have a value, and we don't have a mock for this type,
      // we could return undefined, but that would be hard to debug, so we throw instead.
      // however, we returning it instead of throwing it, so preserveResolvers can handle the failures.
      return Error(`No mock defined for type "${fieldType.name}"`);
    };
  };

  forEachField(
    schema,
    (field: GraphQLField<any, any>, typeName: string, fieldName: string) => {
      assignResolveType(field.type, preserveResolvers);
      let mockResolver: GraphQLFieldResolver<any, any> = mockType(
        field.type,
        typeName,
        fieldName,
      );

      // we have to handle the root mutation and root query types differently,
      // because no resolver is called at the root.
      const queryType = schema.getQueryType();
      const isOnQueryType = queryType != null && queryType.name === typeName;

      const mutationType = schema.getMutationType();
      const isOnMutationType =
        mutationType != null && mutationType.name === typeName;

      if (isOnQueryType || isOnMutationType) {
        if (mockFunctionMap.has(typeName)) {
          const rootMock = mockFunctionMap.get(typeName);
          // XXX: BUG in here, need to provide proper signature for rootMock.
          if (
            typeof rootMock(undefined, {}, {}, {} as any)[fieldName] ===
            'function'
          ) {
            mockResolver = (
              root: any,
              args: { [key: string]: any },
              context: any,
              info: GraphQLResolveInfo,
            ) => {
              const updatedRoot = root ?? {}; // TODO: should we clone instead?
              updatedRoot[fieldName] = rootMock(root, args, context, info)[
                fieldName
              ];
              // XXX this is a bit of a hack to still use mockType, which
              // lets you mock lists etc. as well
              // otherwise we could just set field.resolve to rootMock()[fieldName]
              // it's like pretending there was a resolver that ran before
              // the root resolver.
              return mockType(field.type, typeName, fieldName)(
                updatedRoot,
                args,
                context,
                info,
              );
            };
          }
        }
      }
      if (!preserveResolvers || !field.resolve) {
        field.resolve = mockResolver;
      } else {
        const oldResolver = field.resolve;
        field.resolve = (
          rootObject: any,
          args: { [key: string]: any },
          context: any,
          info: GraphQLResolveInfo,
        ) =>
          Promise.all([
            mockResolver(rootObject, args, context, info),
            oldResolver(rootObject, args, context, info),
          ]).then((values) => {
            const [mockedValue, resolvedValue] = values;

            // In case we couldn't mock
            if (mockedValue instanceof Error) {
              // only if value was not resolved, populate the error.
              if (undefined === resolvedValue) {
                throw mockedValue;
              }
              return resolvedValue;
            }

            if (resolvedValue instanceof Date && mockedValue instanceof Date) {
              return undefined !== resolvedValue ? resolvedValue : mockedValue;
            }

            if (isObject(mockedValue) && isObject(resolvedValue)) {
              // Object.assign() won't do here, as we need to all properties, including
              // the non-enumerable ones and defined using Object.defineProperty
              const emptyObject = Object.create(
                Object.getPrototypeOf(resolvedValue),
              );
              return copyOwnProps(emptyObject, resolvedValue, mockedValue);
            }
            return undefined !== resolvedValue ? resolvedValue : mockedValue;
          });
      }
    },
  );
}

function isObject(thing: any) {
  return thing === Object(thing) && !Array.isArray(thing);
}

// returns a random element from that ary
function getRandomElement(ary: ReadonlyArray<any>) {
  const sample = Math.floor(Math.random() * ary.length);
  return ary[sample];
}

function mergeObjects(a: Record<string, any>, b: Record<string, any>) {
  return Object.assign(a, b);
}

function copyOwnPropsIfNotPresent(
  target: Record<string, any>,
  source: Record<string, any>,
) {
  Object.getOwnPropertyNames(source).forEach((prop) => {
    if (!Object.getOwnPropertyDescriptor(target, prop)) {
      const propertyDescriptor = Object.getOwnPropertyDescriptor(source, prop);
      Object.defineProperty(
        target,
        prop,
        propertyDescriptor == null ? {} : propertyDescriptor,
      );
    }
  });
}

function copyOwnProps(
  target: Record<string, any>,
  ...sources: Array<Record<string, any>>
) {
  sources.forEach((source) => {
    let chain = source;
    while (chain != null) {
      copyOwnPropsIfNotPresent(target, chain);
      chain = Object.getPrototypeOf(chain);
    }
  });
  return target;
}

// takes either an object or a (possibly nested) array
// and completes the customMock object with any fields
// defined on genericMock
// only merges objects or arrays. Scalars are returned as is
function mergeMocks(genericMockFunction: () => any, customMock: any): any {
  if (Array.isArray(customMock)) {
    return customMock.map((el: any) => mergeMocks(genericMockFunction, el));
  }
  if (isObject(customMock)) {
    return mergeObjects(genericMockFunction(), customMock);
  }
  return customMock;
}

function getResolveType(namedFieldType: GraphQLNamedType) {
  if (isAbstractType(namedFieldType)) {
    return namedFieldType.resolveType;
  }
}

function assignResolveType(type: GraphQLType, preserveResolvers: boolean) {
  const fieldType = getNullableType(type) as GraphQLNullableType;
  const namedFieldType = getNamedType(fieldType);

  const oldResolveType = getResolveType(namedFieldType);
  if (preserveResolvers && oldResolveType != null && oldResolveType.length) {
    return;
  }

  if (isInterfaceType(namedFieldType) || isUnionType(namedFieldType)) {
    // the default `resolveType` always returns null. We add a fallback
    // resolution that works with how unions and interface are mocked
    namedFieldType.resolveType = (
      data: any,
      _context: any,
      info: GraphQLResolveInfo,
    ) => info.schema.getType(data.__typename) as GraphQLObjectType;
  }
}

class MockList {
  private readonly len: number | Array<number>;
  private readonly wrappedFunction: GraphQLFieldResolver<any, any> | undefined;

  // wrappedFunction can return another MockList or a value
  constructor(
    len: number | Array<number>,
    wrappedFunction?: GraphQLFieldResolver<any, any>,
  ) {
    this.len = len;
    if (typeof wrappedFunction !== 'undefined') {
      if (typeof wrappedFunction !== 'function') {
        throw new Error(
          'Second argument to MockList must be a function or undefined',
        );
      }
      this.wrappedFunction = wrappedFunction;
    }
  }

  public mock(
    root: any,
    args: { [key: string]: any },
    context: any,
    info: GraphQLResolveInfo,
    fieldType: GraphQLList<any>,
    mockTypeFunc: IMockTypeFn,
  ) {
    let arr: Array<any>;
    if (Array.isArray(this.len)) {
      arr = new Array(this.randint(this.len[0], this.len[1]));
    } else {
      arr = new Array(this.len);
    }

    for (let i = 0; i < arr.length; i++) {
      if (typeof this.wrappedFunction === 'function') {
        const res = this.wrappedFunction(root, args, context, info);
        if (res instanceof MockList) {
          const nullableType = getNullableType(fieldType.ofType) as GraphQLList<
            any
          >;
          arr[i] = res.mock(
            root,
            args,
            context,
            info,
            nullableType,
            mockTypeFunc,
          );
        } else {
          arr[i] = res;
        }
      } else {
        arr[i] = mockTypeFunc(fieldType.ofType)(root, args, context, info);
      }
    }
    return arr;
  }

  private randint(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }
}

// retain addMockFunctionsToSchema for backwards compatibility

function addMockFunctionsToSchema({
  schema,
  mocks = {},
  preserveResolvers = false,
}: IMockOptions): void {
  addMocksToSchema({ schema, mocks, preserveResolvers });
}

export { addMocksToSchema, addMockFunctionsToSchema, MockList, mockServer };
