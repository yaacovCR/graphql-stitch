import {
  parse,
  extendSchema,
  buildASTSchema,
  GraphQLSchema,
  DocumentNode,
} from 'graphql';

import { ITypeDefinitions, GraphQLParseOptions, isASTNode } from '../Interfaces';

import {
  extractExtensionDefinitions,
  filterExtensionDefinitions,
} from './extensionDefinitions';
import concatenateTypeDefs from './concatenateTypeDefs';
import SchemaError from './SchemaError';

function buildSchemaFromTypeDefinitions(
  typeDefinitions: ITypeDefinitions,
  parseOptions?: GraphQLParseOptions,
): GraphQLSchema {
  // TODO: accept only array here, otherwise interfaces get confusing.
  let document: DocumentNode;

  if (isASTNode(typeDefinitions)) {
    document = typeDefinitions;
  } else if (typeof typeDefinitions === 'string') {
    document = parse(typeDefinitions, parseOptions);
  } else {
    if (!Array.isArray(typeDefinitions)) {
      throw new SchemaError(
        `typeDefs must be a string, array or schema AST, got ${typeof typeDefinitions}`,
      );
    }
    document = parse(concatenateTypeDefs(typeDefinitions), parseOptions);
  }

  const typesAst = filterExtensionDefinitions(document);

  const backcompatOptions = { commentDescriptions: true };
  let schema: GraphQLSchema = buildASTSchema(typesAst, backcompatOptions);

  const extensionsAst = extractExtensionDefinitions(document);
  if (extensionsAst.definitions.length > 0) {
    schema = extendSchema(schema, extensionsAst, backcompatOptions);
  }

  return schema;
}

export default buildSchemaFromTypeDefinitions;
