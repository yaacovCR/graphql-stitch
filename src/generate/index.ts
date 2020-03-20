/**
 *
 * The graphql-tools-fork package allows you to create a GraphQL.js GraphQLSchema instance from GraphQL schema language using the function `makeExecutableSchema`.
 *
 * ## Example
 *
 * When using `graphql-tools`, you describe the schema as a GraphQL type language string:
 *
 * ```
 * const typeDefs = `
 *   type Author {
 *     id: Int!
 *     firstName: String
 *     lastName: String
 *     """
 *     the list of Posts by this author
 *     """
 *     posts: [Post]
 *   }
 *
 *   type Post {
 *     id: Int!
 *     title: String
 *     author: Author
 *     votes: Int
 *   }
 *
 *   # the schema allows the following query:
 *   type Query {
 *     posts: [Post]
 *     author(id: Int!): Author
 *   }
 *
 *   # this schema allows the following mutation:
 *   type Mutation {
 *     upvotePost (
 *       postId: Int!
 *     ): Post
 *   }
 * `;
 * ```
 *
 * Then you define resolvers as a nested object that maps type and field names to resolver functions:
 *
 * ```
 * import { find, filter } from 'lodash';
 *
 * // example data
 * const authors = [
 *   { id: 1, firstName: 'Tom', lastName: 'Coleman' },
 *   { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
 *   { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
 * ];
 *
 * const posts = [
 *   { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
 *   { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
 *   { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
 *   { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
 * ];
 *
 * const resolvers = {
 *   Query: {
 *     posts: () => posts,
 *     author: (_, { id }) => find(authors, { id }),
 *   },
 *
 *   Mutation: {
 *     upvotePost: (_, { postId }) => {
 *       const post = find(posts, { id: postId });
 *       if (!post) {
 *         throw new Error(`Couldn't find post with id ${postId}`);
 *       }
 *       post.votes += 1;
 *       return post;
 *     },
 *   },
 *
 *   Author: {
 *     posts: author => filter(posts, { authorId: author.id }),
 *   },
 *
 *   Post: {
 *     author: post => find(authors, { id: post.authorId }),
 *   },
 * };
 * ```
 *
 * At the end, the schema and resolvers are combined using `makeExecutableSchema`:
 *
 * ```
 * import { makeExecutableSchema } from 'graphql-tools';
 *
 * export const schema = makeExecutableSchema({
 *   typeDefs,
 *   resolvers,
 * });
 * ```
 *
 * This example has the entire type definition in one string and all resolvers in one object, but you can combine types and resolvers from multiple files, as documented in the [extending types](#extending-types) section below.
 *
 * ## Extending Types
 *
 * It's easy to add additional fields to existing types using the `extend` keyword.  Using `extend` is particularly useful in avoiding a large list of fields on root Queries and Mutations.  You can use it like this:
 *
 * ```
 * const typeDefs = [`
 *   schema {
 *     query: Query
 *   }
 *
 *   type Query {
 *     bars: [Bar]!
 *   }
 *
 *   type Bar {
 *     id
 *   }
 *   `, `
 *   type Foo {
 *     id: String!
 *   }
 *
 *   extend type Query {
 *     foos: [Foo]!
 *   }
 * `]
 * ```
 *
 * ## Learning the GraphQL schema language
 *
 * The official documentation on graphql.org now has [a section about GraphQL schemas](http://graphql.org/learn/schema/) which explains all of the different schema features and how to use them with the schema language.
 *
 * The type definitions must define a query type, which means a minimal schema would look something like this:
 * ```
 * const typeDefs = [`
 *   schema {
 *     query: RootQuery
 *   }
 *
 *   type RootQuery {
 *     aNumber: Int
 *   }
 * `];
 * ```
 *
 * ## Descriptions & Deprecations
 *
 * GraphiQL has built-in support for displaying docstrings with markdown syntax. You can easily add docstrings to types, fields and arguments like below:
 *
 * ```
 * """
 * Description for the type
 * """
 * type MyObjectType {
 *   """
 *   Description for field
 *   Supports multi-line description
 *   """
 *   myField: String!
 *
 *   otherField(
 *     """
 *     Description for argument
 *     """
 *     arg: Int
 *   )
 *
 *   oldField(
 *     """
 *     Description for argument
 *     """
 *     arg: Int
 *   ) @deprecated(reason: "Use otherField instead.")
 * }
 * ```
 *
 * This [GraphQL schema language cheat sheet](https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png) by Hafiz Ismail is an excellent reference for all the features of the GraphQL schema language.
 *
 *
 *
 * When using `graphql-tools`, you define your field resolvers separately from the schema. Since the schema already describes all of the fields, arguments, and result types, the only thing left is a collection of functions that are called to actually execute these fields.
 *
 * Keep in mind that GraphQL resolvers can return [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). In fact, most resolvers that do real work - for example fetching data from a database or a REST API - will return a promise. If you’re not familiar with promises, here’s [a brief overview](https://scotch.io/tutorials/javascript-promises-for-dummies).
 *
 *
 * ## Resolver map
 *
 * In order to respond to queries, a schema needs to have resolvers for all fields. Resolvers are per field functions that are given a parent object, arguments, and the execution context, and are responsible for returning a result for that field. Resolvers cannot be included in the GraphQL schema language, so they must be added separately. The collection of resolvers is called the "resolver map".
 *
 * The `resolverMap` object (`IResolvers`) should have a map of resolvers for each relevant GraphQL Object Type. The following is an example of a valid `resolverMap` object:
 *
 * ```
 * const resolverMap = {
 *   Query: {
 *     author(obj, args, context, info) {
 *       return find(authors, { id: args.id });
 *     },
 *   },
 *   Author: {
 *     posts(author) {
 *       return filter(posts, { authorId: author.id });
 *     },
 *   },
 * };
 * ```
 * > Note: If you are using mocking, the `preserveResolvers` argument of [`addMocksToSchema`](/mocking/#addmockfunctionstoschema) must be set to `true` if you don't want your resolvers to be overwritten by mock resolvers.
 *
 * Note that you don't have to put all of your resolvers in one object. Refer to the ["modularizing the schema"](/generate-schema/) section to learn how to combine multiple resolver maps into one.
 *
 * ## Resolver function signature
 *
 * Every resolver in a GraphQL.js schema accepts four positional arguments:
 *
 * ```
 * fieldName(obj, args, context, info) { result }
 * ```
 *
 * These arguments have the following meanings and conventional names:
 *
 * 1. `obj`: The object that contains the result returned from the resolver on the parent field, or, in the case of a top-level `Query` field, the `rootValue` passed from the [server configuration](https://www.apollographql.com/docs/apollo-server/setup/). This argument enables the nested nature of GraphQL queries.
 * 2. `args`: An object with the arguments passed into the field in the query. For example, if the field was called with `author(name: "Ada")`, the `args` object would be: `{ "name": "Ada" }`.
 * 3. `context`: This is an object shared by all resolvers in a particular query, and is used to contain per-request state, including authentication information, dataloader instances, and anything else that should be taken into account when resolving the query. If you're using Apollo Server, [read about how to set the context in the setup documentation](https://www.apollographql.com/docs/apollo-server/essentials/data/#context).
 * 4. `info`: This argument should only be used in advanced cases, but it contains information about the execution state of the query, including the field name, path to the field from the root, and more. It's only documented in the [GraphQL.js source code](https://github.com/graphql/graphql-js/blob/c82ff68f52722c20f10da69c9e50a030a1f218ae/src/type/definition.js#L489-L500).
 *
 * ### Resolver result format
 *
 * Resolvers in GraphQL can return different kinds of results which are treated differently:
 *
 * 1. `null` or `undefined` - this indicates the object could not be found. If your schema says that field is _nullable_, then the result will have a `null` value at that position. If the field is `non-null`, the result will "bubble up" to the nearest nullable field and that result will be set to `null`. This is to ensure that the API consumer never gets a `null` value when they were expecting a result.
 * 2. An array - this is only valid if the schema indicates that the result of a field should be a list. The sub-selection of the query will run once for every item in this array.
 * 3. A promise - resolvers often do asynchronous actions like fetching from a database or backend API, so they can return promises. This can be combined with arrays, so a resolver can return:
 *     1. A promise that resolves an array
 *     2. An array of promises
 * 4. A scalar or object value - a resolver can also return any other kind of value, which doesn't have any special meaning but is simply passed down into any nested resolvers, as described in the next section.
 *
 * ### Resolver obj argument
 *
 * The first argument to every resolver, `obj`, can be a bit confusing at first, but it makes sense when you consider what a GraphQL query looks like:
 *
 * ```
 * query {
 *   getAuthor(id: 5){
 *     name
 *     posts {
 *       title
 *       author {
 *         name # this will be the same as the name above
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * You can think of every GraphQL query as a tree of function calls, as explained in detail in the [GraphQL explained blog post](https://blog.apollographql.com/graphql-explained-5844742f195e#.fq5jjdw7t). So the `obj` contains the result of parent resolver, in this case:
 *
 * 1. `obj` in `Query.getAuthor` will be whatever the server configuration passed for `rootValue`.
 * 2. `obj` in `Author.name` and `Author.posts` will be the result from `getAuthor`, likely an Author object from the backend.
 * 3. `obj` in `Post.title` and `Post.author` will be one item from the `posts` result array.
 * 4. `obj` in `Author.name` is the result from the above `Post.author` call.
 *
 * Basically, it's just every resolver function being called in a nested way according to the layout of the query.
 *
 * ### Default resolver
 *
 * You don't need to specify resolvers for _every_ type in your schema. If you don't specify a resolver, GraphQL.js falls back to a default one, which does the following:
 *
 * 1. Returns a property from `obj` with the relevant field name, or
 * 2. Calls a function on `obj` with the relevant field name and passes the query arguments into that function
 *
 * So, in the example query above, the `name` and `title` fields wouldn't need a resolver if the Post and Author objects retrieved from the backend already had those fields.
 *
 * ## Unions and interfaces
 *
 * Unions and interfaces are great when you have fields that are in common between two types.
 *
 * When you have a field in your schema that returns a union or interface type, you will need to specify an extra `__resolveType` field in your resolver map, which tells the GraphQL executor which type the result is, out of the available options.
 *
 * For example, if you have a `Vehicle` interface type with members `Airplane` and `Car`:
 *
 * You could specify the schema like so
 *
 * ```
 * interface Vehicle {
 *   maxSpeed: Int
 * }
 *
 * type Airplane implements Vehicle {
 *   maxSpeed: Int
 *   wingspan: Int
 * }
 *
 * type Car implements Vehicle {
 *   maxSpeed: Int
 *   licensePlate: String
 * }
 * ```
 *
 * ```
 * const resolverMap = {
 *   Vehicle: {
 *     __resolveType(obj, context, info){
 *       if(obj.wingspan){
 *         return 'Airplane';
 *       }
 *
 *       if(obj.licensePlate){
 *         return 'Car';
 *       }
 *
 *       return null;
 *     },
 *   },
 * };
 * ```
 *
 * > Note: Returning the type name as a string from `__resolveType` is only supported starting with GraphQL.js 0.7.2. In previous versions, you had to get a reference using `info.schema.getType('Car')`.
 *
 * ## API
 *
 * In addition to using a resolver map with `makeExecutableSchema`, you can use it with any GraphQL.js schema by importing the following function from `graphql-tools`:
 *
 * ### addResolversToSchema({ schema, resolvers, resolverValidationOptions?, inheritResolversFromInterfaces? })
 *
 * `addResolversToSchema` takes an options object of `IAddResolveFunctionsToSchemaOptions` and modifies the schema in place by attaching the resolvers to the relevant types.
 *
 *
 * ```
 * import { addResolversToSchema } from 'graphql-tools';
 *
 * const resolvers = {
 *   RootQuery: {
 *     author(obj, { name }, context){
 *       console.log("RootQuery called with context " +
 *         context + " to find " + name);
 *       return Author.find({ name });
 *     },
 *   },
 * };
 *
 * addResolversToSchema({ schema, resolvers });
 * ```
 *
 * The `IAddResolveFunctionsToSchemaOptions` object has 4 properties that are described in [`makeExecutableSchema`](/generate-schema/#makeexecutableschemaoptions).
 * ```
 * export interface IAddResolveFunctionsToSchemaOptions {
 *   schema: GraphQLSchema;
 *   resolvers: IResolvers;
 *   resolverValidationOptions?: IResolverValidationOptions;
 *   inheritResolversFromInterfaces?: boolean;
 * }
 * ```
 *
 * ### addSchemaLevelResolver(schema, rootResolveFunction)
 *
 * Some operations, such as authentication, need to be done only once per query. Logically, these operations belong in a schema level resolver field resolver, but unfortunately GraphQL-JS does not let you define one. `addSchemaLevelResolver` solves this by modifying the GraphQLSchema that is passed as the first argument.
 *
 * ## Companion tools
 *
 * Modules and extensions built by the community.
 *
 * ### [graphql-resolvers](https://github.com/lucasconstantino/graphql-resolvers)
 *
 * Composition library for GraphQL, with helpers to combine multiple resolvers into one, specify dependencies between fields, and more.
 *
 * When developing a GraphQL server, it is common to perform some authorization logic on your resolvers, usually based on the context of a request. With `graphql-resolvers` you can easily accomplish that and still make the code decoupled - thus testable - by combining multiple single-logic resolvers into one.
 *
 * The following is an example of a simple logged-in authorization logic:
 *
 * ```
 * const isAuthenticated = (root, args, context, info) => {
 *   if (!context.user) {
 *     return new Error('Not authenticated')
 *   }
 * }
 * ```
 *
 * Which could be used in an actual field resolver like this:
 *
 * ```
 * import { combineResolvers } from 'graphql-resolvers'
 *
 * const protectedField = (root, args, context, info) => 'Protected field value'
 *
 * const resolverMap = {
 *   Query: {
 *     protectedField: combineResolvers(
 *       isAuthenticated,
 *       protectedField
 *     )
 *   }
 * }
 * ```
 *
 * # Connectors or Data Sources
 *
 * By this point in the documentation, you know how to generate a GraphQL.js schema from the GraphQL schema language, and how to add resolvers to that schema to call functions. How do you access your backend from those resolvers? Well, it's quite easy, but as your app gets more complex it might make sense to add some structure. We'll start with the basics and then move on to more advanced conventions.
 *
 * ## Basic fetching
 *
 * As you have read on the [resolvers page](/resolvers/#resolver-result-format), resolvers in GraphQL.js can return Promises. This means it's easy to fetch data using any library that returns a promise for the result:
 *
 * ```
 * import rp from 'request-promise';
 *
 * const resolverMap = {
 *   Query: {
 *     gitHubRepository(root, args, context) {
 *       return rp({ uri: `https://api.github.com/repos/${args.name}` });
 *     }
 *   }
 * }
 * ```
 *
 * ## Factoring out fetching details
 *
 * As you start to have more different resolvers that need to access the GitHub API, the above approach becomes unsustainable. It's good to abstract that away into a "repository" pattern. We call these data fetching functions "connectors":
 *
 * ```
 * // github-connector.js
 * import rp from 'request-promise';
 *
 * // This gives you a place to put GitHub API keys, for example
 * const { GITHUB_API_KEY, GITHUB_API_SECRET } = process.env;
 * const qs = { GITHUB_API_KEY, GITHUB_API_SECRET };
 *
 * export function getRepositoryByName(name) {
 *   return rp({
 *     uri: `https://api.github.com/repos/${name}`,
 *     qs,
 *   });
 * }
 * ```
 *
 * Now, we can use this function in several resolvers:
 *
 * ```
 * import { getRepositoryByName } from './github-connector.js';
 *
 * const resolverMap = {
 *   Query: {
 *     gitHubRepository(root, args, context) {
 *       return getRepositoryByName(args.name);
 *     }
 *   },
 *   Submission: {
 *     repository(root, args, context) {
 *       return getRepositoryByName(root.repositoryFullName);
 *     }
 *   }
 * }
 * ```
 *
 * This means we no longer have to worry about the details of fetching from GitHub inside our resolvers, and we just need to put in the right repository name to fetch. We can improve our GitHub fetching logic over time.
 *
 * ## DataLoader and caching
 *
 * At some point, you might get to a situation where you are fetching the same objects over and over during the course of a single query. For example, you could have a list of repositories which each want to know about their owner:
 *
 * ```
 * query {
 *   repositories(limit: 10) {
 *     owner {
 *       login
 *       avatar_url
 *     }
 *   }
 * }
 * ```
 *
 * Let's say this is our resolver for `owner`:
 *
 * ```
 * import { getAuthorByName } from './github-connector.js';
 *
 * const resolverMap = {
 *   Repository: {
 *     owner(root, args, context) {
 *       return getAuthorByName(root.owner);
 *     },
 *   },
 * };
 * ```
 *
 * If the list of repositories has several that were owned by the same user, the `getAuthorByName` function will be called once for each, doing unnecessary requests to the GitHub API, and running down our API limit.
 *
 * You can improve the situation by adding a per-request cache with `dataloader`, Facebook's [helpful JavaScript library](https://github.com/facebook/dataloader) for in-memory data caching.
 *
 * ### One dataloader per request
 *
 * One important thing to understand about `dataloader` is that it caches the results forever, unless told otherwise. So we really want to make sure we create a new instance for _every_ request sent to our server, so that we de-duplicate fetches in one query but not across multiple requests or, even worse, multiple users.
 *
 * At this point, the code becomes a bit more complex, so we won't reproduce it here. Check out the GitHunt-API example for the details:
 *
 * 1. The [GitHub connector](https://github.com/apollostack/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/github/connector.js), which uses DataLoader, passes along API keys, and does extra caching with GitHub's eTag feature.
 * 2. The [GitHub model](https://github.com/apollostack/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/github/models.js), which defines some helpful functions to fetch users and repositories.
 * 3. The [GraphQL context](https://github.com/apollostack/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/index.js#L67-L73), which includes the models, initialized with the connector for every request.
 * 4. The [resolvers](https://github.com/apollostack/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/sql/schema.js#L63), which use the model from the context to actually fetch the object.
 *
 * The code is more decoupled than necessary for a small example, but it's done that way intentionally to demonstrate how a larger API could be laid out.
 *
 * # Custom scalars and enums
 *
 * The GraphQL specification includes the following default scalar types: `Int`, `Float`, `String`, `Boolean` and `ID`. While this covers most of the use cases, often you need to support custom atomic data types (e.g. Date), or you want a version of an existing type that does some validation. To enable this, GraphQL allows you to define custom scalar types. Enumerations are similar to custom scalars, but their values can only be one of a pre-defined list of strings.
 *
 * ## Custom scalars
 *
 * To define a custom scalar you simply add it to the schema string with the following notation:
 *
 * ```
 * scalar MyCustomScalar
 * ```
 *
 * Afterwards, you have to define the behavior of your `MyCustomScalar` custom scalar by passing an instance of the [`GraphQLScalarType`](http://graphql.org/graphql-js/type/#graphqlscalartype) class in the [resolver map](/resolvers/#resolver-map). This instance can be defined in a [dependency package](#using-a-package) or [in your own code](#custom-graphqlscalartype-instance).
 *
 * For more information about GraphQL's type system, please refer to the [official documentation](http://graphql.org/graphql-js/type/) or to the [Learning GraphQL](https://github.com/mugli/learning-graphql/blob/master/7.%20Deep%20Dive%20into%20GraphQL%20Type%20System.md) tutorial.
 *
 * Note that [Apollo Client does not currently have a way to automatically interpret custom scalars](https://github.com/apollostack/apollo-client/issues/585), so there's no way to automatically reverse the serialization on the client.
 *
 * ### Using a package
 *
 * Here, we'll take the [graphql-type-json](https://github.com/taion/graphql-type-json) package as an example to demonstrate what can be done. This npm package defines a JSON GraphQL scalar type.
 *
 * Add the `graphql-type-json` package to your project's dependencies :
 *
 * ```shell
 * $ npm install --save graphql-type-json
 * ```
 *
 * In your JavaScript code, require the type defined by in the npm package and use it :
 *
 * ```
 * import { makeExecutableSchema } from 'graphql-tools';
 * import GraphQLJSON from 'graphql-type-json';
 *
 * const schemaString = `
 *
 * scalar JSON
 *
 * type Foo {
 *   aField: JSON
 * }
 *
 * type Query {
 *   foo: Foo
 * }
 *
 * `;
 *
 * const resolveFunctions = {
 *   JSON: GraphQLJSON
 * };
 *
 * const jsSchema = makeExecutableSchema({ typeDefs: schemaString, resolvers: resolveFunctions });
 * ```
 *
 * Remark : `GraphQLJSON` is a [`GraphQLScalarType`](http://graphql.org/graphql-js/type/#graphqlscalartype) instance.
 *
 * ### Custom `GraphQLScalarType` instance
 *
 * If needed, you can define your own [GraphQLScalarType](http://graphql.org/graphql-js/type/#graphqlscalartype) instance. This can be done the following way :
 *
 * ```
 * import { GraphQLScalarType } from 'graphql';
 * import { makeExecutableSchema } from 'graphql-tools';
 *
 * const myCustomScalarType = new GraphQLScalarType({
 *   name: 'MyCustomScalar',
 *   description: 'Description of my custom scalar type',
 *   serialize(value) {
 *     let result;
 *     // Implement your own behavior here by setting the 'result' variable
 *     return result;
 *   },
 *   parseValue(value) {
 *     let result;
 *     // Implement your own behavior here by setting the 'result' variable
 *     return result;
 *   },
 *   parseLiteral(ast) {
 *     switch (ast.kind) {
 *       // Implement your own behavior here by returning what suits your needs
 *       // depending on ast.kind
 *     }
 *   }
 * });
 *
 * const schemaString = `
 *
 * scalar MyCustomScalar
 *
 * type Foo {
 *   aField: MyCustomScalar
 * }
 *
 * type Query {
 *   foo: Foo
 * }
 *
 * `;
 *
 * const resolverFunctions = {
 *   MyCustomScalar: myCustomScalarType
 * };
 *
 * const jsSchema = makeExecutableSchema({
 *   typeDefs: schemaString,
 *   resolvers: resolverFunctions,
 * });
 * ```
 *
 * ## Custom scalar examples
 *
 * Let's look at a couple of examples to demonstrate how a custom scalar type can be defined.
 *
 * ### Date as a scalar
 *
 * The goal is to define a `Date` data type for returning `Date` values from the database. Let's say we're using a MongoDB driver that uses the native JavaScript `Date` data type. The `Date` data type can be easily serialized as a number using the [`getTime()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime). Therefore, we would like our GraphQL server to send and receive `Date`s as numbers when serializing to JSON. This number will be resolved to a `Date` on the server representing the date value. On the client, the user can simply create a new date from the received numeric value.
 *
 * The following is the implementation of the `Date` data type. First, the schema:
 *
 * ```
 * scalar Date
 *
 * type MyType {
 *    created: Date
 * }
 * ```
 *
 * Next, the resolver:
 *
 * ```
 * import { GraphQLScalarType } from 'graphql';
 * import { Kind } from 'graphql/language';
 *
 * const resolverMap = {
 *   Date: new GraphQLScalarType({
 *     name: 'Date',
 *     description: 'Date custom scalar type',
 *     parseValue(value) {
 *       return new Date(value); // value from the client
 *     },
 *     serialize(value) {
 *       return value.getTime(); // value sent to the client
 *     },
 *     parseLiteral(ast) {
 *       if (ast.kind === Kind.INT) {
 *         return new Date(ast.value) // ast value is always in string format
 *       }
 *       return null;
 *     },
 *   }),
 * };
 * ```
 *
 * ### Validations
 *
 * In this example, we follow the [official GraphQL documentation](http://graphql.org/docs/api-reference-type-system/) for the scalar datatype. Let's say that you have a database field that should only contain odd numbers. First, the schema:
 *
 * ```
 * scalar Odd
 *
 * type MyType {
 *     oddValue: Odd
 * }
 * ```
 *
 * Next, the resolver:
 *
 * ```
 * import { GraphQLScalarType } from 'graphql';
 * import { Kind } from 'graphql/language';
 *
 * function oddValue(value) {
 *   return value % 2 === 1 ? value : null;
 * }
 *
 * const resolverMap = {
 *   Odd: new GraphQLScalarType({
 *     name: 'Odd',
 *     description: 'Odd custom scalar type',
 *     parseValue: oddValue,
 *     serialize: oddValue,
 *     parseLiteral(ast) {
 *       if (ast.kind === Kind.INT) {
 *         return oddValue(parseInt(ast.value, 10));
 *       }
 *       return null;
 *     },
 *   }),
 * };
 * ```
 *
 * ## Enums
 *
 * An Enum is similar to a scalar type, but it can only be one of several values defined in the schema. Enums are most useful in a situation where you need the user to pick from a prescribed list of options, and they will auto-complete in tools like GraphiQL.
 *
 * In the schema language, an enum looks like this:
 *
 * ```
 * enum AllowedColor {
 *   RED
 *   GREEN
 *   BLUE
 * }
 * ```
 *
 * You can use it in your schema anywhere you could use a scalar:
 *
 * ```
 * type Query {
 *   favoriteColor: AllowedColor # As a return value
 *   avatar(borderColor: AllowedColor): String # As an argument
 * }
 * ```
 *
 * Then, you query it like this:
 *
 * ```
 * query {
 *   avatar(borderColor: RED)
 * }
 * ```
 *
 * If you want to pass the enum value as a variable, use a string in your JSON, like so:
 *
 * ```
 * query MyAvatar($color: AllowedColor) {
 *   avatar(borderColor: $color)
 * }
 * ```
 *
 * ```
 * {
 *   "color": "RED"
 * }
 * ```
 *
 * Putting it all together:
 *
 * ```
 * const typeDefs = `
 *   enum AllowedColor {
 *     RED
 *     GREEN
 *     BLUE
 *   }
 *
 *   type Query {
 *     favoriteColor: AllowedColor # As a return value
 *     avatar(borderColor: AllowedColor): String # As an argument
 *   }
 * `;
 *
 * const resolvers = {
 *   Query: {
 *     favoriteColor: () => 'RED',
 *     avatar: (root, args) => {
 *       // args.borderColor is 'RED', 'GREEN', or 'BLUE'
 *     },
 *   }
 * };
 *
 * const schema = makeExecutableSchema({ typeDefs, resolvers });
 * ```
 *
 * ### Internal values
 *
 * Often, you might have a different value for the enum in your code than in the public API. So maybe in the API we call it `RED`, but inside our resolvers we want to use `#f00` instead. That's why you can use the `resolvers` argument to `makeExecutableSchema` to add custom values to your enum that only show up internally:
 *
 * ```
 * const resolvers = {
 *   AllowedColor: {
 *     RED: '#f00',
 *     GREEN: '#0f0',
 *     BLUE: '#00f',
 *   }
 * };
 * ```
 *
 * These don't change the public API at all, but they do allow you to use that value instead of the schema value in your resolvers, like so:
 *
 * ```
 * const resolvers = {
 *   AllowedColor: {
 *     RED: '#f00',
 *     GREEN: '#0f0',
 *     BLUE: '#00f',
 *   },
 *   Query: {
 *     favoriteColor: () => '#f00',
 *     avatar: (root, args) => {
 *       // args.favoriteColor is '#f00', '#0f0', or '#00f'
 *     },
 *   }
 * };
 * ```
 *
 * Most of the time, you don't need to use this feature of enums unless you're interoperating with some other library which already expects its values in a different form.
 *
 *
 * ## API
 *
 * ### makeExecutableSchema(options)
 *
 * `makeExecutableSchema` takes a single argument: an object of options. Only the `typeDefs` option is required.
 *
 * ```
 * import { makeExecutableSchema } from 'graphql-tools';
 *
 * const jsSchema = makeExecutableSchema({
 *   typeDefs,
 *   resolvers, // optional
 *   logger, // optional
 *   allowUndefinedInResolve = false, // optional
 *   resolverValidationOptions = {}, // optional
 *   directiveResolvers = null, // optional
 *   schemaDirectives = null,  // optional
 *   parseOptions = {},  // optional
 *   inheritResolversFromInterfaces = false  // optional
 * });
 * ```
 *
 * - `typeDefs` is a required argument and should be an GraphQL schema language string or array of GraphQL schema language strings or a function that takes no arguments and returns an array of GraphQL schema language strings. The order of the strings in the array is not important, but it must include a schema definition.
 *
 * - `resolvers` is an optional argument _(empty object by default)_ and should be an object that follows the pattern explained in [article on resolvers](/resolvers/).
 *
 * - `logger` is an optional argument, which can be used to print errors to the server console that are usually swallowed by GraphQL. The `logger` argument should be an object with a `log` function, eg. `const logger = { log: e => console.log(e) }`
 *
 * - `parseOptions` is an optional argument which allows customization of parse when specifying `typeDefs` as a string.
 *
 * - `allowUndefinedInResolve` is an optional argument, which is `true` by default. When set to `false`, causes your resolver to throw errors if they return undefined, which can help make debugging easier.
 *
 * - `resolverValidationOptions` is an optional argument which accepts an `ResolverValidationOptions` object which has the following boolean properties:
 * * - `requireResolversForArgs` will cause `makeExecutableSchema` to throw an error if no resolver is defined for a field that has arguments.
 *
 * * - `requireResolversForNonScalar` will cause `makeExecutableSchema` to throw an error if a non-scalar field has no resolver defined. Setting this to `true` can be helpful in catching errors, but defaults to `false` to avoid confusing behavior for those coming from other GraphQL libraries.
 *
 * * - `requireResolversForAllFields` asserts that *all* fields have valid resolvers.
 *
 * * - `requireResolversForResolveType` will require a `resolveType()` method for Interface and Union types. This can be passed in with the field resolvers as `__resolveType()`. False to disable the warning.
 *
 * * - `allowResolversNotInSchema` turns off the functionality which throws errors when resolvers are found which are not present in the schema. Defaults to `false`, to help catch common errors.
 *
 * - `inheritResolversFromInterfaces` GraphQL Objects that implement interfaces will inherit missing resolvers from their interface types defined in the `resolvers` object.
 *
 * @packageDocumentation
 * */

import { GraphQLSchema, GraphQLFieldResolver } from 'graphql';

import {
  IAddResolversToSchemaOptions,
  IResolvers,
  IResolverValidationOptions,
} from '../Interfaces';

import addResolversToSchema from './addResolversToSchema';
import addSchemaLevelResolver from './addSchemaLevelResolver';
import assertResolversPresent from './assertResolversPresent';

export { addResolversToSchema, addSchemaLevelResolver, assertResolversPresent };

export { default as attachDirectiveResolvers } from './attachDirectiveResolvers';
export { default as attachConnectorsToContext } from './attachConnectorsToContext';
export { default as buildSchemaFromTypeDefinitions } from './buildSchemaFromTypeDefinitions';
export { chainResolvers } from './chainResolvers';
export { default as checkForResolveTypeResolver } from './checkForResolveTypeResolver';
export { default as concatenateTypeDefs } from './concatenateTypeDefs';
export { default as decorateWithLogger } from './decorateWithLogger';
export { default as extendResolversFromInterfaces } from './extendResolversFromInterfaces';
export {
  extractExtensionDefinitions,
  filterExtensionDefinitions,
} from './extensionDefinitions';
export { default as SchemaError } from './SchemaError';
export * from './makeExecutableSchema';

// These functions are preserved for backwards compatibility.
// They are not simply rexported with new (old) names so as to allow
// typedoc to annotate them.
export function addResolveFunctionsToSchema(
  schemaOrOptions: GraphQLSchema | IAddResolversToSchemaOptions,
  legacyInputResolvers?: IResolvers,
  legacyInputValidationOptions?: IResolverValidationOptions,
) {
  addResolversToSchema(
    schemaOrOptions,
    legacyInputResolvers,
    legacyInputValidationOptions,
  );
}

export function addSchemaLevelResolveFunction(
  schema: GraphQLSchema,
  fn: GraphQLFieldResolver<any, any>,
): void {
  addSchemaLevelResolver(schema, fn);
}

export function assertResolveFunctionsPresent(
  schema: GraphQLSchema,
  resolverValidationOptions: IResolverValidationOptions = {},
) {
  assertResolversPresent(schema, resolverValidationOptions);
}
