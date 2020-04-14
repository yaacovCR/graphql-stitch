import { print } from 'graphql';

import { ITypedef, isASTNode } from '../Interfaces';

import SchemaError from './SchemaError';

function concatenateTypeDefs(
  typeDefinitionsAry: Array<ITypedef>,
  calledFunctionRefs = [] as any,
): string {
  let resolvedTypeDefinitions: Array<string> = [];
  typeDefinitionsAry.forEach((typeDef: ITypedef) => {
    if (typeof typeDef === 'function') {
      if (calledFunctionRefs.indexOf(typeDef) === -1) {
        calledFunctionRefs.push(typeDef);
        resolvedTypeDefinitions = resolvedTypeDefinitions.concat(
          concatenateTypeDefs(typeDef(), calledFunctionRefs),
        );
      }
    } else if (typeof typeDef === 'string') {
      resolvedTypeDefinitions.push(typeDef.trim());
    } else if (isASTNode(typeDef)) {
      resolvedTypeDefinitions.push(print(typeDef).trim());
    } else {
      throw new SchemaError(
        `typeDef array must contain only strings, ASTs or functions, got ${typeof typeDef}`,
      );
    }
  });
  return uniq(resolvedTypeDefinitions.map((x) => x.trim())).join('\n');
}

function uniq(array: Array<any>): Array<any> {
  return array.reduce(
    (accumulator, currentValue) =>
      accumulator.indexOf(currentValue) === -1
        ? [...accumulator, currentValue]
        : accumulator,
    [],
  );
}

export default concatenateTypeDefs;
