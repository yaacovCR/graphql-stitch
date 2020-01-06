import {
  parse,
  buildASTSchema,
  GraphQLSchema,
  DocumentNode,
  ASTNode,
} from 'graphql';

import { ITypeDefinitions, GraphQLParseOptions } from '../Interfaces';

import concatenateTypeDefs from './concatenateTypeDefs';
import SchemaError from './SchemaError';

function buildSchemaFromTypeDefinitions(
  typeDefinitions: ITypeDefinitions,
  parseOptions?: GraphQLParseOptions,
): GraphQLSchema {
  // TODO: accept only array here, otherwise interfaces get confusing.
  let myDefinitions = typeDefinitions;
  let astDocument: DocumentNode;

  if (isDocumentNode(typeDefinitions)) {
    astDocument = typeDefinitions;
  } else if (typeof myDefinitions !== 'string') {
    if (!Array.isArray(myDefinitions)) {
      const type = typeof myDefinitions;
      throw new SchemaError(
        `typeDefs must be a string, array or schema AST, got ${type}`,
      );
    }
    myDefinitions = concatenateTypeDefs(myDefinitions);
  }

  if (typeof myDefinitions === 'string') {
    astDocument = parse(myDefinitions, parseOptions);
  }

  const backcompatOptions = { commentDescriptions: true };

  // TODO fix types https://github.com/apollographql/graphql-tools/issues/542
  const schema: GraphQLSchema = buildASTSchema(astDocument, backcompatOptions);

  return schema;
}

function isDocumentNode(
  typeDefinitions: ITypeDefinitions,
): typeDefinitions is DocumentNode {
  return (typeDefinitions as ASTNode).kind !== undefined;
}

export default buildSchemaFromTypeDefinitions;
