import { GraphQLNamedType, GraphQLField, GraphQLSchema, FieldNode, SelectionNode } from 'graphql';
import { Transform } from './transforms';
import { createResolveType, fieldToFieldConfig } from '../stitching/schemaRecreation';
import { Request, IFieldResolver } from '../Interfaces';
import TransformObjectFields from './TransformObjectFields';

export default class TransformObjectField implements Transform {
  private transformer: TransformObjectFields;

  constructor({
    typeName,
    fieldName,
    resolverWrapper,
    fieldNodeTransformer,
  }: {
    typeName: string;
    fieldName: string;
    resolverWrapper?: (originalResolver: IFieldResolver<any, any>) => IFieldResolver<any, any>;
    fieldNodeTransformer?:
      (fieldNode: FieldNode) => SelectionNode | Array<SelectionNode>;
  }) {
    const resolveType = createResolveType((name: string, type: GraphQLNamedType): GraphQLNamedType => type);
    this.transformer = new TransformObjectFields(
      (t: string, f: string, field: GraphQLField<any, any>) => {
        const fieldConfig = fieldToFieldConfig(field, resolveType, true);
        if (typeName === t && fieldName === f && resolverWrapper) {
          const originalResolver = fieldConfig.resolve;
          fieldConfig.resolve = resolverWrapper(originalResolver);
        }
        return fieldConfig;
      },
      (t: string, f: string, fieldNode: FieldNode): SelectionNode | Array<SelectionNode> => {
        if (typeName === t && fieldName === f && fieldNodeTransformer) {
          return fieldNodeTransformer(fieldNode);
        }
        return fieldNode;
      }
    );
  }

  public transformSchema(originalSchema: GraphQLSchema): GraphQLSchema {
    return this.transformer.transformSchema(originalSchema);
  }

  public transformRequest(originalRequest: Request): Request {
    return this.transformer.transformRequest(originalRequest);
  }
}
