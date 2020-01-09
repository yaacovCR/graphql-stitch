# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [8.2.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v8.2.0...v8.2.1) (2020-01-09)


### Bug Fixes

* **stitching:** custom scalars/enums ([fd1bd8f](https://github.com/yaacovCR/graphql-tools-fork/commit/fd1bd8fb55a357258e04d026bad661d39b316752))

## [8.2.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v8.1.1...v8.2.0) (2020-01-06)


### Features

* **transforms:** add HoistField transform ([becf901](https://github.com/yaacovCR/graphql-tools-fork/commit/becf901561265aa77247c32cfe359679887800a2))

### [8.1.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v8.1.0...v8.1.1) (2020-01-05)


### Bug Fixes

* **TransformObjectFields/MapFields:** allow more transformations ([daef1e3](https://github.com/yaacovCR/graphql-tools-fork/commit/daef1e305bf82128cddf7138ced8b7e0c962a5d3))
* **wrapping:** wrapped field names must be unique. ([98601f7](https://github.com/yaacovCR/graphql-tools-fork/commit/98601f7dbfe8320bef2d156f222c7778a62b0a4e))

## [8.1.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v8.0.2...v8.1.0) (2019-12-31)


### Features

* **stitching:** enable proxying uploads ([83f8dd9](https://github.com/yaacovCR/graphql-tools-fork/commit/83f8dd9ed9376392baadcbf4799923c74b93e6ed))

### [8.0.2](https://github.com/yaacovCR/graphql-tools-fork/compare/v8.0.0...v8.0.2) (2019-12-26)


### Bug Fixes

* **filterToSchema:** remove map in favor of plain object ([3a4d5f9](https://github.com/yaacovCR/graphql-tools-fork/commit/3a4d5f99eda2cfdfedd4fb75e090df0e8f169b9b))

### [8.0.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v8.0.0...v8.0.1) (2019-12-25)


### Bug Fixes

* **stitching:** filter unused variables from map ([3f0c1b3](https://github.com/yaacovCR/graphql-tools-fork/commit/3f0c1b364d1b8d1f97ec5b22502ba5f9f554640c))

## [8.0.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.2.3...v8.0.0) (2019-12-19)


### ⚠ BREAKING CHANGES

* **stitching:** Previous version of createMergedResolver did not work with multiple layers of field wrapping.
extractFields was not working, deprecated in favor of hoistFieldNodes.
createMergedResolver now relies on two helper functions, dehoistResult, complement to hoistFieldNoes, and unwrapResult, complement to wrapFieldNodes.

### Features

* **WrapFields:** add new transform ([04dc7f1](https://github.com/yaacovCR/graphql-tools-fork/commit/04dc7f1fa9b8bf95a460bf8dade5daf79c50778b))


### Bug Fixes

* **stitching:** wrapping and hoisting field transforms ([9ebad82](https://github.com/yaacovCR/graphql-tools-fork/commit/9ebad8245e801957e7025e65dc694b1a708208b4))

### [7.2.3](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.2.2...v7.2.3) (2019-12-10)


### Bug Fixes

* **handleList:** missing context ([d7dc47a](https://github.com/yaacovCR/graphql-tools-fork/commit/d7dc47a))

### [7.2.2](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.2.1...v7.2.2) (2019-12-09)


### Bug Fixes

* **WrapType:** fix root type edge case ([c851df0](https://github.com/yaacovCR/graphql-tools-fork/commit/c851df0))

### [7.2.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.2.0...v7.2.1) (2019-12-09)


### Bug Fixes

* **stitching:** improve error proxying for lists ([045b515](https://github.com/yaacovCR/graphql-tools-fork/commit/045b515))

## [7.2.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.1.4...v7.2.0) (2019-11-27)


### Bug Fixes

* **stitching:** add test ([372dcdd](https://github.com/yaacovCR/graphql-tools-fork/commit/372dcdd))
* **transforms:** cloneSchema prior to transformSchema ([b2bda0e](https://github.com/yaacovCR/graphql-tools-fork/commit/b2bda0e))


### Features

* **mergeTypes:** adds abiliity to merge types ([563cdce](https://github.com/yaacovCR/graphql-tools-fork/commit/563cdce))
* **mergeTypes:** initial version ([8e9dd52](https://github.com/yaacovCR/graphql-tools-fork/commit/8e9dd52))
* **stitching:** precompile fragment replacements ([53e3662](https://github.com/yaacovCR/graphql-tools-fork/commit/53e3662))

### [7.1.4](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.1.3...v7.1.4) (2019-11-07)


### Bug Fixes

* **stitching:** don't annotate primitives ([13934ac](https://github.com/yaacovCR/graphql-tools-fork/commit/13934ac))

### [7.1.3](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.1.2...v7.1.3) (2019-11-07)


### Bug Fixes

* **stitching:** latest fix breaks zeros ([1ce8015](https://github.com/yaacovCR/graphql-tools-fork/commit/1ce8015))

### [7.1.2](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.1.1...v7.1.2) (2019-11-07)


### Bug Fixes

* **stitching:** change merged result format ([c57c15d](https://github.com/yaacovCR/graphql-tools-fork/commit/c57c15d)), closes [#26](https://github.com/yaacovCR/graphql-tools-fork/issues/26)

### [7.1.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.1.0...v7.1.1) (2019-11-06)


### Bug Fixes

* **stitching:** pass along more errors ([e12b962](https://github.com/yaacovCR/graphql-tools-fork/commit/e12b962)), closes [#26](https://github.com/yaacovCR/graphql-tools-fork/issues/26)

## [7.1.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.0.3...v7.1.0) (2019-11-04)


### Features

* **mergeSchemas:** allow transform specification ([5efafbe](https://github.com/yaacovCR/graphql-tools-fork/commit/5efafbe))

### [7.0.3](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.0.2...v7.0.3) (2019-10-20)


### Bug Fixes

* **deps:** correct graphql peer dependency. ([bd2bc0f](https://github.com/yaacovCR/graphql-tools-fork/commit/bd2bc0f))

### [7.0.2](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.0.1...v7.0.2) (2019-10-13)


### Bug Fixes

* **RenameTypes:** add required arg ([75b54c0](https://github.com/yaacovCR/graphql-tools-fork/commit/75b54c0))

### [7.0.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v7.0.0...v7.0.1) (2019-10-13)


### Bug Fixes

* **docs:**  expands transforms docs ([bcd55f6](https://github.com/yaacovCR/graphql-tools-fork/commit/bcd55f6))
* **docs:** use delegateToSchema ([ec00d65](https://github.com/yaacovCR/graphql-tools-fork/commit/ec00d65))

## [7.0.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.6.0...v7.0.0) (2019-10-13)


### ⚠ BREAKING CHANGES

* **transforms:** Result transforms should be reversed, so that multiple request and result transforms can be properly executed.

Request and result transforms must be inverted when transforming a schema, as these transforms work to move from the final schema back to the original schema.

These CHANGES have the potential to be BREAKING.

### Bug Fixes

* **transforms:** to properly allow chaining. ([b749aeb](https://github.com/yaacovCR/graphql-tools-fork/commit/b749aeb))
* **types:** enforce VisitSchemaKind enum ([2e60509](https://github.com/yaacovCR/graphql-tools-fork/commit/2e60509))


### Features

* **RenameTypes:** remove extra result traversal ([fac833d](https://github.com/yaacovCR/graphql-tools-fork/commit/fac833d))

## [6.6.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.5.1...v6.6.0) (2019-10-03)


### Features

* **WrapType:** add WrapType transform ([43f13fc](https://github.com/yaacovCR/graphql-tools-fork/commit/43f13fc))

### [6.5.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.5.0...v6.5.1) (2019-10-03)


### Bug Fixes

* **transforms:** should work with remote schema execution config. ([2661bbd](https://github.com/yaacovCR/graphql-tools-fork/commit/2661bbd))

## [6.5.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.4.5...v6.5.0) (2019-09-26)


### Features

* **utils:** getResolversFromSchema ([630e9a8](https://github.com/yaacovCR/graphql-tools-fork/commit/630e9a8))

### [6.4.5](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.4.4...v6.4.5) (2019-09-25)


### Bug Fixes

* **delegateToSchema:** fix typo breaking refactoring ([cc44841](https://github.com/yaacovCR/graphql-tools-fork/commit/cc44841))

### [6.4.4](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.4.3...v6.4.4) (2019-09-24)


### Bug Fixes

* **remote schemas:** must add __typename to remote query to properly resolve interfaces. ([6e5a707](https://github.com/yaacovCR/graphql-tools-fork/commit/6e5a707))



# Notable list of changes within the fork from the original graphql-tools through v6.4.3

See further below for changes between individual fork versions and above for changes since v6.4.3.

## [6.4.3](https://github.com/yaacovCR/graphql-tools-fork/compare/v4.0.5...v6.4.3) (2019-09-24)

### ⚠ BREAKING CHANGES

* **stitching:** This change allows enums and custom scalars to be used as arguments within merged schemas. It also fixes seralization and deserialization more generally within merged schemas. If an implementation is available for a custom scalar within a merged schema (i.e., the schema is local), the internal representation will be available for use with stitching. Previously, the merged schema internally used the serialized version.

### Bug Fixes

* **generate:** addResolversToSchema should update enums and scalars of original schema. ([f2a7483](https://github.com/yaacovCR/graphql-tools-fork/commit/f2a7483)), closes [#19](https://github.com/yaacovCR/graphql-tools-fork/issues/19)
* **mocking:** to work with schema stitching ([ea72c6e](https://github.com/yaacovCR/graphql-tools-fork/commit/ea72c6e))
* **stitching:** add default value support ([4624f5c](https://github.com/yaacovCR/graphql-tools-fork/commit/4624f5c)), closes [#1121](https://github.com/yaacovCR/graphql-tools-fork/issues/1121)
* **stitching:** Directive disappears when enum has resolvers ([85b16cc](https://github.com/yaacovCR/graphql-tools-fork/commit/85b16cc))
* **stitching:** fix default resolver to execute field if specified as function. ([5fdc97d](https://github.com/yaacovCR/graphql-tools-fork/commit/5fdc97d))
* **stitching:** fix lists of enum and custom scalars, closes [#9](https://github.com/yaacovCR/graphql-tools-fork/issues/9) ([2e0241e](https://github.com/yaacovCR/graphql-tools-fork/commit/2e0241e))
* **stitching:** include specified directives even when merging of directives is disabled ([0a25e9b](https://github.com/yaacovCR/graphql-tools-fork/commit/0a25e9b))
* **stitching:** input fields without default value ([db3163b](https://github.com/yaacovCR/graphql-tools-fork/commit/db3163b)), closes [#15](https://github.com/yaacovCR/graphql-tools-fork/issues/15)
* **stitching:** nested enums ([2211068](https://github.com/yaacovCR/graphql-tools-fork/commit/2211068))
* **stitching:** observabeToAsyncIterator should preserve graphql errors ([86bf0e3](https://github.com/yaacovCR/graphql-tools-fork/commit/86bf0e3))
* **stitching:** serialize/deserialize enum/custom scalar values ([d3e0888](https://github.com/yaacovCR/graphql-tools-fork/commit/d3e0888))
* **stitching:** support stitching unions of types with enums ([faae86a](https://github.com/yaacovCR/graphql-tools-fork/commit/faae86a)), closes [#13](https://github.com/yaacovCR/graphql-tools-fork/issues/13)
* **transforms:** support custom scalar input variables on root fields when transforming. ([a8f2785](https://github.com/yaacovCR/graphql-tools-fork/commit/a8f2785)), closes [#18](https://github.com/yaacovCR/graphql-tools-fork/issues/18)
* **transforms:** VisitSchemaKind.TYPE should have greatest priority ([a8c544a](https://github.com/yaacovCR/graphql-tools-fork/commit/a8c544a))
* **types:** export OnTypeConflict type ([557a3a1](https://github.com/yaacovCR/graphql-tools-fork/commit/557a3a1))
* **typo:** typo in import example (: instead of ;) ([#1122](https://github.com/yaacovCR/graphql-tools-fork/issues/1122)) ([747d0ca](https://github.com/yaacovCR/graphql-tools-fork/commit/747d0ca))
* **visitSchema:** new interfaces should not break schema. ([e1393b8](https://github.com/yaacovCR/graphql-tools-fork/commit/e1393b8))
* **visitSchema:** visitSchema must reinitialize private variables when updating interfaces. ([925af85](https://github.com/yaacovCR/graphql-tools-fork/commit/925af85))


### Features

* **cloning:** export methods to shallow clone types and directives and deep clone schemas ([470b9c7](https://github.com/yaacovCR/graphql-tools-fork/commit/470b9c7))
* **errors:** Pass through all possible errors. ([4de91b8](https://github.com/yaacovCR/graphql-tools-fork/commit/4de91b8)), closes [#743](https://github.com/yaacovCR/graphql-tools-fork/issues/743) [#1037](https://github.com/yaacovCR/graphql-tools-fork/issues/1037) [#1046](https://github.com/yaacovCR/graphql-tools-fork/issues/1046) [apollographql/apollo-server#1582](https://github.com/apollographql/apollo-server/issues/1582)
* **stitching:** allow delegateToSchema, mergeSchemas and transformSchema to take remote schema configurations as parameters ([48cdd59](https://github.com/yaacovCR/graphql-tools-fork/commit/48cdd59))
* **stitching:** restore onTypeConflict option to mergeSchemas ([afdd01e](https://github.com/yaacovCR/graphql-tools-fork/commit/afdd01e))
* **transformers:** TransformQuery transformer adds errorPathTransformer property to properly return errors from transformed queries. ([69b963f](https://github.com/yaacovCR/graphql-tools-fork/commit/69b963f))
* **transforms:** add dedicated filterSchema function to allow schema filtering without a layer of delegation ([98dafae](https://github.com/yaacovCR/graphql-tools-fork/commit/98dafae))
* **visitSchema:** export consolidated visitSchema method ([23de82b](https://github.com/yaacovCR/graphql-tools-fork/commit/23de82b))



### [6.4.3](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.4.2...v6.4.3) (2019-09-19)


### Bug Fixes

* **release:** v6.4.0-6.4.2 broken ([4733446](https://github.com/yaacovCR/graphql-tools-fork/commit/4733446))
* **stitching:** observabeToAsyncIterator should preserve graphql errors ([e3ce475](https://github.com/yaacovCR/graphql-tools-fork/commit/e3ce475))

### [6.4.2](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.4.1...v6.4.2) (2019-09-17)


### Bug Fixes

* **filterSchema:** should not modify original schema. ([9583011](https://github.com/yaacovCR/graphql-tools-fork/commit/9583011))
* **visitSchema:** visitSchema must reinitialize private variables when updating interfaces. ([c3bbeaf](https://github.com/yaacovCR/graphql-tools-fork/commit/c3bbeaf))

### [6.4.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.4.0...v6.4.1) (2019-09-15)


### Bug Fixes

* **cloneSchema:** cloneSchema should preserve extensions ([9b97797](https://github.com/yaacovCR/graphql-tools-fork/commit/9b97797))

## [6.4.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.3.7...v6.4.0) (2019-09-15)


### Bug Fixes

* **cloneSchema:** healSchema requires a new array for object interfaces and union types. toConfig provides a new map for fields, but not new arrays. ([1ff8bd5](https://github.com/yaacovCR/graphql-tools-fork/commit/1ff8bd5))
* **transforms:** VisitSchemaKind.TYPE should have greatest priority ([cb61e68](https://github.com/yaacovCR/graphql-tools-fork/commit/cb61e68))
* **visitSchema:** new interfaces should not break schema. ([27c61f8](https://github.com/yaacovCR/graphql-tools-fork/commit/27c61f8))


### Features

* **cloning:** export methods to shallow clone types and directives and deep clone schemas ([1fc62ee](https://github.com/yaacovCR/graphql-tools-fork/commit/1fc62ee))
* **filterSchema:** provide type argument to type filter ([68d4c1d](https://github.com/yaacovCR/graphql-tools-fork/commit/68d4c1d))
* **visitSchema:** export consolidated visitSchema method ([02ff450](https://github.com/yaacovCR/graphql-tools-fork/commit/02ff450))

### [6.3.7](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.3.6...v6.3.7) (2019-09-03)


### Bug Fixes

* **healSchema:** revert 6.3.6 ([58b98ac](https://github.com/yaacovCR/graphql-tools-fork/commit/58b98ac))

### [6.3.6](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.3.5...v6.3.6) (2019-09-02)


### Bug Fixes

* **healSchema:** healing schema requires reparsing default field values as types are updated. ([906752e](https://github.com/yaacovCR/graphql-tools-fork/commit/906752e))

### [6.3.5](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.3.4...v6.3.5) (2019-09-01)


### Bug Fixes

* **generate:** addResolversToSchema should update enums and scalars of original schema. ([62cb094](https://github.com/yaacovCR/graphql-tools-fork/commit/62cb094)), closes [#19](https://github.com/yaacovCR/graphql-tools-fork/issues/19)

### [6.3.4](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.3.3...v6.3.4) (2019-08-26)


### Bug Fixes

* **transforms:** support custom scalar input variables on root fields when transforming. ([9044976](https://github.com/yaacovCR/graphql-tools-fork/commit/9044976)), closes [#18](https://github.com/yaacovCR/graphql-tools-fork/issues/18)



### [6.3.3](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.3.2...v6.3.3) (2019-08-20)


### Bug Fixes

* **stitching:** input fields without default value ([786a855](https://github.com/yaacovCR/graphql-tools-fork/commit/786a855)), closes [#15](https://github.com/yaacovCR/graphql-tools-fork/issues/15)



### [6.3.2](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.3.1...v6.3.2) (2019-08-18)


### Bug Fixes

* **stitching:** map errors along schema transformation path when extracting fields ([c132142](https://github.com/yaacovCR/graphql-tools-fork/commit/c132142))



### [6.3.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.3.0...v6.3.1) (2019-08-16)


### Bug Fixes

* **stitching:** fixes error mapping with ExtendSchema transform. Also, refactors! ([81959e1](https://github.com/yaacovCR/graphql-tools-fork/commit/81959e1))



## [6.3.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.2.0...v6.3.0) (2019-08-13)


### Features

* **transforms:** map object fields to new structures ([d017bcd](https://github.com/yaacovCR/graphql-tools-fork/commit/d017bcd))



## [6.2.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.1.6...v6.2.0) (2019-07-31)


### Bug Fixes

* **types:** export OnTypeConflict type ([fcc608b](https://github.com/yaacovCR/graphql-tools-fork/commit/fcc608b))


### Features

* **stitching:** allow delegateToSchema, mergeSchemas and transformSchema to take remote schema configurations as parameters ([12d2f5a](https://github.com/yaacovCR/graphql-tools-fork/commit/12d2f5a))
* **transformers:** TransformQuery transformer adds errorPathTransformer property to properly return errors from transformed queries. ([6159ad2](https://github.com/yaacovCR/graphql-tools-fork/commit/6159ad2))
* **transforms:** add dedicated filterSchema function to allow schema filtering without a layer of delegation ([8a50f38](https://github.com/yaacovCR/graphql-tools-fork/commit/8a50f38))



### [6.1.6](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.1.5...v6.1.6) (2019-07-19)


### Bug Fixes

* **stitching:** support stitching unions of types with enums ([119ebc5](https://github.com/yaacovCR/graphql-tools-fork/commit/119ebc5)), closes [#13](https://github.com/yaacovCR/graphql-tools-fork/issues/13)



### [6.1.5](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.1.4...v6.1.5) (2019-07-09)


### Bug Fixes

* **mocking:** to work with schema stitching ([58363ea](https://github.com/yaacovCR/graphql-tools-fork/commit/58363ea))



### [6.1.4](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.1.3...v6.1.4) (2019-07-05)


### Bug Fixes

* **stitching:** do not convert falsy values to null. ([26c5d67](https://github.com/yaacovCR/graphql-tools-fork/commit/26c5d67)), closes [#10](https://github.com/yaacovCR/graphql-tools-fork/issues/10)



### [6.1.3](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.1.2...v6.1.3) (2019-07-03)


### Bug Fixes

* **stitching:** fix lists of enum and custom scalars, closes [#8](https://github.com/yaacovCR/graphql-tools-fork/issues/8) ([0d173b9](https://github.com/yaacovCR/graphql-tools-fork/commit/0d173b9))



### [6.1.2](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.1.1...v6.1.2) (2019-07-01)


### Bug Fixes

* **stitching:** fix default resolver to execute field if specified as function. ([fa3f7e7](https://github.com/yaacovCR/graphql-tools-fork/commit/fa3f7e7))



### [6.1.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.1.0...v6.1.1) (2019-06-30)


### Bug Fixes

* **stitching:** fix reparsing of lists ([d766fe4](https://github.com/yaacovCR/graphql-tools-fork/commit/d766fe4))
* **stitching:** include specified directives even when merging of directives is disabled ([44ca2c2](https://github.com/yaacovCR/graphql-tools-fork/commit/44ca2c2))



## [6.1.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.0.1...v6.1.0) (2019-06-28)


### Bug Fixes

* **stitching:** Directive disappears when enum has resolvers ([ea0d359](https://github.com/yaacovCR/graphql-tools-fork/commit/ea0d359))
* **stitching:** fix legacy custom scalar recreation to more closely match pre-v6.0.1 functionality. ([1541a9f](https://github.com/yaacovCR/graphql-tools-fork/commit/1541a9f))


### Features

* **deps:** upgrade dependencies to latest minor version. ([850f513](https://github.com/yaacovCR/graphql-tools-fork/commit/850f513))
* **generate:** Allow user-provided buildSchema options ([#1154](https://github.com/yaacovCR/graphql-tools-fork/issues/1154)) ([829255e](https://github.com/yaacovCR/graphql-tools-fork/commit/829255e))



## [6.0.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v6.0.0...v6.0.1) (2019-06-27)


### Bug Fixes

* **stitching:** add default value support ([cf8750d](https://github.com/yaacovCR/graphql-tools-fork/commit/cf8750d)), closes [#1121](https://github.com/yaacovCR/graphql-tools-fork/issues/1121)



## [6.0.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v5.2.0...v6.0.0) (2019-06-18)


### Bug Fixes

* **stitching:** serialize/deserialize enum/custom scalar values ([2ec9ac2](https://github.com/yaacovCR/graphql-tools-fork/commit/2ec9ac2))


### BREAKING CHANGES

* **stitching:** This change allows enums and custom scalars to be used as arguments
within merged schemas. It also fixes seralization and deserialization
more generally within merged schemas. If an implementation is available
for a custom scalar within a merged schema (i.e., the schema is local),
the internal representation will be available for use with stitching.
Previously, the merged schema internally used the serialized version.



## [5.2.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v5.1.1...v5.2.0) (2019-06-16)


### Bug Fixes

* **stitching:** nested enums ([0cd8b96](https://github.com/yaacovCR/graphql-tools-fork/commit/0cd8b96))


### Features

* **stitching:** restore onTypeConflict option to mergeSchemas ([d8d418a](https://github.com/yaacovCR/graphql-tools-fork/commit/d8d418a))



### [5.1.1](https://github.com/yaacovCR/graphql-tools-fork/compare/v5.1.0...v5.1.1) (2019-06-13)


### Bug Fixes

* **stitching:** fix regression ([6eed72e](https://github.com/yaacovCR/graphql-tools-fork/commit/6eed72e))



## [5.1.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v5.0.0...v5.1.0) (2019-06-12)


### Features

* **errors:** Pass through all possible errors.



## [5.0.0](https://github.com/yaacovCR/graphql-tools-fork/compare/v4.0.4...v5.0.0) (2019-06-02)

* First forked version, bumped major version despite lack of breaking changes.
* Fix `delegateToSchema` to allow delegation to subscriptions with different root field names, allows
  the use of the `RenameRootFields` transform with subscriptions,
  pull request [#1104](https://github.com/apollographql/graphql-tools/pull/1104), fixes
  [#997](https://github.com/apollographql/graphql-tools/issues/997).  <br/>
* Add transformers to rename, filter, and arbitrarily transform object fields. <br/>
  Fixes [#819](https://github.com/apollographql/graphql-tools/issues/819).

# Prior changes from graphl-tools:

### 4.0.5

* Fixes a bug where schemas with scalars could not be merged when passed to
  `mergeSchemas` as a string or `GraphQLSchema`.  <br/>
  [@hayes](https://github.com/hayes) in [#1062](https://github.com/apollographql/graphql-tools/pull/1062)
* Make `mergeSchemas` optionally merge directive definitions.  <br/>
  [@freiksenet](https://github.com/freiksenet) in [#1003](https://github.com/apollographql/graphql-tools/pull/1003)
* Allow user-provided `buildSchema` options.  <br/>
  [@trevor-scheer](https://github.com/trevor-scheer) in [#1154](https://github.com/apollographql/graphql-tools/pull/1154)

### 4.0.4

* Make `WrapQuery` work for non-root fields <br />
  [@mdlavin](https://github.com/mdlavin) in
  [#1007](https://github.com/apollographql/graphql-tools/pull/1008)
* Update resolvers.md to clarify array usage <br />
  [@alvin777](https://github.com/alvin777) in
  [#1005](https://github.com/apollographql/graphql-tools/pull/1005)
* Add missing property to `mergeSchemas` api reference. <br />
  [@PlayMa256](https://github.com/PlayMa256) in
  [#1014](https://github.com/apollographql/graphql-tools/pull/1014)
* Documentation updates for mockServer <br/>
  [@dougshamoo](https://github.com/dougshamoo) in [#1012](https://github.com/apollographql/graphql-tools/pull/1012)
* Fix default merged resolver behavior <br/>
  [@mfix22](https://github.com/mfix22) in [#983](https://github.com/apollographql/graphql-tools/pull/983)
* Use `TArgs` generic wherever `IFieldResolver` is used.  <br/>
  [@brikou](https://github.com/brikou) in [#955](https://github.com/apollographql/graphql-tools/pull/955)
* Include deprecations from string SDL in mergeSchemas.  <br/>
  [@evans](https://github.com/evans) in [#1041](https://github.com/apollographql/graphql-tools/pull/1041)

### 4.0.3

* Replaced broken link in docs homepage with Launchpad example <br />
  [@kriss1897](https://github.com/kriss1897) in
  [#965](https://github.com/apollographql/graphql-tools/pull/965)
* Fix invalid query in schema delegation example. <br />
  [@nico29](https://github.com/nico29) in
  [#980](https://github.com/apollographql/graphql-tools/pull/980)
* Update package.json `repository` field. <br />
  [@dlukeomalley](https://github.com/dlukeomalley) in
  [#979](https://github.com/apollographql/graphql-tools/pull/979)
* Add support for passing a parsed schema ast to `mergeSchemas` <br/>
  [@ganemone](https://github.com/ganemone) in
  [#977](https://github.com/apollographql/graphql-tools/pull/977)
* Changes to `extractExtensionDefinitions` to support `graphql-js` union and enum extensions. <br/>
  [@jansuchy](https://github.com/jansuchy) in [#951](https://github.com/apollographql/graphql-tools/pull/951)
* Add docs for `mockServer` (closes [#951](https://github.com/apollographql/graphql-tools/issues/94))<br/>
  [@mfix22](https://github.com/mfix22) in [PR #982](https://github.com/apollographql/graphql-tools/pull/982)
* Fix regression where custom scalars were incorrectly replaced while recreating schema with `visitSchema`. <br/>
  [@tgriesser](https://github.com/tgriesser) in [#985](https://github.com/apollographql/graphql-tools/pull/985)

### 4.0.2

* Fix regression in enum input mapping. <br/>
  [@tgriesser](https://github.com/tgriesser) in [#974](https://github.com/apollographql/graphql-tools/pull/974)

### 4.0.1

* Fix [regression](https://github.com/apollographql/graphql-tools/issues/962) in enum internal value mapping. <br/>
  [@tgriesser](https://github.com/tgriesser) in [#973](https://github.com/apollographql/graphql-tools/pull/973)

### 4.0.0

* Support `graphql` and `@types/graphql` 14.x. <br />
  **NOTE:** `graphql` 14 includes [breaking changes](https://github.com/graphql/graphql-js/releases/tag/v14.0.0). We're bumping the major version of `graphql-tools` to accommodate those breaking changes. If you're planning on using `graphql` 14 with `graphql-tools` 4.0.0, please make sure you've reviewed the `graphql` breaking changes list.
  [@hwillson](https://github.com/hwillson) in [#953](https://github.com/apollographql/graphql-tools/pull/953)
* Fix template strings usage in guessSchemaByRootField error message. <br/>
  [@nagelflorian](https://github.com/nagelflorian) in [#936](https://github.com/apollographql/graphql-tools/pull/936)
* Update `IFieldResolver` to allow typed input args. <br/>
  [@luk3thomas](https://github.com/luk3thomas) in [#932](https://github.com/apollographql/graphql-tools/pull/932)
* Changes to `extractExtensionDefinitions` to properly support `graphql-js` input extensions. <br/>
  [@jure](https://github.com/jure) in [#948](https://github.com/apollographql/graphql-tools/pull/948)
* Stop automatically shallow cloning (via object spread syntax) transformed subscription results. Transformed subscription results are not always objects, which means object spreading can lead to invalid results. <br/>
  [@ericlewis](https://github.com/ericlewis) in [#928](https://github.com/apollographql/graphql-tools/pull/928)
* Re-use errors with an `extensions` property to make compatible with Apollo Server and it's built-in errors. <br/>
  [@edorsey](https://github.com/edorsey) in [#925](https://github.com/apollographql/graphql-tools/pull/925)
* Documentation updates. <br/>
  [@Amorites](https://github.com/Amorites) in [#944](https://github.com/apollographql/graphql-tools/pull/944) <br/>
  [@trevor-scheer](https://github.com/trevor-scheer) in [#946](https://github.com/apollographql/graphql-tools/pull/946) <br/>
  [@dnalborczyk](https://github.com/dnalborczyk) in [#934](https://github.com/apollographql/graphql-tools/pull/934) <br/>
  [@zcei](https://github.com/zcei) in [#933](https://github.com/apollographql/graphql-tools/pull/933)

### v3.1.1

* Revert the added `casual` dependency for mocking, since it was causing issues for people using `graphql-tools` in the browser.

### v3.1.0

* Loosens the apollo-link dependency [PR #765](https://github.com/apollographql/graphql-tools/pull/765)
* Use `getDescription` from `graphql-js` package [PR #672](https://github.com/apollographql/graphql-tools/pull/672)
* Update `IResolvers` to use source & context generics and to support all resolver use cases. [#896](https://github.com/apollographql/graphql-tools/pull/896)
* `WrapQuery`'s `wrapper` param can now return a SelectionSet. [PR #902](https://github.com/apollographql/graphql-tools/pull/902) [Issue #901](https://github.com/apollographql/graphql-tools/issues/901)
* Add null to return type of directive visitors in the TypeScript definition.
* Make sure mergeSchemas keeps Enum descriptions and deprecation status. [PR 898](https://github.com/apollographql/graphql-tools/pull/898/)
* Add `inheritResolversFromInterfaces` option to `mergeSchemas` [PR #812](https://github.com/apollographql/graphql-tools/pull/812)
* Added filtering of empty selection sets in FilterToSchema [#827](https://github.com/apollographql/graphql-tools/pull/827)
* Add support for overlapping fragments in ReplaceFieldWithFragment. [#894](https://github.com/apollographql/graphql-tools/issues/894)
* `delegateToSchema` now behaves like `info.mergeInfo.delegateToSchema` for fragment handling [Issue #876](https://github.com/apollographql/graphql-tools/issues/876) [PR #885](https://github.com/apollographql/graphql-tools/pull/885)
* Make schema transforms work with subscriptions, make it so that subscription errors don't disappear when using mergeSchemas [#793](https://github.com/apollographql/graphql-tools/issues/793) [#780](https://github.com/apollographql/graphql-tools/issues/780)

### v3.0.5

* Update apollo-link to 1.2.2 [#785](https://github.com/apollographql/graphql-tools/pull/785)

### v3.0.4

* Make sure `dist/generate` isn't excluded when published.

### v3.0.3

* Pass on operation name when stitching schemas.
  [Issue #522](https://github.com/apollographql/graphql-tools/issues/522)
  [PR #849](https://github.com/apollographql/graphql-tools/pull/849)
* Fixed errors that occurred when a fragment field argument used a variable
  defined in the parent query.
  [Issue #753](https://github.com/apollographql/graphql-tools/issues/753)
  [PR #806](https://github.com/apollographql/graphql-tools/pull/806)

### v3.0.2

* Fixed duplicate fragments getting added during transform in `FilterToSchema` [#778](https://github.com/apollographql/graphql-tools/pull/778)
* Fixed a visitType error printing the name of the variable typeName rather than its value due to a template string being incorrectly formatted. [#783](https://github.com/apollographql/graphql-tools/pull/783)

### v3.0.1

* Fixed an array cloning bug in the `RenameTypes` transform
  [#756](https://github.com/apollographql/graphql-tools/pull/756)

* Fixed a fragments bug in the `ReplaceFieldWithFragment` transform
  [#763](https://github.com/apollographql/graphql-tools/pull/763)

### v3.0.0

* Schema transforms and delegation

  * Substantial rewrite of internals of `mergeSchemas` and `delegateToSchema`
  * A new API for schema transforms has been introduced: [Docs](https://www.apollographql.com/docs/graphql-tools/schema-transforms.html)
  * `delegateToSchema` is now a public API: [Docs](https://www.apollographql.com/docs/graphql-tools/schema-delegation.html)
  * `delegateToSchema` now accepts an object of named parameters; positional arguments are deprecated
  * `delegateToSchema` no longer accepts `fragmentReplacements`; instead use `transforms`
  * `info.mergeInfo.delegateToSchema` is now the preferred delegation API, rather than `info.mergeInfo.delegate`

* Other changes
  * Add `commentDescription` to `printSchema` call to match other uses [PR #745](https://github.com/apollographql/graphql-tools/pull/745)
  * Add `createResolver` option to `makeRemoteExecutableSchema` [PR #734](https://github.com/apollographql/graphql-tools/pull/734)

### v2.24.0

* Allow `extend interface` definitions in merged schemas [PR #703](https://github.com/apollographql/graphql-tools/pull/703)
* Fix typo in `@deprecated` example in `schema-directives.md` [PR #706](https://github.com/apollographql/graphql-tools/pull/706)
* Fix timezone bug in test for `@date` directive [PR #686](https://github.com/apollographql/graphql-tools/pull/686)
* Expose `defaultMergedResolver` for schema stitching [PR #685](https://github.com/apollographql/graphql-tools/pull/685)
* Add `requireResolversForResolveType` to resolver validation options [PR #698](https://github.com/apollographql/graphql-tools/pull/698)
* Add `inheritResolversFromInterfaces` option to `makeExecutableSchema` and `addResolveFunctionsToSchema` [PR #720](https://github.com/apollographql/graphql-tools/pull/720)

### v2.23.0

* The `SchemaDirectiveVisitor` abstraction for implementing reusable schema `@directive`s has landed. Read our [blog post](https://dev-blog.apollodata.com/reusable-graphql-schema-directives-131fb3a177d1) about this new functionality, and/or check out the [documentation](https://www.apollographql.com/docs/graphql-tools/schema-directives.html) for even more examples. [PR #640](https://github.com/apollographql/graphql-tools/pull/640)

### v2.22.0

* When concatenating errors maintain a reference to the original for use downstream [Issue #480](https://github.com/apollographql/graphql-tools/issues/480) [PR #637](https://github.com/apollographql/graphql-tools/pull/637)
* Improve generic typings for several resolver-related interfaces [PR #662](https://github.com/apollographql/graphql-tools/pull/662)
* Remove copied apollo-link code [PR #670](https://github.com/apollographql/graphql-tools/pull/670)
* Handle undefined path in `getErrorsFromParent` [PR #667](https://github.com/apollographql/graphql-tools/pull/667)

### v2.21.0

* Make iterall a runtime dependency [PR #627](https://github.com/apollographql/graphql-tools/pull/627)
* Added support for lexical parser options [PR #567](https://github.com/apollographql/graphql-tools/pull/567)
* Support `graphql@^0.13.0` [PR #567](https://github.com/apollographql/graphql-tools/pull/567)
* Don't use `Symbol` in incompatible envs [Issue #535](https://github.com/apollographql/graphql-tools/issues/535) [PR #631](https://github.com/apollographql/graphql-tools/pull/631)

### v2.20.2

* Pass through apollo-link-http errors to originalError [PR #621](https://github.com/apollographql/graphql-tools/pull/621)

### v2.20.1

* Fix `error.path` could be `undefined` for schema stitching [PR #617](https://github.com/apollographql/graphql-tools/pull/617)

### v2.20.0

* Recreate enums and scalars for more consistent behaviour of merged schemas [PR #613](https://github.com/apollographql/graphql-tools/pull/613)
* `makeExecutableSchema` and `mergeSchema` now accept an array of `IResolver` [PR #612](https://github.com/apollographql/graphql-tools/pull/612) [PR #576](https://github.com/apollographql/graphql-tools/pull/576) [PR #577](https://github.com/apollographql/graphql-tools/pull/577)
* Fix `delegateToSchema.ts` to remove duplicate new variable definitions when delegating to schemas [PR #607](https://github.com/apollographql/graphql-tools/pull/607)
* Fix duplicate subscriptions for schema stitching [PR #609](https://github.com/apollographql/graphql-tools/pull/609)

### v2.19.0

* Also recreate `astNode` property for fields, not only types, when recreating schemas. [PR #580](https://github.com/apollographql/graphql-tools/pull/580)
* Fix `delegateToSchema.js` to accept and move forward args with zero or false values [PR #586](https://github.com/apollographql/graphql-tools/pull/586)

### v2.18.0

* Fix a bug where inline fragments got filtered in merged schemas when a type implemented multiple interfaces [PR #546](https://github.com/apollographql/graphql-tools/pull/546)
* IEnumResolver value can be a `number` type [PR #568](https://github.com/apollographql/graphql-tools/pull/568)

### v2.17.0

* Include `astNode` property in schema recreation [PR #569](https://github.com/apollographql/graphql-tools/pull/569)

### v2.16.0

* Added GraphQL Subscriptions support for schema stitching and `makeRemoteExecutableSchema` [PR #563](https://github.com/apollographql/graphql-tools/pull/563)
* Make `apollo-link` a direct dependency [PR #561](https://github.com/apollographql/graphql-tools/pull/561)
* Update tests to use `graphql-js@0.12` docstring format [PR #559](https://github.com/apollographql/graphql-tools/pull/559)

### v2.15.0

* Validate query before delegation [PR #551](https://github.com/apollographql/graphql-tools/pull/551)

### v2.14.1

* Add guard against invalid schemas being constructed from AST [PR #547](https://github.com/apollographql/graphql-tools/pull/547)

### v2.14.0

Update to add support for `graphql@0.12`, and drop versions before `0.11` from the peer dependencies list. The `graphql` package has some breaking changes you might need to be aware of, but there aren't any breaking changes in `graphql-tools` itself, or common usage patterns, so we are shipping this as a minor version. We're also running tests on this package with _both_ `graphql@0.11` and `graphql@0.12` until we confirm most users have updated.

* Visit the [`graphql` releases page](https://github.com/graphql/graphql-js/releases) to keep track of for breaking changes to the underlying package.
* [PR #541](https://github.com/apollographql/graphql-tools/pull/541)

### v2.13.0

* (Experimental) Added support for custom directives on FIELD_DEFINITION that wrap resolvers with custom reusable logic. [Issue #212](https://github.com/apollographql/graphql-tools/issues/212) [PR #518](https://github.com/apollographql/graphql-tools/pull/518) and [PR #529](https://github.com/apollographql/graphql-tools/pull/529)

### v2.12.0

* Allow passing in a string `schema` to `makeRemoteExecutableSchema` [PR #521](https://github.com/apollographql/graphql-tools/pull/521)

### v2.11.0

* Merge schema now can accept resolvers in a plain object format, mergeInfo added to GraphQLResolveInfo object in merged schema resolvers [PR #511](https://github.com/apollographql/graphql-tools/pull/511)

### v2.10.0

* Added basic support for custom Enums [Issue #363](https://github.com/apollographql/graphql-tools/issues/363) [PR #507](https://github.com/apollographql/graphql-tools/pull/507) [Read the docs here](https://www.apollographql.com/docs/graphql-tools/scalars.html#enums)

### v2.9.0

* Added basic subscription support for local schemas [Issue #420](https://github.com/apollographql/graphql-tools/issues/420) [PR #463](https://github.com/apollographql/graphql-tools/pull/463)
* Fix input object default value not propagating to merged schema [Issue #497](https://github.com/apollographql/graphql-tools/issues/497) [PR #498](PR #463](https://github.com/apollographql/graphql-tools/pull/498)

### v2.8.0

* Add the option `resolverValidationOptions.allowResolversNotInSchema` to allow resolvers to be set even when they are not defined in the schemas [PR #444](https://github.com/apollographql/graphql-tools/pull/444)
* Fix schema stitching bug when aliases are used with union types and fragments [PR #482](https://github.com/apollographql/graphql-tools/pull/482)
* Remove `isTypeOf` guards from merged schemas [PR #484](https://github.com/apollographql/graphql-tools/pull/484)

### v2.7.2

* Incompatible fragments are now properly filtered [PR #470](https://github.com/apollographql/graphql-tools/pull/470)

### v2.7.1

* Made `resolvers` parameter optional for `mergeSchemas` [Issue #461](https://github.com/apollographql/graphql-tools/issues/461) [PR #462](https://github.com/apollographql/graphql-tools/pull/462)
* Make it possible to define interfaces in schema extensions [PR #464](https://github.com/apollographql/graphql-tools/pull/464)

### v2.7.0

* Upgraded versions of dependencies

### v2.6.1

* Fix one place where `apollo-link` was being used directly

### v2.6.0

* Removed direct dependency on Apollo Link, while keeping the API the same, to work around a Launchpad npm installation issue temporarily.
* Parse type, field, and argument descriptions in `typeFromAST`. This allows the
  descriptions to be part of the schema when using helpers like `mergeSchemas()`.

### v2.5.0

* Add ability to pass types in extension strings [Issue #427](https://github.com/apollographql/graphql-tools/issues/427) [PR #430](https://github.com/apollographql/graphql-tools/pull/430)

### v2.4.0

* Translate errors better in merged schema [Issue #419](https://github.com/apollographql/graphql-tools/issues/419) [PR #425](https://github.com/apollographql/graphql-tools/pull/425)

### v2.3.0

* Fix alias issues [Issue #415](https://github.com/apollographql/graphql-tools/issues/415) [PR #418](https://github.com/apollographql/graphql-tools/pull/418)
* Make `@types/graphql` a dev dependency and make it's version as flexible as `graphql` [PR #421](https://github.com/apollographql/graphql-tools/pull/421)

### v2.2.1

* Fix inability to add recursive queries [PR #413](https://github.com/apollographql/graphql-tools/pull/413)

### v2.2.0

* Change link API to pass GraphQL context as `graphqlContext` field of link
  context to avoid merging problems
* Fix alias problems in schema merging [PR #411](https://github.com/apollographql/graphql-tools/pull/411)

### v2.1.0

* Added support for passing an Apollo Link instead of a fetcher

### v2.0.0

* Add schema merging utilities [PR #382](https://github.com/apollographql/graphql-tools/pull/382)

### v1.2.3

* Update package.json to allow GraphQL.js 0.11 [Issue #394](https://github.com/apollographql/graphql-tools/issues/394) [PR #395](https://github.com/apollographql/graphql-tools/pull/395)

### v1.2.1

* Fix typings for resolver options: [Issue #372](https://github.com/apollographql/graphql-tools/issues/372) [PR #374](https://github.com/apollographql/graphql-tools/pull/374)

### v.1.2.0

* Use defaultFieldResolver from graphql-js package instead of own one [PR #373](https://github.com/apollographql/graphql-tools/pull/373)
* Remove `lodash` dependency [PR #356](https://github.com/apollographql/graphql-tools/pull/356)

### v.1.1.0

* Improve mocking of union and interface types [PR #332](https://github.com/apollographql/graphql-tools/pull/332)

### v1.0.0

* Add argument validation in `addMockFunctionsToSchema` for 'schema' property in parameter object [PR #321](https://github.com/apollographql/graphql-tools/pull/321)

### v0.11.0

* Remove dependency on `graphql-subscription` and use an interface for PubSub [PR #295](https://github.com/apollographql/graphql-tools/pull/295)
* Support schema AST as a type definition input [PR #300](https://github.com/apollographql/graphql-tools/pull/300)
* Update graphql typings to 0.9.0 [PR #298](https://github.com/apollographql/graphql-tools/pull/298)

### v0.10.1

* Update dependencies [PR #287](https://github.com/apollographql/graphql-tools/pull/287)

### v0.10.0

* Restrict version range of graphql-js peer dependency to ^0.8.0 || ^0.9.0 [PR #266](https://github.com/apollographql/graphql-tools/pull/266)

### v0.9.2

* Update graphql-js dependency to include 0.9.0 [PR #264](https://github.com/apollostack/graphql-tools/pull/264)
* Fix logErrors option so it logs errors if resolve function returns a promise [PR #262](https://github.com/apollostack/graphql-tools/pull/262)

### v0.9.1

* use function reference instead of string for concatenateTypeDefs. [PR #252](https://github.com/apollostack/graphql-tools/pull/252)

### v0.9.0

* Migrate from `typed-graphql` to `@types/graphql`. [PR #249](https://github.com/apollostack/graphql-tools/pull/249)

### v0.8.4

* `addSchemaLevelResolveFunction` resolves once per operation type and not once globally. [#220](https://github.com/apollostack/graphql-tools/pull/220)
* Replace node-uuid with uuid package [#227](https://github.com/apollostack/graphql-tools/pull/227)
* Fix issue that prevented usage of custom scalars as arguments [#224](https://github.com/apollostack/graphql-tools/pull/224)

### v0.8.3

* Remove peer dependency on `graphql-subscriptions`. [#210](https://github.com/apollostack/graphql-tools/pull/210)

### v0.8.2

* Accept an async function for the schema level resolver. ([@ephemer](https://github.com/ephemer) in [#199](https://github.com/apollostack/graphql-tools/pull/199))
* Fix for new custom scalar support introduced in `0.8.1`. ([@oricordeau](https://github.com/oricordeau) in [#203](https://github.com/apollostack/graphql-tools/pull/203))

### v0.8.1

* Support custom scalar types developed for GraphQL.js, such as [graphql-type-json](https://github.com/taion/graphql-type-json). ([@oricordeau](https://github.com/oricordeau) in [#189](https://github.com/apollostack/graphql-tools/pull/189))

### v0.8.0

* Update default resolve function to match the one from GraphQL.js ([@stubailo](https://github.com/stubailo) in [#183](https://github.com/apollostack/graphql-tools/pull/183))
* Move `typed-graphql` to `optionalDependencies` ([@stubailo](https://github.com/stubailo) in [#183](https://github.com/apollostack/graphql-tools/pull/183))
* Set new defaults for resolver validation to match GraphQL.js so that developers need to opt-in to advanced validation ([@stubailo](https://github.com/stubailo) in [#183](https://github.com/apollostack/graphql-tools/pull/183)):
  * `requireResolversForArgs = false` \* `requireResolversForNonScalar = false`

### v0.7.2

* Eliminated babel and moved to native ES5 compilation. ([@DxCx](https://github.com/DxCx) in [#147](https://github.com/apollostack/graphql-tools/pull/147))

### v0.7.1

* Fix dependency on lodash

### v0.7.0

* Various Bugfixes ([@DxCx](https://github.com/DxCx) in [#129](https://github.com/apollostack/graphql-tools/pull/129)) - Istanbul coverage was not working well due to Istanbul bug [#549](https://github.com/gotwarlost/istanbul/issues/549) - Bluebird promise was not converted well on tests - "console.warn" got overwritten on tests

* Migrated code from Javascript to Typescript ([@DxCx](https://github.com/DxCx) in [#129](https://github.com/apollostack/graphql-tools/pull/129))

* Deprecated addConnectorsToContext ([@DxCx](https://github.com/DxCx) in [#129](https://github.com/apollostack/graphql-tools/pull/129))

* Removed deprecated aplloServer ([@DxCx](https://github.com/DxCx) in [#129](https://github.com/apollostack/graphql-tools/pull/129))

* Removed testing on Node 5 ([@DxCx](https://github.com/DxCx) in [#129](https://github.com/apollostack/graphql-tools/pull/129))

* Changed GraphQL typings requirement from peer to standard ([@DxCx](https://github.com/DxCx) in [#129](https://github.com/apollostack/graphql-tools/pull/129))

* Change the missing resolve function validator to show a warning instead of an error ([@nicolaslopezj](https://github.com/nicolaslopezj) in [#134](https://github.com/apollostack/graphql-tools/pull/134))

* Add missing type annotations to avoid typescript compiler errors when 'noImplicitAny' is enabled ([@almilo](https://github.com/almilo) in [#133](https://github.com/apollostack/graphql-tools/pull/133))

### v0.6.6

* Added embedded Typescript definitions ([@DxCx](https://github.com/DxCx) in [#120](https://github.com/apollostack/graphql-tools/pull/120))

* Fix issue in addMockFunctionsToSchema when preserveResolvers is true and connector/logger is used. ([@DxCx](https://github.com/DxCx) in [#121](https://github.com/apollostack/graphql-tools/pull/121))

* Fix multiple issues in addMockFunctionsToSchema when preserveResolvers is true (support for Promises, and props defined using Object.defineProperty) ([@sebastienbarre](https://github.com/sebastienbarre) in [#115](https://github.com/apollostack/graphql-tools/pull/115))

* Make allowUndefinedInResolve true by default ([@jbaxleyiii](https://github.com/jbaxleyiii) in [#117](https://github.com/apollostack/graphql-tools/pull/117))

* Add `requireResolversForAllFields` resolver validation option ([@nevir](https://github.com/nevir) in [#107](https://github.com/apollostack/graphql-tools/pull/107))

### v0.6.4

* Make mocking partial objects match expected behavior ([@sebastienbarre](https://github.com/sebastienbarre) in [#96](https://github.com/apollostack/graphql-tools/pull/96))
* Improved behavior when mocking interfaces & unions ([@itajaja](https://github.com/itajaja) in [#102](https://github.com/apollostack/graphql-tools/pull/102))

### v0.6.3

* Unpin babel-core version to solve build problem (PR [#92](https://github.com/apollographql/graphql-tools/pull/92))
* Added support for `extend` keyword to schemaGenerator (PR [#90](https://github.com/apollostack/graphql-tools/pull/90))

### v0.6.2

* Fix a bug with addSchemaLevelResolveFunction. It now runs once per tick (PR [#91](https://github.com/apollographql/graphql-tools/pull/91))

### v0.5.2

* Add addSchemaLevelResolveFunction to exports
* Remove dist folder before prepublish to make sure files deleted in source are not included in build

### v0.5.1

* Updated GraphQL dependency to 0.6.0
* Removed all tracer code, including `Tracer`, `addTracingToResolvers` and `decorateWithTracer`
