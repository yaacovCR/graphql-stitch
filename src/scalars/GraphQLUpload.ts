import { GraphQLScalarType, GraphQLError } from 'graphql';

/**
 * A scalar that supports file uploads with support for schema proxying.
 */
const GraphQLUpload = new GraphQLScalarType({
  name: 'Upload',
  description: 'The `Upload` scalar type represents a file upload.',
  parseValue: value => {
    if (value != null && value.promise instanceof Promise) {
      // graphql-upload v10
      return value.promise;
    } else if (value instanceof Promise) {
      // graphql-upload v9
      return value;
    }
    throw new GraphQLError('Upload value invalid.');
  },
  // serialization requires to support schema stitching
  serialize: value => value,
  parseLiteral: ast => {
    throw new GraphQLError('Upload literal unsupported.', ast);
  },
});

export { GraphQLUpload };
