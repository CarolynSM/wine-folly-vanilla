/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A BigInt value up to 64 bits in size, which can be a number or a string if used inline, or a string only if used as a variable. Always returned as a string. */
  BigInt: { input: any; output: any; }
};

export type BigIntAggregateSelection = {
  __typename?: 'BigIntAggregateSelection';
  average?: Maybe<Scalars['BigInt']['output']>;
  max?: Maybe<Scalars['BigInt']['output']>;
  min?: Maybe<Scalars['BigInt']['output']>;
  sum?: Maybe<Scalars['BigInt']['output']>;
};

export type Cheeses = {
  __typename?: 'Cheeses';
  id: Scalars['BigInt']['output'];
  includes: Array<Foods>;
  includesAggregate?: Maybe<CheesesFoodsIncludesAggregationSelection>;
  includesConnection: CheesesIncludesConnection;
  name: Scalars['String']['output'];
  stylesPairsWith: Array<Styles>;
  stylesPairsWithAggregate?: Maybe<CheesesStylesStylesPairsWithAggregationSelection>;
  stylesPairsWithConnection: CheesesStylesPairsWithConnection;
  types: Scalars['String']['output'];
};


export type CheesesIncludesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FoodsOptions>;
  where?: InputMaybe<FoodsWhere>;
};


export type CheesesIncludesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FoodsWhere>;
};


export type CheesesIncludesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CheesesIncludesConnectionSort>>;
  where?: InputMaybe<CheesesIncludesConnectionWhere>;
};


export type CheesesStylesPairsWithArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<StylesOptions>;
  where?: InputMaybe<StylesWhere>;
};


export type CheesesStylesPairsWithAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StylesWhere>;
};


export type CheesesStylesPairsWithConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CheesesStylesPairsWithConnectionSort>>;
  where?: InputMaybe<CheesesStylesPairsWithConnectionWhere>;
};

export type CheesesAggregateSelection = {
  __typename?: 'CheesesAggregateSelection';
  count: Scalars['Int']['output'];
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type CheesesConnectInput = {
  includes?: InputMaybe<Array<CheesesIncludesConnectFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<CheesesStylesPairsWithConnectFieldInput>>;
};

export type CheesesConnectWhere = {
  node: CheesesWhere;
};

export type CheesesConnection = {
  __typename?: 'CheesesConnection';
  edges: Array<CheesesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CheesesCreateInput = {
  id: Scalars['BigInt']['input'];
  includes?: InputMaybe<CheesesIncludesFieldInput>;
  name: Scalars['String']['input'];
  stylesPairsWith?: InputMaybe<CheesesStylesPairsWithFieldInput>;
  types: Scalars['String']['input'];
};

export type CheesesDeleteInput = {
  includes?: InputMaybe<Array<CheesesIncludesDeleteFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<CheesesStylesPairsWithDeleteFieldInput>>;
};

export type CheesesDisconnectInput = {
  includes?: InputMaybe<Array<CheesesIncludesDisconnectFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<CheesesStylesPairsWithDisconnectFieldInput>>;
};

export type CheesesEdge = {
  __typename?: 'CheesesEdge';
  cursor: Scalars['String']['output'];
  node: Cheeses;
};

export type CheesesFoodsIncludesAggregationSelection = {
  __typename?: 'CheesesFoodsIncludesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CheesesFoodsIncludesNodeAggregateSelection>;
};

export type CheesesFoodsIncludesNodeAggregateSelection = {
  __typename?: 'CheesesFoodsIncludesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type CheesesIncludesAggregateInput = {
  AND?: InputMaybe<Array<CheesesIncludesAggregateInput>>;
  NOT?: InputMaybe<CheesesIncludesAggregateInput>;
  OR?: InputMaybe<Array<CheesesIncludesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CheesesIncludesNodeAggregationWhereInput>;
};

export type CheesesIncludesConnectFieldInput = {
  connect?: InputMaybe<Array<FoodsConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FoodsConnectWhere>;
};

export type CheesesIncludesConnection = {
  __typename?: 'CheesesIncludesConnection';
  edges: Array<CheesesIncludesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CheesesIncludesConnectionSort = {
  node?: InputMaybe<FoodsSort>;
};

export type CheesesIncludesConnectionWhere = {
  AND?: InputMaybe<Array<CheesesIncludesConnectionWhere>>;
  NOT?: InputMaybe<CheesesIncludesConnectionWhere>;
  OR?: InputMaybe<Array<CheesesIncludesConnectionWhere>>;
  node?: InputMaybe<FoodsWhere>;
};

export type CheesesIncludesCreateFieldInput = {
  node: FoodsCreateInput;
};

export type CheesesIncludesDeleteFieldInput = {
  delete?: InputMaybe<FoodsDeleteInput>;
  where?: InputMaybe<CheesesIncludesConnectionWhere>;
};

export type CheesesIncludesDisconnectFieldInput = {
  disconnect?: InputMaybe<FoodsDisconnectInput>;
  where?: InputMaybe<CheesesIncludesConnectionWhere>;
};

export type CheesesIncludesFieldInput = {
  connect?: InputMaybe<Array<CheesesIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<CheesesIncludesCreateFieldInput>>;
};

export type CheesesIncludesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CheesesIncludesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CheesesIncludesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CheesesIncludesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CheesesIncludesRelationship = {
  __typename?: 'CheesesIncludesRelationship';
  cursor: Scalars['String']['output'];
  node: Foods;
};

export type CheesesIncludesUpdateConnectionInput = {
  node?: InputMaybe<FoodsUpdateInput>;
};

export type CheesesIncludesUpdateFieldInput = {
  connect?: InputMaybe<Array<CheesesIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<CheesesIncludesCreateFieldInput>>;
  delete?: InputMaybe<Array<CheesesIncludesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CheesesIncludesDisconnectFieldInput>>;
  update?: InputMaybe<CheesesIncludesUpdateConnectionInput>;
  where?: InputMaybe<CheesesIncludesConnectionWhere>;
};

export type CheesesOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CheesesSort objects to sort Cheeses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CheesesSort>>;
};

export type CheesesRelationInput = {
  includes?: InputMaybe<Array<CheesesIncludesCreateFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<CheesesStylesPairsWithCreateFieldInput>>;
};

/** Fields to sort Cheeses by. The order in which sorts are applied is not guaranteed when specifying many fields in one CheesesSort object. */
export type CheesesSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  types?: InputMaybe<SortDirection>;
};

export type CheesesStylesPairsWithAggregateInput = {
  AND?: InputMaybe<Array<CheesesStylesPairsWithAggregateInput>>;
  NOT?: InputMaybe<CheesesStylesPairsWithAggregateInput>;
  OR?: InputMaybe<Array<CheesesStylesPairsWithAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CheesesStylesPairsWithNodeAggregationWhereInput>;
};

export type CheesesStylesPairsWithConnectFieldInput = {
  connect?: InputMaybe<Array<StylesConnectInput>>;
  edge: PairsWithPropertiesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<StylesConnectWhere>;
};

export type CheesesStylesPairsWithConnection = {
  __typename?: 'CheesesStylesPairsWithConnection';
  edges: Array<CheesesStylesPairsWithRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CheesesStylesPairsWithConnectionSort = {
  edge?: InputMaybe<PairsWithPropertiesSort>;
  node?: InputMaybe<StylesSort>;
};

export type CheesesStylesPairsWithConnectionWhere = {
  AND?: InputMaybe<Array<CheesesStylesPairsWithConnectionWhere>>;
  NOT?: InputMaybe<CheesesStylesPairsWithConnectionWhere>;
  OR?: InputMaybe<Array<CheesesStylesPairsWithConnectionWhere>>;
  edge?: InputMaybe<PairsWithPropertiesWhere>;
  node?: InputMaybe<StylesWhere>;
};

export type CheesesStylesPairsWithCreateFieldInput = {
  edge: PairsWithPropertiesCreateInput;
  node: StylesCreateInput;
};

export type CheesesStylesPairsWithDeleteFieldInput = {
  delete?: InputMaybe<StylesDeleteInput>;
  where?: InputMaybe<CheesesStylesPairsWithConnectionWhere>;
};

export type CheesesStylesPairsWithDisconnectFieldInput = {
  disconnect?: InputMaybe<StylesDisconnectInput>;
  where?: InputMaybe<CheesesStylesPairsWithConnectionWhere>;
};

export type CheesesStylesPairsWithFieldInput = {
  connect?: InputMaybe<Array<CheesesStylesPairsWithConnectFieldInput>>;
  create?: InputMaybe<Array<CheesesStylesPairsWithCreateFieldInput>>;
};

export type CheesesStylesPairsWithNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CheesesStylesPairsWithNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CheesesStylesPairsWithNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CheesesStylesPairsWithNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  typeId_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type CheesesStylesPairsWithRelationship = {
  __typename?: 'CheesesStylesPairsWithRelationship';
  cursor: Scalars['String']['output'];
  node: Styles;
  properties: PairsWithProperties;
};

export type CheesesStylesPairsWithUpdateConnectionInput = {
  edge?: InputMaybe<PairsWithPropertiesUpdateInput>;
  node?: InputMaybe<StylesUpdateInput>;
};

export type CheesesStylesPairsWithUpdateFieldInput = {
  connect?: InputMaybe<Array<CheesesStylesPairsWithConnectFieldInput>>;
  create?: InputMaybe<Array<CheesesStylesPairsWithCreateFieldInput>>;
  delete?: InputMaybe<Array<CheesesStylesPairsWithDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CheesesStylesPairsWithDisconnectFieldInput>>;
  update?: InputMaybe<CheesesStylesPairsWithUpdateConnectionInput>;
  where?: InputMaybe<CheesesStylesPairsWithConnectionWhere>;
};

export type CheesesStylesStylesPairsWithAggregationSelection = {
  __typename?: 'CheesesStylesStylesPairsWithAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CheesesStylesStylesPairsWithNodeAggregateSelection>;
};

export type CheesesStylesStylesPairsWithNodeAggregateSelection = {
  __typename?: 'CheesesStylesStylesPairsWithNodeAggregateSelection';
  description: StringAggregateSelection;
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  typeId: BigIntAggregateSelection;
};

export type CheesesUpdateInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  id_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  includes?: InputMaybe<Array<CheesesIncludesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  stylesPairsWith?: InputMaybe<Array<CheesesStylesPairsWithUpdateFieldInput>>;
  types?: InputMaybe<Scalars['String']['input']>;
};

export type CheesesWhere = {
  AND?: InputMaybe<Array<CheesesWhere>>;
  NOT?: InputMaybe<CheesesWhere>;
  OR?: InputMaybe<Array<CheesesWhere>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  includesAggregate?: InputMaybe<CheesesIncludesAggregateInput>;
  /** Return Cheeses where all of the related CheesesIncludesConnections match this filter */
  includesConnection_ALL?: InputMaybe<CheesesIncludesConnectionWhere>;
  /** Return Cheeses where none of the related CheesesIncludesConnections match this filter */
  includesConnection_NONE?: InputMaybe<CheesesIncludesConnectionWhere>;
  /** Return Cheeses where one of the related CheesesIncludesConnections match this filter */
  includesConnection_SINGLE?: InputMaybe<CheesesIncludesConnectionWhere>;
  /** Return Cheeses where some of the related CheesesIncludesConnections match this filter */
  includesConnection_SOME?: InputMaybe<CheesesIncludesConnectionWhere>;
  /** Return Cheeses where all of the related Foods match this filter */
  includes_ALL?: InputMaybe<FoodsWhere>;
  /** Return Cheeses where none of the related Foods match this filter */
  includes_NONE?: InputMaybe<FoodsWhere>;
  /** Return Cheeses where one of the related Foods match this filter */
  includes_SINGLE?: InputMaybe<FoodsWhere>;
  /** Return Cheeses where some of the related Foods match this filter */
  includes_SOME?: InputMaybe<FoodsWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  stylesPairsWithAggregate?: InputMaybe<CheesesStylesPairsWithAggregateInput>;
  /** Return Cheeses where all of the related CheesesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_ALL?: InputMaybe<CheesesStylesPairsWithConnectionWhere>;
  /** Return Cheeses where none of the related CheesesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_NONE?: InputMaybe<CheesesStylesPairsWithConnectionWhere>;
  /** Return Cheeses where one of the related CheesesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_SINGLE?: InputMaybe<CheesesStylesPairsWithConnectionWhere>;
  /** Return Cheeses where some of the related CheesesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_SOME?: InputMaybe<CheesesStylesPairsWithConnectionWhere>;
  /** Return Cheeses where all of the related Styles match this filter */
  stylesPairsWith_ALL?: InputMaybe<StylesWhere>;
  /** Return Cheeses where none of the related Styles match this filter */
  stylesPairsWith_NONE?: InputMaybe<StylesWhere>;
  /** Return Cheeses where one of the related Styles match this filter */
  stylesPairsWith_SINGLE?: InputMaybe<StylesWhere>;
  /** Return Cheeses where some of the related Styles match this filter */
  stylesPairsWith_SOME?: InputMaybe<StylesWhere>;
  types?: InputMaybe<Scalars['String']['input']>;
  types_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  types_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  types_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  types_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCheesesMutationResponse = {
  __typename?: 'CreateCheesesMutationResponse';
  cheeses: Array<Cheeses>;
  info: CreateInfo;
};

export type CreateFlavorsMutationResponse = {
  __typename?: 'CreateFlavorsMutationResponse';
  flavors: Array<Flavors>;
  info: CreateInfo;
};

export type CreateFoodsMutationResponse = {
  __typename?: 'CreateFoodsMutationResponse';
  foods: Array<Foods>;
  info: CreateInfo;
};

export type CreateHerbsAndSpicesMutationResponse = {
  __typename?: 'CreateHerbsAndSpicesMutationResponse';
  herbsAndSpices: Array<Herbs_And_Spices>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateMeatsMutationResponse = {
  __typename?: 'CreateMeatsMutationResponse';
  info: CreateInfo;
  meats: Array<Meats>;
};

export type CreateStylesMutationResponse = {
  __typename?: 'CreateStylesMutationResponse';
  info: CreateInfo;
  styles: Array<Styles>;
};

export type CreateTypesMutationResponse = {
  __typename?: 'CreateTypesMutationResponse';
  info: CreateInfo;
  types: Array<Types>;
};

export type CreateVarietalsMutationResponse = {
  __typename?: 'CreateVarietalsMutationResponse';
  info: CreateInfo;
  varietals: Array<Varietals>;
};

export type CreateVegetablesMutationResponse = {
  __typename?: 'CreateVegetablesMutationResponse';
  info: CreateInfo;
  vegetables: Array<Vegetables>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Flavors = {
  __typename?: 'Flavors';
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  varietalsTastesLike: Array<Varietals>;
  varietalsTastesLikeAggregate?: Maybe<FlavorsVarietalsVarietalsTastesLikeAggregationSelection>;
  varietalsTastesLikeConnection: FlavorsVarietalsTastesLikeConnection;
};


export type FlavorsVarietalsTastesLikeArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VarietalsOptions>;
  where?: InputMaybe<VarietalsWhere>;
};


export type FlavorsVarietalsTastesLikeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VarietalsWhere>;
};


export type FlavorsVarietalsTastesLikeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FlavorsVarietalsTastesLikeConnectionSort>>;
  where?: InputMaybe<FlavorsVarietalsTastesLikeConnectionWhere>;
};

export type FlavorsAggregateSelection = {
  __typename?: 'FlavorsAggregateSelection';
  count: Scalars['Int']['output'];
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type FlavorsConnectInput = {
  varietalsTastesLike?: InputMaybe<Array<FlavorsVarietalsTastesLikeConnectFieldInput>>;
};

export type FlavorsConnectWhere = {
  node: FlavorsWhere;
};

export type FlavorsConnection = {
  __typename?: 'FlavorsConnection';
  edges: Array<FlavorsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FlavorsCreateInput = {
  id: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  varietalsTastesLike?: InputMaybe<FlavorsVarietalsTastesLikeFieldInput>;
};

export type FlavorsDeleteInput = {
  varietalsTastesLike?: InputMaybe<Array<FlavorsVarietalsTastesLikeDeleteFieldInput>>;
};

export type FlavorsDisconnectInput = {
  varietalsTastesLike?: InputMaybe<Array<FlavorsVarietalsTastesLikeDisconnectFieldInput>>;
};

export type FlavorsEdge = {
  __typename?: 'FlavorsEdge';
  cursor: Scalars['String']['output'];
  node: Flavors;
};

export type FlavorsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FlavorsSort objects to sort Flavors by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FlavorsSort>>;
};

export type FlavorsRelationInput = {
  varietalsTastesLike?: InputMaybe<Array<FlavorsVarietalsTastesLikeCreateFieldInput>>;
};

/** Fields to sort Flavors by. The order in which sorts are applied is not guaranteed when specifying many fields in one FlavorsSort object. */
export type FlavorsSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type FlavorsUpdateInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  id_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  varietalsTastesLike?: InputMaybe<Array<FlavorsVarietalsTastesLikeUpdateFieldInput>>;
};

export type FlavorsVarietalsTastesLikeAggregateInput = {
  AND?: InputMaybe<Array<FlavorsVarietalsTastesLikeAggregateInput>>;
  NOT?: InputMaybe<FlavorsVarietalsTastesLikeAggregateInput>;
  OR?: InputMaybe<Array<FlavorsVarietalsTastesLikeAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FlavorsVarietalsTastesLikeNodeAggregationWhereInput>;
};

export type FlavorsVarietalsTastesLikeConnectFieldInput = {
  connect?: InputMaybe<Array<VarietalsConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VarietalsConnectWhere>;
};

export type FlavorsVarietalsTastesLikeConnection = {
  __typename?: 'FlavorsVarietalsTastesLikeConnection';
  edges: Array<FlavorsVarietalsTastesLikeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FlavorsVarietalsTastesLikeConnectionSort = {
  node?: InputMaybe<VarietalsSort>;
};

export type FlavorsVarietalsTastesLikeConnectionWhere = {
  AND?: InputMaybe<Array<FlavorsVarietalsTastesLikeConnectionWhere>>;
  NOT?: InputMaybe<FlavorsVarietalsTastesLikeConnectionWhere>;
  OR?: InputMaybe<Array<FlavorsVarietalsTastesLikeConnectionWhere>>;
  node?: InputMaybe<VarietalsWhere>;
};

export type FlavorsVarietalsTastesLikeCreateFieldInput = {
  node: VarietalsCreateInput;
};

export type FlavorsVarietalsTastesLikeDeleteFieldInput = {
  delete?: InputMaybe<VarietalsDeleteInput>;
  where?: InputMaybe<FlavorsVarietalsTastesLikeConnectionWhere>;
};

export type FlavorsVarietalsTastesLikeDisconnectFieldInput = {
  disconnect?: InputMaybe<VarietalsDisconnectInput>;
  where?: InputMaybe<FlavorsVarietalsTastesLikeConnectionWhere>;
};

export type FlavorsVarietalsTastesLikeFieldInput = {
  connect?: InputMaybe<Array<FlavorsVarietalsTastesLikeConnectFieldInput>>;
  create?: InputMaybe<Array<FlavorsVarietalsTastesLikeCreateFieldInput>>;
};

export type FlavorsVarietalsTastesLikeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FlavorsVarietalsTastesLikeNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FlavorsVarietalsTastesLikeNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FlavorsVarietalsTastesLikeNodeAggregationWhereInput>>;
  aka_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  aka_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  aka_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  aka_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  aka_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  aka_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  aka_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  aka_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  aka_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  aka_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  aka_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  aka_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  aka_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  aka_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  aka_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  altGlass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  altGlass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  altGlass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  altGlass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  altGlass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  altGlass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  altGlass_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  altGlass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  altGlass_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  altGlass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  altGlass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  altGlass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  altGlass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  altGlass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  altGlass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  drinkByDateYears_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  glass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  glass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  glass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  glass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  glass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  glass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  glass_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  glass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  glass_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  glass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  glass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  glass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  glass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  glass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  glass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  origin_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  origin_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  origin_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  origin_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  origin_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  origin_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  origin_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  origin_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  origin_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  origin_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  origin_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  origin_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  origin_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  origin_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  origin_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  servingTemp_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  servingTemp_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  servingTemp_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  servingTemp_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  servingTemp_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FlavorsVarietalsTastesLikeRelationship = {
  __typename?: 'FlavorsVarietalsTastesLikeRelationship';
  cursor: Scalars['String']['output'];
  node: Varietals;
};

export type FlavorsVarietalsTastesLikeUpdateConnectionInput = {
  node?: InputMaybe<VarietalsUpdateInput>;
};

export type FlavorsVarietalsTastesLikeUpdateFieldInput = {
  connect?: InputMaybe<Array<FlavorsVarietalsTastesLikeConnectFieldInput>>;
  create?: InputMaybe<Array<FlavorsVarietalsTastesLikeCreateFieldInput>>;
  delete?: InputMaybe<Array<FlavorsVarietalsTastesLikeDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FlavorsVarietalsTastesLikeDisconnectFieldInput>>;
  update?: InputMaybe<FlavorsVarietalsTastesLikeUpdateConnectionInput>;
  where?: InputMaybe<FlavorsVarietalsTastesLikeConnectionWhere>;
};

export type FlavorsVarietalsVarietalsTastesLikeAggregationSelection = {
  __typename?: 'FlavorsVarietalsVarietalsTastesLikeAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FlavorsVarietalsVarietalsTastesLikeNodeAggregateSelection>;
};

export type FlavorsVarietalsVarietalsTastesLikeNodeAggregateSelection = {
  __typename?: 'FlavorsVarietalsVarietalsTastesLikeNodeAggregateSelection';
  aka: StringAggregateSelection;
  altGlass: StringAggregateSelection;
  drinkByDateYears: BigIntAggregateSelection;
  glass: StringAggregateSelection;
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  origin: StringAggregateSelection;
  servingTemp: StringAggregateSelection;
};

export type FlavorsWhere = {
  AND?: InputMaybe<Array<FlavorsWhere>>;
  NOT?: InputMaybe<FlavorsWhere>;
  OR?: InputMaybe<Array<FlavorsWhere>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  varietalsTastesLikeAggregate?: InputMaybe<FlavorsVarietalsTastesLikeAggregateInput>;
  /** Return Flavors where all of the related FlavorsVarietalsTastesLikeConnections match this filter */
  varietalsTastesLikeConnection_ALL?: InputMaybe<FlavorsVarietalsTastesLikeConnectionWhere>;
  /** Return Flavors where none of the related FlavorsVarietalsTastesLikeConnections match this filter */
  varietalsTastesLikeConnection_NONE?: InputMaybe<FlavorsVarietalsTastesLikeConnectionWhere>;
  /** Return Flavors where one of the related FlavorsVarietalsTastesLikeConnections match this filter */
  varietalsTastesLikeConnection_SINGLE?: InputMaybe<FlavorsVarietalsTastesLikeConnectionWhere>;
  /** Return Flavors where some of the related FlavorsVarietalsTastesLikeConnections match this filter */
  varietalsTastesLikeConnection_SOME?: InputMaybe<FlavorsVarietalsTastesLikeConnectionWhere>;
  /** Return Flavors where all of the related Varietals match this filter */
  varietalsTastesLike_ALL?: InputMaybe<VarietalsWhere>;
  /** Return Flavors where none of the related Varietals match this filter */
  varietalsTastesLike_NONE?: InputMaybe<VarietalsWhere>;
  /** Return Flavors where one of the related Varietals match this filter */
  varietalsTastesLike_SINGLE?: InputMaybe<VarietalsWhere>;
  /** Return Flavors where some of the related Varietals match this filter */
  varietalsTastesLike_SOME?: InputMaybe<VarietalsWhere>;
};

export type Foods = {
  __typename?: 'Foods';
  cheeses: Array<Cheeses>;
  cheesesAggregate?: Maybe<FoodsCheesesCheesesAggregationSelection>;
  cheesesConnection: FoodsCheesesConnection;
  herbsAndSpices: Array<Herbs_And_Spices>;
  herbsAndSpicesAggregate?: Maybe<FoodsHerbs_And_SpicesHerbsAndSpicesAggregationSelection>;
  herbsAndSpicesConnection: FoodsHerbsAndSpicesConnection;
  id: Scalars['BigInt']['output'];
  meats: Array<Meats>;
  meatsAggregate?: Maybe<FoodsMeatsMeatsAggregationSelection>;
  meatsConnection: FoodsMeatsConnection;
  name: Scalars['String']['output'];
  vegetables: Array<Vegetables>;
  vegetablesAggregate?: Maybe<FoodsVegetablesVegetablesAggregationSelection>;
  vegetablesConnection: FoodsVegetablesConnection;
};


export type FoodsCheesesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CheesesOptions>;
  where?: InputMaybe<CheesesWhere>;
};


export type FoodsCheesesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CheesesWhere>;
};


export type FoodsCheesesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FoodsCheesesConnectionSort>>;
  where?: InputMaybe<FoodsCheesesConnectionWhere>;
};


export type FoodsHerbsAndSpicesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Herbs_And_SpicesOptions>;
  where?: InputMaybe<Herbs_And_SpicesWhere>;
};


export type FoodsHerbsAndSpicesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Herbs_And_SpicesWhere>;
};


export type FoodsHerbsAndSpicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FoodsHerbsAndSpicesConnectionSort>>;
  where?: InputMaybe<FoodsHerbsAndSpicesConnectionWhere>;
};


export type FoodsMeatsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MeatsOptions>;
  where?: InputMaybe<MeatsWhere>;
};


export type FoodsMeatsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MeatsWhere>;
};


export type FoodsMeatsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FoodsMeatsConnectionSort>>;
  where?: InputMaybe<FoodsMeatsConnectionWhere>;
};


export type FoodsVegetablesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VegetablesOptions>;
  where?: InputMaybe<VegetablesWhere>;
};


export type FoodsVegetablesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VegetablesWhere>;
};


export type FoodsVegetablesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FoodsVegetablesConnectionSort>>;
  where?: InputMaybe<FoodsVegetablesConnectionWhere>;
};

export type FoodsAggregateSelection = {
  __typename?: 'FoodsAggregateSelection';
  count: Scalars['Int']['output'];
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type FoodsCheesesAggregateInput = {
  AND?: InputMaybe<Array<FoodsCheesesAggregateInput>>;
  NOT?: InputMaybe<FoodsCheesesAggregateInput>;
  OR?: InputMaybe<Array<FoodsCheesesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FoodsCheesesNodeAggregationWhereInput>;
};

export type FoodsCheesesCheesesAggregationSelection = {
  __typename?: 'FoodsCheesesCheesesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FoodsCheesesCheesesNodeAggregateSelection>;
};

export type FoodsCheesesCheesesNodeAggregateSelection = {
  __typename?: 'FoodsCheesesCheesesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type FoodsCheesesConnectFieldInput = {
  connect?: InputMaybe<Array<CheesesConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CheesesConnectWhere>;
};

export type FoodsCheesesConnection = {
  __typename?: 'FoodsCheesesConnection';
  edges: Array<FoodsCheesesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FoodsCheesesConnectionSort = {
  node?: InputMaybe<CheesesSort>;
};

export type FoodsCheesesConnectionWhere = {
  AND?: InputMaybe<Array<FoodsCheesesConnectionWhere>>;
  NOT?: InputMaybe<FoodsCheesesConnectionWhere>;
  OR?: InputMaybe<Array<FoodsCheesesConnectionWhere>>;
  node?: InputMaybe<CheesesWhere>;
};

export type FoodsCheesesCreateFieldInput = {
  node: CheesesCreateInput;
};

export type FoodsCheesesDeleteFieldInput = {
  delete?: InputMaybe<CheesesDeleteInput>;
  where?: InputMaybe<FoodsCheesesConnectionWhere>;
};

export type FoodsCheesesDisconnectFieldInput = {
  disconnect?: InputMaybe<CheesesDisconnectInput>;
  where?: InputMaybe<FoodsCheesesConnectionWhere>;
};

export type FoodsCheesesFieldInput = {
  connect?: InputMaybe<Array<FoodsCheesesConnectFieldInput>>;
  create?: InputMaybe<Array<FoodsCheesesCreateFieldInput>>;
};

export type FoodsCheesesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FoodsCheesesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FoodsCheesesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FoodsCheesesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  types_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FoodsCheesesRelationship = {
  __typename?: 'FoodsCheesesRelationship';
  cursor: Scalars['String']['output'];
  node: Cheeses;
};

export type FoodsCheesesUpdateConnectionInput = {
  node?: InputMaybe<CheesesUpdateInput>;
};

export type FoodsCheesesUpdateFieldInput = {
  connect?: InputMaybe<Array<FoodsCheesesConnectFieldInput>>;
  create?: InputMaybe<Array<FoodsCheesesCreateFieldInput>>;
  delete?: InputMaybe<Array<FoodsCheesesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FoodsCheesesDisconnectFieldInput>>;
  update?: InputMaybe<FoodsCheesesUpdateConnectionInput>;
  where?: InputMaybe<FoodsCheesesConnectionWhere>;
};

export type FoodsConnectInput = {
  cheeses?: InputMaybe<Array<FoodsCheesesConnectFieldInput>>;
  herbsAndSpices?: InputMaybe<Array<FoodsHerbsAndSpicesConnectFieldInput>>;
  meats?: InputMaybe<Array<FoodsMeatsConnectFieldInput>>;
  vegetables?: InputMaybe<Array<FoodsVegetablesConnectFieldInput>>;
};

export type FoodsConnectWhere = {
  node: FoodsWhere;
};

export type FoodsConnection = {
  __typename?: 'FoodsConnection';
  edges: Array<FoodsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FoodsCreateInput = {
  cheeses?: InputMaybe<FoodsCheesesFieldInput>;
  herbsAndSpices?: InputMaybe<FoodsHerbsAndSpicesFieldInput>;
  id: Scalars['BigInt']['input'];
  meats?: InputMaybe<FoodsMeatsFieldInput>;
  name: Scalars['String']['input'];
  vegetables?: InputMaybe<FoodsVegetablesFieldInput>;
};

export type FoodsDeleteInput = {
  cheeses?: InputMaybe<Array<FoodsCheesesDeleteFieldInput>>;
  herbsAndSpices?: InputMaybe<Array<FoodsHerbsAndSpicesDeleteFieldInput>>;
  meats?: InputMaybe<Array<FoodsMeatsDeleteFieldInput>>;
  vegetables?: InputMaybe<Array<FoodsVegetablesDeleteFieldInput>>;
};

export type FoodsDisconnectInput = {
  cheeses?: InputMaybe<Array<FoodsCheesesDisconnectFieldInput>>;
  herbsAndSpices?: InputMaybe<Array<FoodsHerbsAndSpicesDisconnectFieldInput>>;
  meats?: InputMaybe<Array<FoodsMeatsDisconnectFieldInput>>;
  vegetables?: InputMaybe<Array<FoodsVegetablesDisconnectFieldInput>>;
};

export type FoodsEdge = {
  __typename?: 'FoodsEdge';
  cursor: Scalars['String']['output'];
  node: Foods;
};

export type FoodsHerbsAndSpicesAggregateInput = {
  AND?: InputMaybe<Array<FoodsHerbsAndSpicesAggregateInput>>;
  NOT?: InputMaybe<FoodsHerbsAndSpicesAggregateInput>;
  OR?: InputMaybe<Array<FoodsHerbsAndSpicesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FoodsHerbsAndSpicesNodeAggregationWhereInput>;
};

export type FoodsHerbsAndSpicesConnectFieldInput = {
  connect?: InputMaybe<Array<Herbs_And_SpicesConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<Herbs_And_SpicesConnectWhere>;
};

export type FoodsHerbsAndSpicesConnection = {
  __typename?: 'FoodsHerbsAndSpicesConnection';
  edges: Array<FoodsHerbsAndSpicesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FoodsHerbsAndSpicesConnectionSort = {
  node?: InputMaybe<Herbs_And_SpicesSort>;
};

export type FoodsHerbsAndSpicesConnectionWhere = {
  AND?: InputMaybe<Array<FoodsHerbsAndSpicesConnectionWhere>>;
  NOT?: InputMaybe<FoodsHerbsAndSpicesConnectionWhere>;
  OR?: InputMaybe<Array<FoodsHerbsAndSpicesConnectionWhere>>;
  node?: InputMaybe<Herbs_And_SpicesWhere>;
};

export type FoodsHerbsAndSpicesCreateFieldInput = {
  node: Herbs_And_SpicesCreateInput;
};

export type FoodsHerbsAndSpicesDeleteFieldInput = {
  delete?: InputMaybe<Herbs_And_SpicesDeleteInput>;
  where?: InputMaybe<FoodsHerbsAndSpicesConnectionWhere>;
};

export type FoodsHerbsAndSpicesDisconnectFieldInput = {
  disconnect?: InputMaybe<Herbs_And_SpicesDisconnectInput>;
  where?: InputMaybe<FoodsHerbsAndSpicesConnectionWhere>;
};

export type FoodsHerbsAndSpicesFieldInput = {
  connect?: InputMaybe<Array<FoodsHerbsAndSpicesConnectFieldInput>>;
  create?: InputMaybe<Array<FoodsHerbsAndSpicesCreateFieldInput>>;
};

export type FoodsHerbsAndSpicesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FoodsHerbsAndSpicesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FoodsHerbsAndSpicesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FoodsHerbsAndSpicesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  types_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FoodsHerbsAndSpicesRelationship = {
  __typename?: 'FoodsHerbsAndSpicesRelationship';
  cursor: Scalars['String']['output'];
  node: Herbs_And_Spices;
};

export type FoodsHerbsAndSpicesUpdateConnectionInput = {
  node?: InputMaybe<Herbs_And_SpicesUpdateInput>;
};

export type FoodsHerbsAndSpicesUpdateFieldInput = {
  connect?: InputMaybe<Array<FoodsHerbsAndSpicesConnectFieldInput>>;
  create?: InputMaybe<Array<FoodsHerbsAndSpicesCreateFieldInput>>;
  delete?: InputMaybe<Array<FoodsHerbsAndSpicesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FoodsHerbsAndSpicesDisconnectFieldInput>>;
  update?: InputMaybe<FoodsHerbsAndSpicesUpdateConnectionInput>;
  where?: InputMaybe<FoodsHerbsAndSpicesConnectionWhere>;
};

export type FoodsHerbs_And_SpicesHerbsAndSpicesAggregationSelection = {
  __typename?: 'FoodsHerbs_and_SpicesHerbsAndSpicesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FoodsHerbs_And_SpicesHerbsAndSpicesNodeAggregateSelection>;
};

export type FoodsHerbs_And_SpicesHerbsAndSpicesNodeAggregateSelection = {
  __typename?: 'FoodsHerbs_and_SpicesHerbsAndSpicesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type FoodsMeatsAggregateInput = {
  AND?: InputMaybe<Array<FoodsMeatsAggregateInput>>;
  NOT?: InputMaybe<FoodsMeatsAggregateInput>;
  OR?: InputMaybe<Array<FoodsMeatsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FoodsMeatsNodeAggregationWhereInput>;
};

export type FoodsMeatsConnectFieldInput = {
  connect?: InputMaybe<Array<MeatsConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MeatsConnectWhere>;
};

export type FoodsMeatsConnection = {
  __typename?: 'FoodsMeatsConnection';
  edges: Array<FoodsMeatsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FoodsMeatsConnectionSort = {
  node?: InputMaybe<MeatsSort>;
};

export type FoodsMeatsConnectionWhere = {
  AND?: InputMaybe<Array<FoodsMeatsConnectionWhere>>;
  NOT?: InputMaybe<FoodsMeatsConnectionWhere>;
  OR?: InputMaybe<Array<FoodsMeatsConnectionWhere>>;
  node?: InputMaybe<MeatsWhere>;
};

export type FoodsMeatsCreateFieldInput = {
  node: MeatsCreateInput;
};

export type FoodsMeatsDeleteFieldInput = {
  delete?: InputMaybe<MeatsDeleteInput>;
  where?: InputMaybe<FoodsMeatsConnectionWhere>;
};

export type FoodsMeatsDisconnectFieldInput = {
  disconnect?: InputMaybe<MeatsDisconnectInput>;
  where?: InputMaybe<FoodsMeatsConnectionWhere>;
};

export type FoodsMeatsFieldInput = {
  connect?: InputMaybe<Array<FoodsMeatsConnectFieldInput>>;
  create?: InputMaybe<Array<FoodsMeatsCreateFieldInput>>;
};

export type FoodsMeatsMeatsAggregationSelection = {
  __typename?: 'FoodsMeatsMeatsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FoodsMeatsMeatsNodeAggregateSelection>;
};

export type FoodsMeatsMeatsNodeAggregateSelection = {
  __typename?: 'FoodsMeatsMeatsNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type FoodsMeatsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FoodsMeatsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FoodsMeatsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FoodsMeatsNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  types_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FoodsMeatsRelationship = {
  __typename?: 'FoodsMeatsRelationship';
  cursor: Scalars['String']['output'];
  node: Meats;
};

export type FoodsMeatsUpdateConnectionInput = {
  node?: InputMaybe<MeatsUpdateInput>;
};

export type FoodsMeatsUpdateFieldInput = {
  connect?: InputMaybe<Array<FoodsMeatsConnectFieldInput>>;
  create?: InputMaybe<Array<FoodsMeatsCreateFieldInput>>;
  delete?: InputMaybe<Array<FoodsMeatsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FoodsMeatsDisconnectFieldInput>>;
  update?: InputMaybe<FoodsMeatsUpdateConnectionInput>;
  where?: InputMaybe<FoodsMeatsConnectionWhere>;
};

export type FoodsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FoodsSort objects to sort Foods by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FoodsSort>>;
};

export type FoodsRelationInput = {
  cheeses?: InputMaybe<Array<FoodsCheesesCreateFieldInput>>;
  herbsAndSpices?: InputMaybe<Array<FoodsHerbsAndSpicesCreateFieldInput>>;
  meats?: InputMaybe<Array<FoodsMeatsCreateFieldInput>>;
  vegetables?: InputMaybe<Array<FoodsVegetablesCreateFieldInput>>;
};

/** Fields to sort Foods by. The order in which sorts are applied is not guaranteed when specifying many fields in one FoodsSort object. */
export type FoodsSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type FoodsUpdateInput = {
  cheeses?: InputMaybe<Array<FoodsCheesesUpdateFieldInput>>;
  herbsAndSpices?: InputMaybe<Array<FoodsHerbsAndSpicesUpdateFieldInput>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  id_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  meats?: InputMaybe<Array<FoodsMeatsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  vegetables?: InputMaybe<Array<FoodsVegetablesUpdateFieldInput>>;
};

export type FoodsVegetablesAggregateInput = {
  AND?: InputMaybe<Array<FoodsVegetablesAggregateInput>>;
  NOT?: InputMaybe<FoodsVegetablesAggregateInput>;
  OR?: InputMaybe<Array<FoodsVegetablesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FoodsVegetablesNodeAggregationWhereInput>;
};

export type FoodsVegetablesConnectFieldInput = {
  connect?: InputMaybe<Array<VegetablesConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VegetablesConnectWhere>;
};

export type FoodsVegetablesConnection = {
  __typename?: 'FoodsVegetablesConnection';
  edges: Array<FoodsVegetablesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FoodsVegetablesConnectionSort = {
  node?: InputMaybe<VegetablesSort>;
};

export type FoodsVegetablesConnectionWhere = {
  AND?: InputMaybe<Array<FoodsVegetablesConnectionWhere>>;
  NOT?: InputMaybe<FoodsVegetablesConnectionWhere>;
  OR?: InputMaybe<Array<FoodsVegetablesConnectionWhere>>;
  node?: InputMaybe<VegetablesWhere>;
};

export type FoodsVegetablesCreateFieldInput = {
  node: VegetablesCreateInput;
};

export type FoodsVegetablesDeleteFieldInput = {
  delete?: InputMaybe<VegetablesDeleteInput>;
  where?: InputMaybe<FoodsVegetablesConnectionWhere>;
};

export type FoodsVegetablesDisconnectFieldInput = {
  disconnect?: InputMaybe<VegetablesDisconnectInput>;
  where?: InputMaybe<FoodsVegetablesConnectionWhere>;
};

export type FoodsVegetablesFieldInput = {
  connect?: InputMaybe<Array<FoodsVegetablesConnectFieldInput>>;
  create?: InputMaybe<Array<FoodsVegetablesCreateFieldInput>>;
};

export type FoodsVegetablesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FoodsVegetablesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FoodsVegetablesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FoodsVegetablesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  types_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FoodsVegetablesRelationship = {
  __typename?: 'FoodsVegetablesRelationship';
  cursor: Scalars['String']['output'];
  node: Vegetables;
};

export type FoodsVegetablesUpdateConnectionInput = {
  node?: InputMaybe<VegetablesUpdateInput>;
};

export type FoodsVegetablesUpdateFieldInput = {
  connect?: InputMaybe<Array<FoodsVegetablesConnectFieldInput>>;
  create?: InputMaybe<Array<FoodsVegetablesCreateFieldInput>>;
  delete?: InputMaybe<Array<FoodsVegetablesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FoodsVegetablesDisconnectFieldInput>>;
  update?: InputMaybe<FoodsVegetablesUpdateConnectionInput>;
  where?: InputMaybe<FoodsVegetablesConnectionWhere>;
};

export type FoodsVegetablesVegetablesAggregationSelection = {
  __typename?: 'FoodsVegetablesVegetablesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FoodsVegetablesVegetablesNodeAggregateSelection>;
};

export type FoodsVegetablesVegetablesNodeAggregateSelection = {
  __typename?: 'FoodsVegetablesVegetablesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type FoodsWhere = {
  AND?: InputMaybe<Array<FoodsWhere>>;
  NOT?: InputMaybe<FoodsWhere>;
  OR?: InputMaybe<Array<FoodsWhere>>;
  cheesesAggregate?: InputMaybe<FoodsCheesesAggregateInput>;
  /** Return Foods where all of the related FoodsCheesesConnections match this filter */
  cheesesConnection_ALL?: InputMaybe<FoodsCheesesConnectionWhere>;
  /** Return Foods where none of the related FoodsCheesesConnections match this filter */
  cheesesConnection_NONE?: InputMaybe<FoodsCheesesConnectionWhere>;
  /** Return Foods where one of the related FoodsCheesesConnections match this filter */
  cheesesConnection_SINGLE?: InputMaybe<FoodsCheesesConnectionWhere>;
  /** Return Foods where some of the related FoodsCheesesConnections match this filter */
  cheesesConnection_SOME?: InputMaybe<FoodsCheesesConnectionWhere>;
  /** Return Foods where all of the related Cheeses match this filter */
  cheeses_ALL?: InputMaybe<CheesesWhere>;
  /** Return Foods where none of the related Cheeses match this filter */
  cheeses_NONE?: InputMaybe<CheesesWhere>;
  /** Return Foods where one of the related Cheeses match this filter */
  cheeses_SINGLE?: InputMaybe<CheesesWhere>;
  /** Return Foods where some of the related Cheeses match this filter */
  cheeses_SOME?: InputMaybe<CheesesWhere>;
  herbsAndSpicesAggregate?: InputMaybe<FoodsHerbsAndSpicesAggregateInput>;
  /** Return Foods where all of the related FoodsHerbsAndSpicesConnections match this filter */
  herbsAndSpicesConnection_ALL?: InputMaybe<FoodsHerbsAndSpicesConnectionWhere>;
  /** Return Foods where none of the related FoodsHerbsAndSpicesConnections match this filter */
  herbsAndSpicesConnection_NONE?: InputMaybe<FoodsHerbsAndSpicesConnectionWhere>;
  /** Return Foods where one of the related FoodsHerbsAndSpicesConnections match this filter */
  herbsAndSpicesConnection_SINGLE?: InputMaybe<FoodsHerbsAndSpicesConnectionWhere>;
  /** Return Foods where some of the related FoodsHerbsAndSpicesConnections match this filter */
  herbsAndSpicesConnection_SOME?: InputMaybe<FoodsHerbsAndSpicesConnectionWhere>;
  /** Return Foods where all of the related Herbs_and_Spices match this filter */
  herbsAndSpices_ALL?: InputMaybe<Herbs_And_SpicesWhere>;
  /** Return Foods where none of the related Herbs_and_Spices match this filter */
  herbsAndSpices_NONE?: InputMaybe<Herbs_And_SpicesWhere>;
  /** Return Foods where one of the related Herbs_and_Spices match this filter */
  herbsAndSpices_SINGLE?: InputMaybe<Herbs_And_SpicesWhere>;
  /** Return Foods where some of the related Herbs_and_Spices match this filter */
  herbsAndSpices_SOME?: InputMaybe<Herbs_And_SpicesWhere>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  meatsAggregate?: InputMaybe<FoodsMeatsAggregateInput>;
  /** Return Foods where all of the related FoodsMeatsConnections match this filter */
  meatsConnection_ALL?: InputMaybe<FoodsMeatsConnectionWhere>;
  /** Return Foods where none of the related FoodsMeatsConnections match this filter */
  meatsConnection_NONE?: InputMaybe<FoodsMeatsConnectionWhere>;
  /** Return Foods where one of the related FoodsMeatsConnections match this filter */
  meatsConnection_SINGLE?: InputMaybe<FoodsMeatsConnectionWhere>;
  /** Return Foods where some of the related FoodsMeatsConnections match this filter */
  meatsConnection_SOME?: InputMaybe<FoodsMeatsConnectionWhere>;
  /** Return Foods where all of the related Meats match this filter */
  meats_ALL?: InputMaybe<MeatsWhere>;
  /** Return Foods where none of the related Meats match this filter */
  meats_NONE?: InputMaybe<MeatsWhere>;
  /** Return Foods where one of the related Meats match this filter */
  meats_SINGLE?: InputMaybe<MeatsWhere>;
  /** Return Foods where some of the related Meats match this filter */
  meats_SOME?: InputMaybe<MeatsWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  vegetablesAggregate?: InputMaybe<FoodsVegetablesAggregateInput>;
  /** Return Foods where all of the related FoodsVegetablesConnections match this filter */
  vegetablesConnection_ALL?: InputMaybe<FoodsVegetablesConnectionWhere>;
  /** Return Foods where none of the related FoodsVegetablesConnections match this filter */
  vegetablesConnection_NONE?: InputMaybe<FoodsVegetablesConnectionWhere>;
  /** Return Foods where one of the related FoodsVegetablesConnections match this filter */
  vegetablesConnection_SINGLE?: InputMaybe<FoodsVegetablesConnectionWhere>;
  /** Return Foods where some of the related FoodsVegetablesConnections match this filter */
  vegetablesConnection_SOME?: InputMaybe<FoodsVegetablesConnectionWhere>;
  /** Return Foods where all of the related Vegetables match this filter */
  vegetables_ALL?: InputMaybe<VegetablesWhere>;
  /** Return Foods where none of the related Vegetables match this filter */
  vegetables_NONE?: InputMaybe<VegetablesWhere>;
  /** Return Foods where one of the related Vegetables match this filter */
  vegetables_SINGLE?: InputMaybe<VegetablesWhere>;
  /** Return Foods where some of the related Vegetables match this filter */
  vegetables_SOME?: InputMaybe<VegetablesWhere>;
};

export type HerbsAndSpicesConnection = {
  __typename?: 'HerbsAndSpicesConnection';
  edges: Array<Herbs_And_SpicesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Herbs_And_Spices = {
  __typename?: 'Herbs_and_Spices';
  id: Scalars['BigInt']['output'];
  includes: Array<Foods>;
  includesAggregate?: Maybe<Herbs_And_SpicesFoodsIncludesAggregationSelection>;
  includesConnection: Herbs_And_SpicesIncludesConnection;
  name: Scalars['String']['output'];
  stylesPairsWith: Array<Styles>;
  stylesPairsWithAggregate?: Maybe<Herbs_And_SpicesStylesStylesPairsWithAggregationSelection>;
  stylesPairsWithConnection: Herbs_And_SpicesStylesPairsWithConnection;
  types: Scalars['String']['output'];
};


export type Herbs_And_SpicesIncludesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FoodsOptions>;
  where?: InputMaybe<FoodsWhere>;
};


export type Herbs_And_SpicesIncludesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FoodsWhere>;
};


export type Herbs_And_SpicesIncludesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Herbs_And_SpicesIncludesConnectionSort>>;
  where?: InputMaybe<Herbs_And_SpicesIncludesConnectionWhere>;
};


export type Herbs_And_SpicesStylesPairsWithArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<StylesOptions>;
  where?: InputMaybe<StylesWhere>;
};


export type Herbs_And_SpicesStylesPairsWithAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StylesWhere>;
};


export type Herbs_And_SpicesStylesPairsWithConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithConnectionSort>>;
  where?: InputMaybe<Herbs_And_SpicesStylesPairsWithConnectionWhere>;
};

export type Herbs_And_SpicesAggregateSelection = {
  __typename?: 'Herbs_and_SpicesAggregateSelection';
  count: Scalars['Int']['output'];
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type Herbs_And_SpicesConnectInput = {
  includes?: InputMaybe<Array<Herbs_And_SpicesIncludesConnectFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithConnectFieldInput>>;
};

export type Herbs_And_SpicesConnectWhere = {
  node: Herbs_And_SpicesWhere;
};

export type Herbs_And_SpicesCreateInput = {
  id: Scalars['BigInt']['input'];
  includes?: InputMaybe<Herbs_And_SpicesIncludesFieldInput>;
  name: Scalars['String']['input'];
  stylesPairsWith?: InputMaybe<Herbs_And_SpicesStylesPairsWithFieldInput>;
  types: Scalars['String']['input'];
};

export type Herbs_And_SpicesDeleteInput = {
  includes?: InputMaybe<Array<Herbs_And_SpicesIncludesDeleteFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithDeleteFieldInput>>;
};

export type Herbs_And_SpicesDisconnectInput = {
  includes?: InputMaybe<Array<Herbs_And_SpicesIncludesDisconnectFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithDisconnectFieldInput>>;
};

export type Herbs_And_SpicesEdge = {
  __typename?: 'Herbs_and_SpicesEdge';
  cursor: Scalars['String']['output'];
  node: Herbs_And_Spices;
};

export type Herbs_And_SpicesFoodsIncludesAggregationSelection = {
  __typename?: 'Herbs_and_SpicesFoodsIncludesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<Herbs_And_SpicesFoodsIncludesNodeAggregateSelection>;
};

export type Herbs_And_SpicesFoodsIncludesNodeAggregateSelection = {
  __typename?: 'Herbs_and_SpicesFoodsIncludesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type Herbs_And_SpicesIncludesAggregateInput = {
  AND?: InputMaybe<Array<Herbs_And_SpicesIncludesAggregateInput>>;
  NOT?: InputMaybe<Herbs_And_SpicesIncludesAggregateInput>;
  OR?: InputMaybe<Array<Herbs_And_SpicesIncludesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<Herbs_And_SpicesIncludesNodeAggregationWhereInput>;
};

export type Herbs_And_SpicesIncludesConnectFieldInput = {
  connect?: InputMaybe<Array<FoodsConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FoodsConnectWhere>;
};

export type Herbs_And_SpicesIncludesConnection = {
  __typename?: 'Herbs_and_SpicesIncludesConnection';
  edges: Array<Herbs_And_SpicesIncludesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Herbs_And_SpicesIncludesConnectionSort = {
  node?: InputMaybe<FoodsSort>;
};

export type Herbs_And_SpicesIncludesConnectionWhere = {
  AND?: InputMaybe<Array<Herbs_And_SpicesIncludesConnectionWhere>>;
  NOT?: InputMaybe<Herbs_And_SpicesIncludesConnectionWhere>;
  OR?: InputMaybe<Array<Herbs_And_SpicesIncludesConnectionWhere>>;
  node?: InputMaybe<FoodsWhere>;
};

export type Herbs_And_SpicesIncludesCreateFieldInput = {
  node: FoodsCreateInput;
};

export type Herbs_And_SpicesIncludesDeleteFieldInput = {
  delete?: InputMaybe<FoodsDeleteInput>;
  where?: InputMaybe<Herbs_And_SpicesIncludesConnectionWhere>;
};

export type Herbs_And_SpicesIncludesDisconnectFieldInput = {
  disconnect?: InputMaybe<FoodsDisconnectInput>;
  where?: InputMaybe<Herbs_And_SpicesIncludesConnectionWhere>;
};

export type Herbs_And_SpicesIncludesFieldInput = {
  connect?: InputMaybe<Array<Herbs_And_SpicesIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<Herbs_And_SpicesIncludesCreateFieldInput>>;
};

export type Herbs_And_SpicesIncludesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<Herbs_And_SpicesIncludesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<Herbs_And_SpicesIncludesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<Herbs_And_SpicesIncludesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type Herbs_And_SpicesIncludesRelationship = {
  __typename?: 'Herbs_and_SpicesIncludesRelationship';
  cursor: Scalars['String']['output'];
  node: Foods;
};

export type Herbs_And_SpicesIncludesUpdateConnectionInput = {
  node?: InputMaybe<FoodsUpdateInput>;
};

export type Herbs_And_SpicesIncludesUpdateFieldInput = {
  connect?: InputMaybe<Array<Herbs_And_SpicesIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<Herbs_And_SpicesIncludesCreateFieldInput>>;
  delete?: InputMaybe<Array<Herbs_And_SpicesIncludesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<Herbs_And_SpicesIncludesDisconnectFieldInput>>;
  update?: InputMaybe<Herbs_And_SpicesIncludesUpdateConnectionInput>;
  where?: InputMaybe<Herbs_And_SpicesIncludesConnectionWhere>;
};

export type Herbs_And_SpicesOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more Herbs_and_SpicesSort objects to sort HerbsAndSpices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<Herbs_And_SpicesSort>>;
};

export type Herbs_And_SpicesRelationInput = {
  includes?: InputMaybe<Array<Herbs_And_SpicesIncludesCreateFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithCreateFieldInput>>;
};

/** Fields to sort HerbsAndSpices by. The order in which sorts are applied is not guaranteed when specifying many fields in one Herbs_and_SpicesSort object. */
export type Herbs_And_SpicesSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  types?: InputMaybe<SortDirection>;
};

export type Herbs_And_SpicesStylesPairsWithAggregateInput = {
  AND?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithAggregateInput>>;
  NOT?: InputMaybe<Herbs_And_SpicesStylesPairsWithAggregateInput>;
  OR?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<Herbs_And_SpicesStylesPairsWithNodeAggregationWhereInput>;
};

export type Herbs_And_SpicesStylesPairsWithConnectFieldInput = {
  connect?: InputMaybe<Array<StylesConnectInput>>;
  edge: PairsWithPropertiesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<StylesConnectWhere>;
};

export type Herbs_And_SpicesStylesPairsWithConnection = {
  __typename?: 'Herbs_and_SpicesStylesPairsWithConnection';
  edges: Array<Herbs_And_SpicesStylesPairsWithRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Herbs_And_SpicesStylesPairsWithConnectionSort = {
  edge?: InputMaybe<PairsWithPropertiesSort>;
  node?: InputMaybe<StylesSort>;
};

export type Herbs_And_SpicesStylesPairsWithConnectionWhere = {
  AND?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithConnectionWhere>>;
  NOT?: InputMaybe<Herbs_And_SpicesStylesPairsWithConnectionWhere>;
  OR?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithConnectionWhere>>;
  edge?: InputMaybe<PairsWithPropertiesWhere>;
  node?: InputMaybe<StylesWhere>;
};

export type Herbs_And_SpicesStylesPairsWithCreateFieldInput = {
  edge: PairsWithPropertiesCreateInput;
  node: StylesCreateInput;
};

export type Herbs_And_SpicesStylesPairsWithDeleteFieldInput = {
  delete?: InputMaybe<StylesDeleteInput>;
  where?: InputMaybe<Herbs_And_SpicesStylesPairsWithConnectionWhere>;
};

export type Herbs_And_SpicesStylesPairsWithDisconnectFieldInput = {
  disconnect?: InputMaybe<StylesDisconnectInput>;
  where?: InputMaybe<Herbs_And_SpicesStylesPairsWithConnectionWhere>;
};

export type Herbs_And_SpicesStylesPairsWithFieldInput = {
  connect?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithConnectFieldInput>>;
  create?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithCreateFieldInput>>;
};

export type Herbs_And_SpicesStylesPairsWithNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithNodeAggregationWhereInput>>;
  NOT?: InputMaybe<Herbs_And_SpicesStylesPairsWithNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  typeId_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Herbs_And_SpicesStylesPairsWithRelationship = {
  __typename?: 'Herbs_and_SpicesStylesPairsWithRelationship';
  cursor: Scalars['String']['output'];
  node: Styles;
  properties: PairsWithProperties;
};

export type Herbs_And_SpicesStylesPairsWithUpdateConnectionInput = {
  edge?: InputMaybe<PairsWithPropertiesUpdateInput>;
  node?: InputMaybe<StylesUpdateInput>;
};

export type Herbs_And_SpicesStylesPairsWithUpdateFieldInput = {
  connect?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithConnectFieldInput>>;
  create?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithCreateFieldInput>>;
  delete?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithDisconnectFieldInput>>;
  update?: InputMaybe<Herbs_And_SpicesStylesPairsWithUpdateConnectionInput>;
  where?: InputMaybe<Herbs_And_SpicesStylesPairsWithConnectionWhere>;
};

export type Herbs_And_SpicesStylesStylesPairsWithAggregationSelection = {
  __typename?: 'Herbs_and_SpicesStylesStylesPairsWithAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<Herbs_And_SpicesStylesStylesPairsWithNodeAggregateSelection>;
};

export type Herbs_And_SpicesStylesStylesPairsWithNodeAggregateSelection = {
  __typename?: 'Herbs_and_SpicesStylesStylesPairsWithNodeAggregateSelection';
  description: StringAggregateSelection;
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  typeId: BigIntAggregateSelection;
};

export type Herbs_And_SpicesUpdateInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  id_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  includes?: InputMaybe<Array<Herbs_And_SpicesIncludesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  stylesPairsWith?: InputMaybe<Array<Herbs_And_SpicesStylesPairsWithUpdateFieldInput>>;
  types?: InputMaybe<Scalars['String']['input']>;
};

export type Herbs_And_SpicesWhere = {
  AND?: InputMaybe<Array<Herbs_And_SpicesWhere>>;
  NOT?: InputMaybe<Herbs_And_SpicesWhere>;
  OR?: InputMaybe<Array<Herbs_And_SpicesWhere>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  includesAggregate?: InputMaybe<Herbs_And_SpicesIncludesAggregateInput>;
  /** Return Herbs_and_Spices where all of the related Herbs_and_SpicesIncludesConnections match this filter */
  includesConnection_ALL?: InputMaybe<Herbs_And_SpicesIncludesConnectionWhere>;
  /** Return Herbs_and_Spices where none of the related Herbs_and_SpicesIncludesConnections match this filter */
  includesConnection_NONE?: InputMaybe<Herbs_And_SpicesIncludesConnectionWhere>;
  /** Return Herbs_and_Spices where one of the related Herbs_and_SpicesIncludesConnections match this filter */
  includesConnection_SINGLE?: InputMaybe<Herbs_And_SpicesIncludesConnectionWhere>;
  /** Return Herbs_and_Spices where some of the related Herbs_and_SpicesIncludesConnections match this filter */
  includesConnection_SOME?: InputMaybe<Herbs_And_SpicesIncludesConnectionWhere>;
  /** Return Herbs_and_Spices where all of the related Foods match this filter */
  includes_ALL?: InputMaybe<FoodsWhere>;
  /** Return Herbs_and_Spices where none of the related Foods match this filter */
  includes_NONE?: InputMaybe<FoodsWhere>;
  /** Return Herbs_and_Spices where one of the related Foods match this filter */
  includes_SINGLE?: InputMaybe<FoodsWhere>;
  /** Return Herbs_and_Spices where some of the related Foods match this filter */
  includes_SOME?: InputMaybe<FoodsWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  stylesPairsWithAggregate?: InputMaybe<Herbs_And_SpicesStylesPairsWithAggregateInput>;
  /** Return Herbs_and_Spices where all of the related Herbs_and_SpicesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_ALL?: InputMaybe<Herbs_And_SpicesStylesPairsWithConnectionWhere>;
  /** Return Herbs_and_Spices where none of the related Herbs_and_SpicesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_NONE?: InputMaybe<Herbs_And_SpicesStylesPairsWithConnectionWhere>;
  /** Return Herbs_and_Spices where one of the related Herbs_and_SpicesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_SINGLE?: InputMaybe<Herbs_And_SpicesStylesPairsWithConnectionWhere>;
  /** Return Herbs_and_Spices where some of the related Herbs_and_SpicesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_SOME?: InputMaybe<Herbs_And_SpicesStylesPairsWithConnectionWhere>;
  /** Return Herbs_and_Spices where all of the related Styles match this filter */
  stylesPairsWith_ALL?: InputMaybe<StylesWhere>;
  /** Return Herbs_and_Spices where none of the related Styles match this filter */
  stylesPairsWith_NONE?: InputMaybe<StylesWhere>;
  /** Return Herbs_and_Spices where one of the related Styles match this filter */
  stylesPairsWith_SINGLE?: InputMaybe<StylesWhere>;
  /** Return Herbs_and_Spices where some of the related Styles match this filter */
  stylesPairsWith_SOME?: InputMaybe<StylesWhere>;
  types?: InputMaybe<Scalars['String']['input']>;
  types_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  types_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  types_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  types_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type Meats = {
  __typename?: 'Meats';
  id: Scalars['BigInt']['output'];
  includes: Array<Foods>;
  includesAggregate?: Maybe<MeatsFoodsIncludesAggregationSelection>;
  includesConnection: MeatsIncludesConnection;
  name: Scalars['String']['output'];
  stylesPairsWith: Array<Styles>;
  stylesPairsWithAggregate?: Maybe<MeatsStylesStylesPairsWithAggregationSelection>;
  stylesPairsWithConnection: MeatsStylesPairsWithConnection;
  types: Scalars['String']['output'];
};


export type MeatsIncludesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FoodsOptions>;
  where?: InputMaybe<FoodsWhere>;
};


export type MeatsIncludesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FoodsWhere>;
};


export type MeatsIncludesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MeatsIncludesConnectionSort>>;
  where?: InputMaybe<MeatsIncludesConnectionWhere>;
};


export type MeatsStylesPairsWithArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<StylesOptions>;
  where?: InputMaybe<StylesWhere>;
};


export type MeatsStylesPairsWithAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StylesWhere>;
};


export type MeatsStylesPairsWithConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MeatsStylesPairsWithConnectionSort>>;
  where?: InputMaybe<MeatsStylesPairsWithConnectionWhere>;
};

export type MeatsAggregateSelection = {
  __typename?: 'MeatsAggregateSelection';
  count: Scalars['Int']['output'];
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type MeatsConnectInput = {
  includes?: InputMaybe<Array<MeatsIncludesConnectFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<MeatsStylesPairsWithConnectFieldInput>>;
};

export type MeatsConnectWhere = {
  node: MeatsWhere;
};

export type MeatsConnection = {
  __typename?: 'MeatsConnection';
  edges: Array<MeatsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MeatsCreateInput = {
  id: Scalars['BigInt']['input'];
  includes?: InputMaybe<MeatsIncludesFieldInput>;
  name: Scalars['String']['input'];
  stylesPairsWith?: InputMaybe<MeatsStylesPairsWithFieldInput>;
  types: Scalars['String']['input'];
};

export type MeatsDeleteInput = {
  includes?: InputMaybe<Array<MeatsIncludesDeleteFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<MeatsStylesPairsWithDeleteFieldInput>>;
};

export type MeatsDisconnectInput = {
  includes?: InputMaybe<Array<MeatsIncludesDisconnectFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<MeatsStylesPairsWithDisconnectFieldInput>>;
};

export type MeatsEdge = {
  __typename?: 'MeatsEdge';
  cursor: Scalars['String']['output'];
  node: Meats;
};

export type MeatsFoodsIncludesAggregationSelection = {
  __typename?: 'MeatsFoodsIncludesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MeatsFoodsIncludesNodeAggregateSelection>;
};

export type MeatsFoodsIncludesNodeAggregateSelection = {
  __typename?: 'MeatsFoodsIncludesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type MeatsIncludesAggregateInput = {
  AND?: InputMaybe<Array<MeatsIncludesAggregateInput>>;
  NOT?: InputMaybe<MeatsIncludesAggregateInput>;
  OR?: InputMaybe<Array<MeatsIncludesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MeatsIncludesNodeAggregationWhereInput>;
};

export type MeatsIncludesConnectFieldInput = {
  connect?: InputMaybe<Array<FoodsConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FoodsConnectWhere>;
};

export type MeatsIncludesConnection = {
  __typename?: 'MeatsIncludesConnection';
  edges: Array<MeatsIncludesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MeatsIncludesConnectionSort = {
  node?: InputMaybe<FoodsSort>;
};

export type MeatsIncludesConnectionWhere = {
  AND?: InputMaybe<Array<MeatsIncludesConnectionWhere>>;
  NOT?: InputMaybe<MeatsIncludesConnectionWhere>;
  OR?: InputMaybe<Array<MeatsIncludesConnectionWhere>>;
  node?: InputMaybe<FoodsWhere>;
};

export type MeatsIncludesCreateFieldInput = {
  node: FoodsCreateInput;
};

export type MeatsIncludesDeleteFieldInput = {
  delete?: InputMaybe<FoodsDeleteInput>;
  where?: InputMaybe<MeatsIncludesConnectionWhere>;
};

export type MeatsIncludesDisconnectFieldInput = {
  disconnect?: InputMaybe<FoodsDisconnectInput>;
  where?: InputMaybe<MeatsIncludesConnectionWhere>;
};

export type MeatsIncludesFieldInput = {
  connect?: InputMaybe<Array<MeatsIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<MeatsIncludesCreateFieldInput>>;
};

export type MeatsIncludesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MeatsIncludesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MeatsIncludesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MeatsIncludesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MeatsIncludesRelationship = {
  __typename?: 'MeatsIncludesRelationship';
  cursor: Scalars['String']['output'];
  node: Foods;
};

export type MeatsIncludesUpdateConnectionInput = {
  node?: InputMaybe<FoodsUpdateInput>;
};

export type MeatsIncludesUpdateFieldInput = {
  connect?: InputMaybe<Array<MeatsIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<MeatsIncludesCreateFieldInput>>;
  delete?: InputMaybe<Array<MeatsIncludesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MeatsIncludesDisconnectFieldInput>>;
  update?: InputMaybe<MeatsIncludesUpdateConnectionInput>;
  where?: InputMaybe<MeatsIncludesConnectionWhere>;
};

export type MeatsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MeatsSort objects to sort Meats by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MeatsSort>>;
};

export type MeatsRelationInput = {
  includes?: InputMaybe<Array<MeatsIncludesCreateFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<MeatsStylesPairsWithCreateFieldInput>>;
};

/** Fields to sort Meats by. The order in which sorts are applied is not guaranteed when specifying many fields in one MeatsSort object. */
export type MeatsSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  types?: InputMaybe<SortDirection>;
};

export type MeatsStylesPairsWithAggregateInput = {
  AND?: InputMaybe<Array<MeatsStylesPairsWithAggregateInput>>;
  NOT?: InputMaybe<MeatsStylesPairsWithAggregateInput>;
  OR?: InputMaybe<Array<MeatsStylesPairsWithAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MeatsStylesPairsWithNodeAggregationWhereInput>;
};

export type MeatsStylesPairsWithConnectFieldInput = {
  connect?: InputMaybe<Array<StylesConnectInput>>;
  edge: PairsWithPropertiesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<StylesConnectWhere>;
};

export type MeatsStylesPairsWithConnection = {
  __typename?: 'MeatsStylesPairsWithConnection';
  edges: Array<MeatsStylesPairsWithRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MeatsStylesPairsWithConnectionSort = {
  edge?: InputMaybe<PairsWithPropertiesSort>;
  node?: InputMaybe<StylesSort>;
};

export type MeatsStylesPairsWithConnectionWhere = {
  AND?: InputMaybe<Array<MeatsStylesPairsWithConnectionWhere>>;
  NOT?: InputMaybe<MeatsStylesPairsWithConnectionWhere>;
  OR?: InputMaybe<Array<MeatsStylesPairsWithConnectionWhere>>;
  edge?: InputMaybe<PairsWithPropertiesWhere>;
  node?: InputMaybe<StylesWhere>;
};

export type MeatsStylesPairsWithCreateFieldInput = {
  edge: PairsWithPropertiesCreateInput;
  node: StylesCreateInput;
};

export type MeatsStylesPairsWithDeleteFieldInput = {
  delete?: InputMaybe<StylesDeleteInput>;
  where?: InputMaybe<MeatsStylesPairsWithConnectionWhere>;
};

export type MeatsStylesPairsWithDisconnectFieldInput = {
  disconnect?: InputMaybe<StylesDisconnectInput>;
  where?: InputMaybe<MeatsStylesPairsWithConnectionWhere>;
};

export type MeatsStylesPairsWithFieldInput = {
  connect?: InputMaybe<Array<MeatsStylesPairsWithConnectFieldInput>>;
  create?: InputMaybe<Array<MeatsStylesPairsWithCreateFieldInput>>;
};

export type MeatsStylesPairsWithNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MeatsStylesPairsWithNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MeatsStylesPairsWithNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MeatsStylesPairsWithNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  typeId_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type MeatsStylesPairsWithRelationship = {
  __typename?: 'MeatsStylesPairsWithRelationship';
  cursor: Scalars['String']['output'];
  node: Styles;
  properties: PairsWithProperties;
};

export type MeatsStylesPairsWithUpdateConnectionInput = {
  edge?: InputMaybe<PairsWithPropertiesUpdateInput>;
  node?: InputMaybe<StylesUpdateInput>;
};

export type MeatsStylesPairsWithUpdateFieldInput = {
  connect?: InputMaybe<Array<MeatsStylesPairsWithConnectFieldInput>>;
  create?: InputMaybe<Array<MeatsStylesPairsWithCreateFieldInput>>;
  delete?: InputMaybe<Array<MeatsStylesPairsWithDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MeatsStylesPairsWithDisconnectFieldInput>>;
  update?: InputMaybe<MeatsStylesPairsWithUpdateConnectionInput>;
  where?: InputMaybe<MeatsStylesPairsWithConnectionWhere>;
};

export type MeatsStylesStylesPairsWithAggregationSelection = {
  __typename?: 'MeatsStylesStylesPairsWithAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MeatsStylesStylesPairsWithNodeAggregateSelection>;
};

export type MeatsStylesStylesPairsWithNodeAggregateSelection = {
  __typename?: 'MeatsStylesStylesPairsWithNodeAggregateSelection';
  description: StringAggregateSelection;
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  typeId: BigIntAggregateSelection;
};

export type MeatsUpdateInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  id_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  includes?: InputMaybe<Array<MeatsIncludesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  stylesPairsWith?: InputMaybe<Array<MeatsStylesPairsWithUpdateFieldInput>>;
  types?: InputMaybe<Scalars['String']['input']>;
};

export type MeatsWhere = {
  AND?: InputMaybe<Array<MeatsWhere>>;
  NOT?: InputMaybe<MeatsWhere>;
  OR?: InputMaybe<Array<MeatsWhere>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  includesAggregate?: InputMaybe<MeatsIncludesAggregateInput>;
  /** Return Meats where all of the related MeatsIncludesConnections match this filter */
  includesConnection_ALL?: InputMaybe<MeatsIncludesConnectionWhere>;
  /** Return Meats where none of the related MeatsIncludesConnections match this filter */
  includesConnection_NONE?: InputMaybe<MeatsIncludesConnectionWhere>;
  /** Return Meats where one of the related MeatsIncludesConnections match this filter */
  includesConnection_SINGLE?: InputMaybe<MeatsIncludesConnectionWhere>;
  /** Return Meats where some of the related MeatsIncludesConnections match this filter */
  includesConnection_SOME?: InputMaybe<MeatsIncludesConnectionWhere>;
  /** Return Meats where all of the related Foods match this filter */
  includes_ALL?: InputMaybe<FoodsWhere>;
  /** Return Meats where none of the related Foods match this filter */
  includes_NONE?: InputMaybe<FoodsWhere>;
  /** Return Meats where one of the related Foods match this filter */
  includes_SINGLE?: InputMaybe<FoodsWhere>;
  /** Return Meats where some of the related Foods match this filter */
  includes_SOME?: InputMaybe<FoodsWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  stylesPairsWithAggregate?: InputMaybe<MeatsStylesPairsWithAggregateInput>;
  /** Return Meats where all of the related MeatsStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_ALL?: InputMaybe<MeatsStylesPairsWithConnectionWhere>;
  /** Return Meats where none of the related MeatsStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_NONE?: InputMaybe<MeatsStylesPairsWithConnectionWhere>;
  /** Return Meats where one of the related MeatsStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_SINGLE?: InputMaybe<MeatsStylesPairsWithConnectionWhere>;
  /** Return Meats where some of the related MeatsStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_SOME?: InputMaybe<MeatsStylesPairsWithConnectionWhere>;
  /** Return Meats where all of the related Styles match this filter */
  stylesPairsWith_ALL?: InputMaybe<StylesWhere>;
  /** Return Meats where none of the related Styles match this filter */
  stylesPairsWith_NONE?: InputMaybe<StylesWhere>;
  /** Return Meats where one of the related Styles match this filter */
  stylesPairsWith_SINGLE?: InputMaybe<StylesWhere>;
  /** Return Meats where some of the related Styles match this filter */
  stylesPairsWith_SOME?: InputMaybe<StylesWhere>;
  types?: InputMaybe<Scalars['String']['input']>;
  types_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  types_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  types_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  types_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCheeses: CreateCheesesMutationResponse;
  createFlavors: CreateFlavorsMutationResponse;
  createFoods: CreateFoodsMutationResponse;
  createHerbsAndSpices: CreateHerbsAndSpicesMutationResponse;
  createMeats: CreateMeatsMutationResponse;
  createStyles: CreateStylesMutationResponse;
  createTypes: CreateTypesMutationResponse;
  createVarietals: CreateVarietalsMutationResponse;
  createVegetables: CreateVegetablesMutationResponse;
  deleteCheeses: DeleteInfo;
  deleteFlavors: DeleteInfo;
  deleteFoods: DeleteInfo;
  deleteHerbsAndSpices: DeleteInfo;
  deleteMeats: DeleteInfo;
  deleteStyles: DeleteInfo;
  deleteTypes: DeleteInfo;
  deleteVarietals: DeleteInfo;
  deleteVegetables: DeleteInfo;
  updateCheeses: UpdateCheesesMutationResponse;
  updateFlavors: UpdateFlavorsMutationResponse;
  updateFoods: UpdateFoodsMutationResponse;
  updateHerbsAndSpices: UpdateHerbsAndSpicesMutationResponse;
  updateMeats: UpdateMeatsMutationResponse;
  updateStyles: UpdateStylesMutationResponse;
  updateTypes: UpdateTypesMutationResponse;
  updateVarietals: UpdateVarietalsMutationResponse;
  updateVegetables: UpdateVegetablesMutationResponse;
};


export type MutationCreateCheesesArgs = {
  input: Array<CheesesCreateInput>;
};


export type MutationCreateFlavorsArgs = {
  input: Array<FlavorsCreateInput>;
};


export type MutationCreateFoodsArgs = {
  input: Array<FoodsCreateInput>;
};


export type MutationCreateHerbsAndSpicesArgs = {
  input: Array<Herbs_And_SpicesCreateInput>;
};


export type MutationCreateMeatsArgs = {
  input: Array<MeatsCreateInput>;
};


export type MutationCreateStylesArgs = {
  input: Array<StylesCreateInput>;
};


export type MutationCreateTypesArgs = {
  input: Array<TypesCreateInput>;
};


export type MutationCreateVarietalsArgs = {
  input: Array<VarietalsCreateInput>;
};


export type MutationCreateVegetablesArgs = {
  input: Array<VegetablesCreateInput>;
};


export type MutationDeleteCheesesArgs = {
  delete?: InputMaybe<CheesesDeleteInput>;
  where?: InputMaybe<CheesesWhere>;
};


export type MutationDeleteFlavorsArgs = {
  delete?: InputMaybe<FlavorsDeleteInput>;
  where?: InputMaybe<FlavorsWhere>;
};


export type MutationDeleteFoodsArgs = {
  delete?: InputMaybe<FoodsDeleteInput>;
  where?: InputMaybe<FoodsWhere>;
};


export type MutationDeleteHerbsAndSpicesArgs = {
  delete?: InputMaybe<Herbs_And_SpicesDeleteInput>;
  where?: InputMaybe<Herbs_And_SpicesWhere>;
};


export type MutationDeleteMeatsArgs = {
  delete?: InputMaybe<MeatsDeleteInput>;
  where?: InputMaybe<MeatsWhere>;
};


export type MutationDeleteStylesArgs = {
  delete?: InputMaybe<StylesDeleteInput>;
  where?: InputMaybe<StylesWhere>;
};


export type MutationDeleteTypesArgs = {
  delete?: InputMaybe<TypesDeleteInput>;
  where?: InputMaybe<TypesWhere>;
};


export type MutationDeleteVarietalsArgs = {
  delete?: InputMaybe<VarietalsDeleteInput>;
  where?: InputMaybe<VarietalsWhere>;
};


export type MutationDeleteVegetablesArgs = {
  delete?: InputMaybe<VegetablesDeleteInput>;
  where?: InputMaybe<VegetablesWhere>;
};


export type MutationUpdateCheesesArgs = {
  connect?: InputMaybe<CheesesConnectInput>;
  create?: InputMaybe<CheesesRelationInput>;
  delete?: InputMaybe<CheesesDeleteInput>;
  disconnect?: InputMaybe<CheesesDisconnectInput>;
  update?: InputMaybe<CheesesUpdateInput>;
  where?: InputMaybe<CheesesWhere>;
};


export type MutationUpdateFlavorsArgs = {
  connect?: InputMaybe<FlavorsConnectInput>;
  create?: InputMaybe<FlavorsRelationInput>;
  delete?: InputMaybe<FlavorsDeleteInput>;
  disconnect?: InputMaybe<FlavorsDisconnectInput>;
  update?: InputMaybe<FlavorsUpdateInput>;
  where?: InputMaybe<FlavorsWhere>;
};


export type MutationUpdateFoodsArgs = {
  connect?: InputMaybe<FoodsConnectInput>;
  create?: InputMaybe<FoodsRelationInput>;
  delete?: InputMaybe<FoodsDeleteInput>;
  disconnect?: InputMaybe<FoodsDisconnectInput>;
  update?: InputMaybe<FoodsUpdateInput>;
  where?: InputMaybe<FoodsWhere>;
};


export type MutationUpdateHerbsAndSpicesArgs = {
  connect?: InputMaybe<Herbs_And_SpicesConnectInput>;
  create?: InputMaybe<Herbs_And_SpicesRelationInput>;
  delete?: InputMaybe<Herbs_And_SpicesDeleteInput>;
  disconnect?: InputMaybe<Herbs_And_SpicesDisconnectInput>;
  update?: InputMaybe<Herbs_And_SpicesUpdateInput>;
  where?: InputMaybe<Herbs_And_SpicesWhere>;
};


export type MutationUpdateMeatsArgs = {
  connect?: InputMaybe<MeatsConnectInput>;
  create?: InputMaybe<MeatsRelationInput>;
  delete?: InputMaybe<MeatsDeleteInput>;
  disconnect?: InputMaybe<MeatsDisconnectInput>;
  update?: InputMaybe<MeatsUpdateInput>;
  where?: InputMaybe<MeatsWhere>;
};


export type MutationUpdateStylesArgs = {
  connect?: InputMaybe<StylesConnectInput>;
  create?: InputMaybe<StylesRelationInput>;
  delete?: InputMaybe<StylesDeleteInput>;
  disconnect?: InputMaybe<StylesDisconnectInput>;
  update?: InputMaybe<StylesUpdateInput>;
  where?: InputMaybe<StylesWhere>;
};


export type MutationUpdateTypesArgs = {
  connect?: InputMaybe<TypesConnectInput>;
  create?: InputMaybe<TypesRelationInput>;
  delete?: InputMaybe<TypesDeleteInput>;
  disconnect?: InputMaybe<TypesDisconnectInput>;
  update?: InputMaybe<TypesUpdateInput>;
  where?: InputMaybe<TypesWhere>;
};


export type MutationUpdateVarietalsArgs = {
  connect?: InputMaybe<VarietalsConnectInput>;
  create?: InputMaybe<VarietalsRelationInput>;
  delete?: InputMaybe<VarietalsDeleteInput>;
  disconnect?: InputMaybe<VarietalsDisconnectInput>;
  update?: InputMaybe<VarietalsUpdateInput>;
  where?: InputMaybe<VarietalsWhere>;
};


export type MutationUpdateVegetablesArgs = {
  connect?: InputMaybe<VegetablesConnectInput>;
  create?: InputMaybe<VegetablesRelationInput>;
  delete?: InputMaybe<VegetablesDeleteInput>;
  disconnect?: InputMaybe<VegetablesDisconnectInput>;
  update?: InputMaybe<VegetablesUpdateInput>;
  where?: InputMaybe<VegetablesWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/**
 * The edge properties for the following fields:
 * * Cheeses.stylesPairsWith
 * * Herbs_and_Spices.stylesPairsWith
 * * Meats.stylesPairsWith
 * * Styles.pairsWithCheeses
 * * Styles.pairsWithHerbsAndSpices
 * * Styles.pairsWithMeats
 * * Styles.pairsWithVegetables
 * * Vegetables.stylesPairsWith
 */
export type PairsWithProperties = {
  __typename?: 'PairsWithProperties';
  isExcellent: Scalars['Boolean']['output'];
};

export type PairsWithPropertiesCreateInput = {
  isExcellent: Scalars['Boolean']['input'];
};

export type PairsWithPropertiesSort = {
  isExcellent?: InputMaybe<SortDirection>;
};

export type PairsWithPropertiesUpdateInput = {
  isExcellent?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PairsWithPropertiesWhere = {
  AND?: InputMaybe<Array<PairsWithPropertiesWhere>>;
  NOT?: InputMaybe<PairsWithPropertiesWhere>;
  OR?: InputMaybe<Array<PairsWithPropertiesWhere>>;
  isExcellent?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
  __typename?: 'Query';
  cheeses: Array<Cheeses>;
  cheesesAggregate: CheesesAggregateSelection;
  cheesesConnection: CheesesConnection;
  flavors: Array<Flavors>;
  flavorsAggregate: FlavorsAggregateSelection;
  flavorsConnection: FlavorsConnection;
  foods: Array<Foods>;
  foodsAggregate: FoodsAggregateSelection;
  foodsConnection: FoodsConnection;
  herbsAndSpices: Array<Herbs_And_Spices>;
  herbsAndSpicesAggregate: Herbs_And_SpicesAggregateSelection;
  herbsAndSpicesConnection: HerbsAndSpicesConnection;
  meats: Array<Meats>;
  meatsAggregate: MeatsAggregateSelection;
  meatsConnection: MeatsConnection;
  styles: Array<Styles>;
  stylesAggregate: StylesAggregateSelection;
  stylesConnection: StylesConnection;
  types: Array<Types>;
  typesAggregate: TypesAggregateSelection;
  typesConnection: TypesConnection;
  varietals: Array<Varietals>;
  varietalsAggregate: VarietalsAggregateSelection;
  varietalsConnection: VarietalsConnection;
  vegetables: Array<Vegetables>;
  vegetablesAggregate: VegetablesAggregateSelection;
  vegetablesConnection: VegetablesConnection;
};


export type QueryCheesesArgs = {
  options?: InputMaybe<CheesesOptions>;
  where?: InputMaybe<CheesesWhere>;
};


export type QueryCheesesAggregateArgs = {
  where?: InputMaybe<CheesesWhere>;
};


export type QueryCheesesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CheesesSort>>>;
  where?: InputMaybe<CheesesWhere>;
};


export type QueryFlavorsArgs = {
  options?: InputMaybe<FlavorsOptions>;
  where?: InputMaybe<FlavorsWhere>;
};


export type QueryFlavorsAggregateArgs = {
  where?: InputMaybe<FlavorsWhere>;
};


export type QueryFlavorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FlavorsSort>>>;
  where?: InputMaybe<FlavorsWhere>;
};


export type QueryFoodsArgs = {
  options?: InputMaybe<FoodsOptions>;
  where?: InputMaybe<FoodsWhere>;
};


export type QueryFoodsAggregateArgs = {
  where?: InputMaybe<FoodsWhere>;
};


export type QueryFoodsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FoodsSort>>>;
  where?: InputMaybe<FoodsWhere>;
};


export type QueryHerbsAndSpicesArgs = {
  options?: InputMaybe<Herbs_And_SpicesOptions>;
  where?: InputMaybe<Herbs_And_SpicesWhere>;
};


export type QueryHerbsAndSpicesAggregateArgs = {
  where?: InputMaybe<Herbs_And_SpicesWhere>;
};


export type QueryHerbsAndSpicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Herbs_And_SpicesSort>>>;
  where?: InputMaybe<Herbs_And_SpicesWhere>;
};


export type QueryMeatsArgs = {
  options?: InputMaybe<MeatsOptions>;
  where?: InputMaybe<MeatsWhere>;
};


export type QueryMeatsAggregateArgs = {
  where?: InputMaybe<MeatsWhere>;
};


export type QueryMeatsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MeatsSort>>>;
  where?: InputMaybe<MeatsWhere>;
};


export type QueryStylesArgs = {
  options?: InputMaybe<StylesOptions>;
  where?: InputMaybe<StylesWhere>;
};


export type QueryStylesAggregateArgs = {
  where?: InputMaybe<StylesWhere>;
};


export type QueryStylesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StylesSort>>>;
  where?: InputMaybe<StylesWhere>;
};


export type QueryTypesArgs = {
  options?: InputMaybe<TypesOptions>;
  where?: InputMaybe<TypesWhere>;
};


export type QueryTypesAggregateArgs = {
  where?: InputMaybe<TypesWhere>;
};


export type QueryTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TypesSort>>>;
  where?: InputMaybe<TypesWhere>;
};


export type QueryVarietalsArgs = {
  options?: InputMaybe<VarietalsOptions>;
  where?: InputMaybe<VarietalsWhere>;
};


export type QueryVarietalsAggregateArgs = {
  where?: InputMaybe<VarietalsWhere>;
};


export type QueryVarietalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<VarietalsSort>>>;
  where?: InputMaybe<VarietalsWhere>;
};


export type QueryVegetablesArgs = {
  options?: InputMaybe<VegetablesOptions>;
  where?: InputMaybe<VegetablesWhere>;
};


export type QueryVegetablesAggregateArgs = {
  where?: InputMaybe<VegetablesWhere>;
};


export type QueryVegetablesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<VegetablesSort>>>;
  where?: InputMaybe<VegetablesWhere>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type Styles = {
  __typename?: 'Styles';
  description: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  includes: Array<Types>;
  includesAggregate?: Maybe<StylesTypesIncludesAggregationSelection>;
  includesConnection: StylesIncludesConnection;
  name: Scalars['String']['output'];
  pairsWithCheeses: Array<Cheeses>;
  pairsWithCheesesAggregate?: Maybe<StylesCheesesPairsWithCheesesAggregationSelection>;
  pairsWithCheesesConnection: StylesPairsWithCheesesConnection;
  pairsWithHerbsAndSpices: Array<Herbs_And_Spices>;
  pairsWithHerbsAndSpicesAggregate?: Maybe<StylesHerbs_And_SpicesPairsWithHerbsAndSpicesAggregationSelection>;
  pairsWithHerbsAndSpicesConnection: StylesPairsWithHerbsAndSpicesConnection;
  pairsWithMeats: Array<Meats>;
  pairsWithMeatsAggregate?: Maybe<StylesMeatsPairsWithMeatsAggregationSelection>;
  pairsWithMeatsConnection: StylesPairsWithMeatsConnection;
  pairsWithVegetables: Array<Vegetables>;
  pairsWithVegetablesAggregate?: Maybe<StylesVegetablesPairsWithVegetablesAggregationSelection>;
  pairsWithVegetablesConnection: StylesPairsWithVegetablesConnection;
  typeId: Scalars['BigInt']['output'];
  varietals: Array<Varietals>;
  varietalsAggregate?: Maybe<StylesVarietalsVarietalsAggregationSelection>;
  varietalsConnection: StylesVarietalsConnection;
};


export type StylesIncludesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypesOptions>;
  where?: InputMaybe<TypesWhere>;
};


export type StylesIncludesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypesWhere>;
};


export type StylesIncludesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StylesIncludesConnectionSort>>;
  where?: InputMaybe<StylesIncludesConnectionWhere>;
};


export type StylesPairsWithCheesesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CheesesOptions>;
  where?: InputMaybe<CheesesWhere>;
};


export type StylesPairsWithCheesesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CheesesWhere>;
};


export type StylesPairsWithCheesesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StylesPairsWithCheesesConnectionSort>>;
  where?: InputMaybe<StylesPairsWithCheesesConnectionWhere>;
};


export type StylesPairsWithHerbsAndSpicesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Herbs_And_SpicesOptions>;
  where?: InputMaybe<Herbs_And_SpicesWhere>;
};


export type StylesPairsWithHerbsAndSpicesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Herbs_And_SpicesWhere>;
};


export type StylesPairsWithHerbsAndSpicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesConnectionSort>>;
  where?: InputMaybe<StylesPairsWithHerbsAndSpicesConnectionWhere>;
};


export type StylesPairsWithMeatsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MeatsOptions>;
  where?: InputMaybe<MeatsWhere>;
};


export type StylesPairsWithMeatsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MeatsWhere>;
};


export type StylesPairsWithMeatsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StylesPairsWithMeatsConnectionSort>>;
  where?: InputMaybe<StylesPairsWithMeatsConnectionWhere>;
};


export type StylesPairsWithVegetablesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VegetablesOptions>;
  where?: InputMaybe<VegetablesWhere>;
};


export type StylesPairsWithVegetablesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VegetablesWhere>;
};


export type StylesPairsWithVegetablesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StylesPairsWithVegetablesConnectionSort>>;
  where?: InputMaybe<StylesPairsWithVegetablesConnectionWhere>;
};


export type StylesVarietalsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<VarietalsOptions>;
  where?: InputMaybe<VarietalsWhere>;
};


export type StylesVarietalsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VarietalsWhere>;
};


export type StylesVarietalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<StylesVarietalsConnectionSort>>;
  where?: InputMaybe<StylesVarietalsConnectionWhere>;
};

export type StylesAggregateSelection = {
  __typename?: 'StylesAggregateSelection';
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  typeId: BigIntAggregateSelection;
};

export type StylesCheesesPairsWithCheesesAggregationSelection = {
  __typename?: 'StylesCheesesPairsWithCheesesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<StylesCheesesPairsWithCheesesNodeAggregateSelection>;
};

export type StylesCheesesPairsWithCheesesNodeAggregateSelection = {
  __typename?: 'StylesCheesesPairsWithCheesesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type StylesConnectInput = {
  includes?: InputMaybe<Array<StylesIncludesConnectFieldInput>>;
  pairsWithCheeses?: InputMaybe<Array<StylesPairsWithCheesesConnectFieldInput>>;
  pairsWithHerbsAndSpices?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesConnectFieldInput>>;
  pairsWithMeats?: InputMaybe<Array<StylesPairsWithMeatsConnectFieldInput>>;
  pairsWithVegetables?: InputMaybe<Array<StylesPairsWithVegetablesConnectFieldInput>>;
  varietals?: InputMaybe<Array<StylesVarietalsConnectFieldInput>>;
};

export type StylesConnectWhere = {
  node: StylesWhere;
};

export type StylesConnection = {
  __typename?: 'StylesConnection';
  edges: Array<StylesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StylesCreateInput = {
  description: Scalars['String']['input'];
  id: Scalars['BigInt']['input'];
  includes?: InputMaybe<StylesIncludesFieldInput>;
  name: Scalars['String']['input'];
  pairsWithCheeses?: InputMaybe<StylesPairsWithCheesesFieldInput>;
  pairsWithHerbsAndSpices?: InputMaybe<StylesPairsWithHerbsAndSpicesFieldInput>;
  pairsWithMeats?: InputMaybe<StylesPairsWithMeatsFieldInput>;
  pairsWithVegetables?: InputMaybe<StylesPairsWithVegetablesFieldInput>;
  typeId: Scalars['BigInt']['input'];
  varietals?: InputMaybe<StylesVarietalsFieldInput>;
};

export type StylesDeleteInput = {
  includes?: InputMaybe<Array<StylesIncludesDeleteFieldInput>>;
  pairsWithCheeses?: InputMaybe<Array<StylesPairsWithCheesesDeleteFieldInput>>;
  pairsWithHerbsAndSpices?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesDeleteFieldInput>>;
  pairsWithMeats?: InputMaybe<Array<StylesPairsWithMeatsDeleteFieldInput>>;
  pairsWithVegetables?: InputMaybe<Array<StylesPairsWithVegetablesDeleteFieldInput>>;
  varietals?: InputMaybe<Array<StylesVarietalsDeleteFieldInput>>;
};

export type StylesDisconnectInput = {
  includes?: InputMaybe<Array<StylesIncludesDisconnectFieldInput>>;
  pairsWithCheeses?: InputMaybe<Array<StylesPairsWithCheesesDisconnectFieldInput>>;
  pairsWithHerbsAndSpices?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesDisconnectFieldInput>>;
  pairsWithMeats?: InputMaybe<Array<StylesPairsWithMeatsDisconnectFieldInput>>;
  pairsWithVegetables?: InputMaybe<Array<StylesPairsWithVegetablesDisconnectFieldInput>>;
  varietals?: InputMaybe<Array<StylesVarietalsDisconnectFieldInput>>;
};

export type StylesEdge = {
  __typename?: 'StylesEdge';
  cursor: Scalars['String']['output'];
  node: Styles;
};

export type StylesHerbs_And_SpicesPairsWithHerbsAndSpicesAggregationSelection = {
  __typename?: 'StylesHerbs_and_SpicesPairsWithHerbsAndSpicesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<StylesHerbs_And_SpicesPairsWithHerbsAndSpicesNodeAggregateSelection>;
};

export type StylesHerbs_And_SpicesPairsWithHerbsAndSpicesNodeAggregateSelection = {
  __typename?: 'StylesHerbs_and_SpicesPairsWithHerbsAndSpicesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type StylesIncludesAggregateInput = {
  AND?: InputMaybe<Array<StylesIncludesAggregateInput>>;
  NOT?: InputMaybe<StylesIncludesAggregateInput>;
  OR?: InputMaybe<Array<StylesIncludesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<StylesIncludesNodeAggregationWhereInput>;
};

export type StylesIncludesConnectFieldInput = {
  connect?: InputMaybe<Array<TypesConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypesConnectWhere>;
};

export type StylesIncludesConnection = {
  __typename?: 'StylesIncludesConnection';
  edges: Array<StylesIncludesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StylesIncludesConnectionSort = {
  node?: InputMaybe<TypesSort>;
};

export type StylesIncludesConnectionWhere = {
  AND?: InputMaybe<Array<StylesIncludesConnectionWhere>>;
  NOT?: InputMaybe<StylesIncludesConnectionWhere>;
  OR?: InputMaybe<Array<StylesIncludesConnectionWhere>>;
  node?: InputMaybe<TypesWhere>;
};

export type StylesIncludesCreateFieldInput = {
  node: TypesCreateInput;
};

export type StylesIncludesDeleteFieldInput = {
  delete?: InputMaybe<TypesDeleteInput>;
  where?: InputMaybe<StylesIncludesConnectionWhere>;
};

export type StylesIncludesDisconnectFieldInput = {
  disconnect?: InputMaybe<TypesDisconnectInput>;
  where?: InputMaybe<StylesIncludesConnectionWhere>;
};

export type StylesIncludesFieldInput = {
  connect?: InputMaybe<Array<StylesIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<StylesIncludesCreateFieldInput>>;
};

export type StylesIncludesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StylesIncludesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StylesIncludesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StylesIncludesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type StylesIncludesRelationship = {
  __typename?: 'StylesIncludesRelationship';
  cursor: Scalars['String']['output'];
  node: Types;
};

export type StylesIncludesUpdateConnectionInput = {
  node?: InputMaybe<TypesUpdateInput>;
};

export type StylesIncludesUpdateFieldInput = {
  connect?: InputMaybe<Array<StylesIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<StylesIncludesCreateFieldInput>>;
  delete?: InputMaybe<Array<StylesIncludesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StylesIncludesDisconnectFieldInput>>;
  update?: InputMaybe<StylesIncludesUpdateConnectionInput>;
  where?: InputMaybe<StylesIncludesConnectionWhere>;
};

export type StylesMeatsPairsWithMeatsAggregationSelection = {
  __typename?: 'StylesMeatsPairsWithMeatsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<StylesMeatsPairsWithMeatsNodeAggregateSelection>;
};

export type StylesMeatsPairsWithMeatsNodeAggregateSelection = {
  __typename?: 'StylesMeatsPairsWithMeatsNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type StylesOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more StylesSort objects to sort Styles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StylesSort>>;
};

export type StylesPairsWithCheesesAggregateInput = {
  AND?: InputMaybe<Array<StylesPairsWithCheesesAggregateInput>>;
  NOT?: InputMaybe<StylesPairsWithCheesesAggregateInput>;
  OR?: InputMaybe<Array<StylesPairsWithCheesesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<StylesPairsWithCheesesNodeAggregationWhereInput>;
};

export type StylesPairsWithCheesesConnectFieldInput = {
  connect?: InputMaybe<Array<CheesesConnectInput>>;
  edge: PairsWithPropertiesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CheesesConnectWhere>;
};

export type StylesPairsWithCheesesConnection = {
  __typename?: 'StylesPairsWithCheesesConnection';
  edges: Array<StylesPairsWithCheesesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StylesPairsWithCheesesConnectionSort = {
  edge?: InputMaybe<PairsWithPropertiesSort>;
  node?: InputMaybe<CheesesSort>;
};

export type StylesPairsWithCheesesConnectionWhere = {
  AND?: InputMaybe<Array<StylesPairsWithCheesesConnectionWhere>>;
  NOT?: InputMaybe<StylesPairsWithCheesesConnectionWhere>;
  OR?: InputMaybe<Array<StylesPairsWithCheesesConnectionWhere>>;
  edge?: InputMaybe<PairsWithPropertiesWhere>;
  node?: InputMaybe<CheesesWhere>;
};

export type StylesPairsWithCheesesCreateFieldInput = {
  edge: PairsWithPropertiesCreateInput;
  node: CheesesCreateInput;
};

export type StylesPairsWithCheesesDeleteFieldInput = {
  delete?: InputMaybe<CheesesDeleteInput>;
  where?: InputMaybe<StylesPairsWithCheesesConnectionWhere>;
};

export type StylesPairsWithCheesesDisconnectFieldInput = {
  disconnect?: InputMaybe<CheesesDisconnectInput>;
  where?: InputMaybe<StylesPairsWithCheesesConnectionWhere>;
};

export type StylesPairsWithCheesesFieldInput = {
  connect?: InputMaybe<Array<StylesPairsWithCheesesConnectFieldInput>>;
  create?: InputMaybe<Array<StylesPairsWithCheesesCreateFieldInput>>;
};

export type StylesPairsWithCheesesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StylesPairsWithCheesesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StylesPairsWithCheesesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StylesPairsWithCheesesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  types_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type StylesPairsWithCheesesRelationship = {
  __typename?: 'StylesPairsWithCheesesRelationship';
  cursor: Scalars['String']['output'];
  node: Cheeses;
  properties: PairsWithProperties;
};

export type StylesPairsWithCheesesUpdateConnectionInput = {
  edge?: InputMaybe<PairsWithPropertiesUpdateInput>;
  node?: InputMaybe<CheesesUpdateInput>;
};

export type StylesPairsWithCheesesUpdateFieldInput = {
  connect?: InputMaybe<Array<StylesPairsWithCheesesConnectFieldInput>>;
  create?: InputMaybe<Array<StylesPairsWithCheesesCreateFieldInput>>;
  delete?: InputMaybe<Array<StylesPairsWithCheesesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StylesPairsWithCheesesDisconnectFieldInput>>;
  update?: InputMaybe<StylesPairsWithCheesesUpdateConnectionInput>;
  where?: InputMaybe<StylesPairsWithCheesesConnectionWhere>;
};

export type StylesPairsWithHerbsAndSpicesAggregateInput = {
  AND?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesAggregateInput>>;
  NOT?: InputMaybe<StylesPairsWithHerbsAndSpicesAggregateInput>;
  OR?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<StylesPairsWithHerbsAndSpicesNodeAggregationWhereInput>;
};

export type StylesPairsWithHerbsAndSpicesConnectFieldInput = {
  connect?: InputMaybe<Array<Herbs_And_SpicesConnectInput>>;
  edge: PairsWithPropertiesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<Herbs_And_SpicesConnectWhere>;
};

export type StylesPairsWithHerbsAndSpicesConnection = {
  __typename?: 'StylesPairsWithHerbsAndSpicesConnection';
  edges: Array<StylesPairsWithHerbsAndSpicesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StylesPairsWithHerbsAndSpicesConnectionSort = {
  edge?: InputMaybe<PairsWithPropertiesSort>;
  node?: InputMaybe<Herbs_And_SpicesSort>;
};

export type StylesPairsWithHerbsAndSpicesConnectionWhere = {
  AND?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesConnectionWhere>>;
  NOT?: InputMaybe<StylesPairsWithHerbsAndSpicesConnectionWhere>;
  OR?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesConnectionWhere>>;
  edge?: InputMaybe<PairsWithPropertiesWhere>;
  node?: InputMaybe<Herbs_And_SpicesWhere>;
};

export type StylesPairsWithHerbsAndSpicesCreateFieldInput = {
  edge: PairsWithPropertiesCreateInput;
  node: Herbs_And_SpicesCreateInput;
};

export type StylesPairsWithHerbsAndSpicesDeleteFieldInput = {
  delete?: InputMaybe<Herbs_And_SpicesDeleteInput>;
  where?: InputMaybe<StylesPairsWithHerbsAndSpicesConnectionWhere>;
};

export type StylesPairsWithHerbsAndSpicesDisconnectFieldInput = {
  disconnect?: InputMaybe<Herbs_And_SpicesDisconnectInput>;
  where?: InputMaybe<StylesPairsWithHerbsAndSpicesConnectionWhere>;
};

export type StylesPairsWithHerbsAndSpicesFieldInput = {
  connect?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesConnectFieldInput>>;
  create?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesCreateFieldInput>>;
};

export type StylesPairsWithHerbsAndSpicesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StylesPairsWithHerbsAndSpicesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  types_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type StylesPairsWithHerbsAndSpicesRelationship = {
  __typename?: 'StylesPairsWithHerbsAndSpicesRelationship';
  cursor: Scalars['String']['output'];
  node: Herbs_And_Spices;
  properties: PairsWithProperties;
};

export type StylesPairsWithHerbsAndSpicesUpdateConnectionInput = {
  edge?: InputMaybe<PairsWithPropertiesUpdateInput>;
  node?: InputMaybe<Herbs_And_SpicesUpdateInput>;
};

export type StylesPairsWithHerbsAndSpicesUpdateFieldInput = {
  connect?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesConnectFieldInput>>;
  create?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesCreateFieldInput>>;
  delete?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesDisconnectFieldInput>>;
  update?: InputMaybe<StylesPairsWithHerbsAndSpicesUpdateConnectionInput>;
  where?: InputMaybe<StylesPairsWithHerbsAndSpicesConnectionWhere>;
};

export type StylesPairsWithMeatsAggregateInput = {
  AND?: InputMaybe<Array<StylesPairsWithMeatsAggregateInput>>;
  NOT?: InputMaybe<StylesPairsWithMeatsAggregateInput>;
  OR?: InputMaybe<Array<StylesPairsWithMeatsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<StylesPairsWithMeatsNodeAggregationWhereInput>;
};

export type StylesPairsWithMeatsConnectFieldInput = {
  connect?: InputMaybe<Array<MeatsConnectInput>>;
  edge: PairsWithPropertiesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MeatsConnectWhere>;
};

export type StylesPairsWithMeatsConnection = {
  __typename?: 'StylesPairsWithMeatsConnection';
  edges: Array<StylesPairsWithMeatsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StylesPairsWithMeatsConnectionSort = {
  edge?: InputMaybe<PairsWithPropertiesSort>;
  node?: InputMaybe<MeatsSort>;
};

export type StylesPairsWithMeatsConnectionWhere = {
  AND?: InputMaybe<Array<StylesPairsWithMeatsConnectionWhere>>;
  NOT?: InputMaybe<StylesPairsWithMeatsConnectionWhere>;
  OR?: InputMaybe<Array<StylesPairsWithMeatsConnectionWhere>>;
  edge?: InputMaybe<PairsWithPropertiesWhere>;
  node?: InputMaybe<MeatsWhere>;
};

export type StylesPairsWithMeatsCreateFieldInput = {
  edge: PairsWithPropertiesCreateInput;
  node: MeatsCreateInput;
};

export type StylesPairsWithMeatsDeleteFieldInput = {
  delete?: InputMaybe<MeatsDeleteInput>;
  where?: InputMaybe<StylesPairsWithMeatsConnectionWhere>;
};

export type StylesPairsWithMeatsDisconnectFieldInput = {
  disconnect?: InputMaybe<MeatsDisconnectInput>;
  where?: InputMaybe<StylesPairsWithMeatsConnectionWhere>;
};

export type StylesPairsWithMeatsFieldInput = {
  connect?: InputMaybe<Array<StylesPairsWithMeatsConnectFieldInput>>;
  create?: InputMaybe<Array<StylesPairsWithMeatsCreateFieldInput>>;
};

export type StylesPairsWithMeatsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StylesPairsWithMeatsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StylesPairsWithMeatsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StylesPairsWithMeatsNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  types_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type StylesPairsWithMeatsRelationship = {
  __typename?: 'StylesPairsWithMeatsRelationship';
  cursor: Scalars['String']['output'];
  node: Meats;
  properties: PairsWithProperties;
};

export type StylesPairsWithMeatsUpdateConnectionInput = {
  edge?: InputMaybe<PairsWithPropertiesUpdateInput>;
  node?: InputMaybe<MeatsUpdateInput>;
};

export type StylesPairsWithMeatsUpdateFieldInput = {
  connect?: InputMaybe<Array<StylesPairsWithMeatsConnectFieldInput>>;
  create?: InputMaybe<Array<StylesPairsWithMeatsCreateFieldInput>>;
  delete?: InputMaybe<Array<StylesPairsWithMeatsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StylesPairsWithMeatsDisconnectFieldInput>>;
  update?: InputMaybe<StylesPairsWithMeatsUpdateConnectionInput>;
  where?: InputMaybe<StylesPairsWithMeatsConnectionWhere>;
};

export type StylesPairsWithVegetablesAggregateInput = {
  AND?: InputMaybe<Array<StylesPairsWithVegetablesAggregateInput>>;
  NOT?: InputMaybe<StylesPairsWithVegetablesAggregateInput>;
  OR?: InputMaybe<Array<StylesPairsWithVegetablesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<StylesPairsWithVegetablesNodeAggregationWhereInput>;
};

export type StylesPairsWithVegetablesConnectFieldInput = {
  connect?: InputMaybe<Array<VegetablesConnectInput>>;
  edge: PairsWithPropertiesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VegetablesConnectWhere>;
};

export type StylesPairsWithVegetablesConnection = {
  __typename?: 'StylesPairsWithVegetablesConnection';
  edges: Array<StylesPairsWithVegetablesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StylesPairsWithVegetablesConnectionSort = {
  edge?: InputMaybe<PairsWithPropertiesSort>;
  node?: InputMaybe<VegetablesSort>;
};

export type StylesPairsWithVegetablesConnectionWhere = {
  AND?: InputMaybe<Array<StylesPairsWithVegetablesConnectionWhere>>;
  NOT?: InputMaybe<StylesPairsWithVegetablesConnectionWhere>;
  OR?: InputMaybe<Array<StylesPairsWithVegetablesConnectionWhere>>;
  edge?: InputMaybe<PairsWithPropertiesWhere>;
  node?: InputMaybe<VegetablesWhere>;
};

export type StylesPairsWithVegetablesCreateFieldInput = {
  edge: PairsWithPropertiesCreateInput;
  node: VegetablesCreateInput;
};

export type StylesPairsWithVegetablesDeleteFieldInput = {
  delete?: InputMaybe<VegetablesDeleteInput>;
  where?: InputMaybe<StylesPairsWithVegetablesConnectionWhere>;
};

export type StylesPairsWithVegetablesDisconnectFieldInput = {
  disconnect?: InputMaybe<VegetablesDisconnectInput>;
  where?: InputMaybe<StylesPairsWithVegetablesConnectionWhere>;
};

export type StylesPairsWithVegetablesFieldInput = {
  connect?: InputMaybe<Array<StylesPairsWithVegetablesConnectFieldInput>>;
  create?: InputMaybe<Array<StylesPairsWithVegetablesCreateFieldInput>>;
};

export type StylesPairsWithVegetablesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StylesPairsWithVegetablesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StylesPairsWithVegetablesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StylesPairsWithVegetablesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  types_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  types_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  types_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type StylesPairsWithVegetablesRelationship = {
  __typename?: 'StylesPairsWithVegetablesRelationship';
  cursor: Scalars['String']['output'];
  node: Vegetables;
  properties: PairsWithProperties;
};

export type StylesPairsWithVegetablesUpdateConnectionInput = {
  edge?: InputMaybe<PairsWithPropertiesUpdateInput>;
  node?: InputMaybe<VegetablesUpdateInput>;
};

export type StylesPairsWithVegetablesUpdateFieldInput = {
  connect?: InputMaybe<Array<StylesPairsWithVegetablesConnectFieldInput>>;
  create?: InputMaybe<Array<StylesPairsWithVegetablesCreateFieldInput>>;
  delete?: InputMaybe<Array<StylesPairsWithVegetablesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StylesPairsWithVegetablesDisconnectFieldInput>>;
  update?: InputMaybe<StylesPairsWithVegetablesUpdateConnectionInput>;
  where?: InputMaybe<StylesPairsWithVegetablesConnectionWhere>;
};

export type StylesRelationInput = {
  includes?: InputMaybe<Array<StylesIncludesCreateFieldInput>>;
  pairsWithCheeses?: InputMaybe<Array<StylesPairsWithCheesesCreateFieldInput>>;
  pairsWithHerbsAndSpices?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesCreateFieldInput>>;
  pairsWithMeats?: InputMaybe<Array<StylesPairsWithMeatsCreateFieldInput>>;
  pairsWithVegetables?: InputMaybe<Array<StylesPairsWithVegetablesCreateFieldInput>>;
  varietals?: InputMaybe<Array<StylesVarietalsCreateFieldInput>>;
};

/** Fields to sort Styles by. The order in which sorts are applied is not guaranteed when specifying many fields in one StylesSort object. */
export type StylesSort = {
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  typeId?: InputMaybe<SortDirection>;
};

export type StylesTypesIncludesAggregationSelection = {
  __typename?: 'StylesTypesIncludesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<StylesTypesIncludesNodeAggregateSelection>;
};

export type StylesTypesIncludesNodeAggregateSelection = {
  __typename?: 'StylesTypesIncludesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type StylesUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  id_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  includes?: InputMaybe<Array<StylesIncludesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  pairsWithCheeses?: InputMaybe<Array<StylesPairsWithCheesesUpdateFieldInput>>;
  pairsWithHerbsAndSpices?: InputMaybe<Array<StylesPairsWithHerbsAndSpicesUpdateFieldInput>>;
  pairsWithMeats?: InputMaybe<Array<StylesPairsWithMeatsUpdateFieldInput>>;
  pairsWithVegetables?: InputMaybe<Array<StylesPairsWithVegetablesUpdateFieldInput>>;
  typeId?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  varietals?: InputMaybe<Array<StylesVarietalsUpdateFieldInput>>;
};

export type StylesVarietalsAggregateInput = {
  AND?: InputMaybe<Array<StylesVarietalsAggregateInput>>;
  NOT?: InputMaybe<StylesVarietalsAggregateInput>;
  OR?: InputMaybe<Array<StylesVarietalsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<StylesVarietalsNodeAggregationWhereInput>;
};

export type StylesVarietalsConnectFieldInput = {
  connect?: InputMaybe<Array<VarietalsConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<VarietalsConnectWhere>;
};

export type StylesVarietalsConnection = {
  __typename?: 'StylesVarietalsConnection';
  edges: Array<StylesVarietalsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StylesVarietalsConnectionSort = {
  node?: InputMaybe<VarietalsSort>;
};

export type StylesVarietalsConnectionWhere = {
  AND?: InputMaybe<Array<StylesVarietalsConnectionWhere>>;
  NOT?: InputMaybe<StylesVarietalsConnectionWhere>;
  OR?: InputMaybe<Array<StylesVarietalsConnectionWhere>>;
  node?: InputMaybe<VarietalsWhere>;
};

export type StylesVarietalsCreateFieldInput = {
  node: VarietalsCreateInput;
};

export type StylesVarietalsDeleteFieldInput = {
  delete?: InputMaybe<VarietalsDeleteInput>;
  where?: InputMaybe<StylesVarietalsConnectionWhere>;
};

export type StylesVarietalsDisconnectFieldInput = {
  disconnect?: InputMaybe<VarietalsDisconnectInput>;
  where?: InputMaybe<StylesVarietalsConnectionWhere>;
};

export type StylesVarietalsFieldInput = {
  connect?: InputMaybe<Array<StylesVarietalsConnectFieldInput>>;
  create?: InputMaybe<Array<StylesVarietalsCreateFieldInput>>;
};

export type StylesVarietalsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StylesVarietalsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StylesVarietalsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StylesVarietalsNodeAggregationWhereInput>>;
  aka_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  aka_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  aka_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  aka_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  aka_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  aka_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  aka_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  aka_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  aka_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  aka_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  aka_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  aka_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  aka_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  aka_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  aka_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  altGlass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  altGlass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  altGlass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  altGlass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  altGlass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  altGlass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  altGlass_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  altGlass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  altGlass_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  altGlass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  altGlass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  altGlass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  altGlass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  altGlass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  altGlass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  drinkByDateYears_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  glass_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  glass_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  glass_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  glass_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  glass_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  glass_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  glass_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  glass_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  glass_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  glass_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  glass_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  glass_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  glass_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  glass_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  glass_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  origin_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  origin_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  origin_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  origin_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  origin_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  origin_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  origin_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  origin_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  origin_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  origin_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  origin_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  origin_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  origin_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  origin_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  origin_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  servingTemp_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  servingTemp_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  servingTemp_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  servingTemp_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  servingTemp_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  servingTemp_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type StylesVarietalsRelationship = {
  __typename?: 'StylesVarietalsRelationship';
  cursor: Scalars['String']['output'];
  node: Varietals;
};

export type StylesVarietalsUpdateConnectionInput = {
  node?: InputMaybe<VarietalsUpdateInput>;
};

export type StylesVarietalsUpdateFieldInput = {
  connect?: InputMaybe<Array<StylesVarietalsConnectFieldInput>>;
  create?: InputMaybe<Array<StylesVarietalsCreateFieldInput>>;
  delete?: InputMaybe<Array<StylesVarietalsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StylesVarietalsDisconnectFieldInput>>;
  update?: InputMaybe<StylesVarietalsUpdateConnectionInput>;
  where?: InputMaybe<StylesVarietalsConnectionWhere>;
};

export type StylesVarietalsVarietalsAggregationSelection = {
  __typename?: 'StylesVarietalsVarietalsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<StylesVarietalsVarietalsNodeAggregateSelection>;
};

export type StylesVarietalsVarietalsNodeAggregateSelection = {
  __typename?: 'StylesVarietalsVarietalsNodeAggregateSelection';
  aka: StringAggregateSelection;
  altGlass: StringAggregateSelection;
  drinkByDateYears: BigIntAggregateSelection;
  glass: StringAggregateSelection;
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  origin: StringAggregateSelection;
  servingTemp: StringAggregateSelection;
};

export type StylesVegetablesPairsWithVegetablesAggregationSelection = {
  __typename?: 'StylesVegetablesPairsWithVegetablesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<StylesVegetablesPairsWithVegetablesNodeAggregateSelection>;
};

export type StylesVegetablesPairsWithVegetablesNodeAggregateSelection = {
  __typename?: 'StylesVegetablesPairsWithVegetablesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type StylesWhere = {
  AND?: InputMaybe<Array<StylesWhere>>;
  NOT?: InputMaybe<StylesWhere>;
  OR?: InputMaybe<Array<StylesWhere>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  includesAggregate?: InputMaybe<StylesIncludesAggregateInput>;
  /** Return Styles where all of the related StylesIncludesConnections match this filter */
  includesConnection_ALL?: InputMaybe<StylesIncludesConnectionWhere>;
  /** Return Styles where none of the related StylesIncludesConnections match this filter */
  includesConnection_NONE?: InputMaybe<StylesIncludesConnectionWhere>;
  /** Return Styles where one of the related StylesIncludesConnections match this filter */
  includesConnection_SINGLE?: InputMaybe<StylesIncludesConnectionWhere>;
  /** Return Styles where some of the related StylesIncludesConnections match this filter */
  includesConnection_SOME?: InputMaybe<StylesIncludesConnectionWhere>;
  /** Return Styles where all of the related Types match this filter */
  includes_ALL?: InputMaybe<TypesWhere>;
  /** Return Styles where none of the related Types match this filter */
  includes_NONE?: InputMaybe<TypesWhere>;
  /** Return Styles where one of the related Types match this filter */
  includes_SINGLE?: InputMaybe<TypesWhere>;
  /** Return Styles where some of the related Types match this filter */
  includes_SOME?: InputMaybe<TypesWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  pairsWithCheesesAggregate?: InputMaybe<StylesPairsWithCheesesAggregateInput>;
  /** Return Styles where all of the related StylesPairsWithCheesesConnections match this filter */
  pairsWithCheesesConnection_ALL?: InputMaybe<StylesPairsWithCheesesConnectionWhere>;
  /** Return Styles where none of the related StylesPairsWithCheesesConnections match this filter */
  pairsWithCheesesConnection_NONE?: InputMaybe<StylesPairsWithCheesesConnectionWhere>;
  /** Return Styles where one of the related StylesPairsWithCheesesConnections match this filter */
  pairsWithCheesesConnection_SINGLE?: InputMaybe<StylesPairsWithCheesesConnectionWhere>;
  /** Return Styles where some of the related StylesPairsWithCheesesConnections match this filter */
  pairsWithCheesesConnection_SOME?: InputMaybe<StylesPairsWithCheesesConnectionWhere>;
  /** Return Styles where all of the related Cheeses match this filter */
  pairsWithCheeses_ALL?: InputMaybe<CheesesWhere>;
  /** Return Styles where none of the related Cheeses match this filter */
  pairsWithCheeses_NONE?: InputMaybe<CheesesWhere>;
  /** Return Styles where one of the related Cheeses match this filter */
  pairsWithCheeses_SINGLE?: InputMaybe<CheesesWhere>;
  /** Return Styles where some of the related Cheeses match this filter */
  pairsWithCheeses_SOME?: InputMaybe<CheesesWhere>;
  pairsWithHerbsAndSpicesAggregate?: InputMaybe<StylesPairsWithHerbsAndSpicesAggregateInput>;
  /** Return Styles where all of the related StylesPairsWithHerbsAndSpicesConnections match this filter */
  pairsWithHerbsAndSpicesConnection_ALL?: InputMaybe<StylesPairsWithHerbsAndSpicesConnectionWhere>;
  /** Return Styles where none of the related StylesPairsWithHerbsAndSpicesConnections match this filter */
  pairsWithHerbsAndSpicesConnection_NONE?: InputMaybe<StylesPairsWithHerbsAndSpicesConnectionWhere>;
  /** Return Styles where one of the related StylesPairsWithHerbsAndSpicesConnections match this filter */
  pairsWithHerbsAndSpicesConnection_SINGLE?: InputMaybe<StylesPairsWithHerbsAndSpicesConnectionWhere>;
  /** Return Styles where some of the related StylesPairsWithHerbsAndSpicesConnections match this filter */
  pairsWithHerbsAndSpicesConnection_SOME?: InputMaybe<StylesPairsWithHerbsAndSpicesConnectionWhere>;
  /** Return Styles where all of the related Herbs_and_Spices match this filter */
  pairsWithHerbsAndSpices_ALL?: InputMaybe<Herbs_And_SpicesWhere>;
  /** Return Styles where none of the related Herbs_and_Spices match this filter */
  pairsWithHerbsAndSpices_NONE?: InputMaybe<Herbs_And_SpicesWhere>;
  /** Return Styles where one of the related Herbs_and_Spices match this filter */
  pairsWithHerbsAndSpices_SINGLE?: InputMaybe<Herbs_And_SpicesWhere>;
  /** Return Styles where some of the related Herbs_and_Spices match this filter */
  pairsWithHerbsAndSpices_SOME?: InputMaybe<Herbs_And_SpicesWhere>;
  pairsWithMeatsAggregate?: InputMaybe<StylesPairsWithMeatsAggregateInput>;
  /** Return Styles where all of the related StylesPairsWithMeatsConnections match this filter */
  pairsWithMeatsConnection_ALL?: InputMaybe<StylesPairsWithMeatsConnectionWhere>;
  /** Return Styles where none of the related StylesPairsWithMeatsConnections match this filter */
  pairsWithMeatsConnection_NONE?: InputMaybe<StylesPairsWithMeatsConnectionWhere>;
  /** Return Styles where one of the related StylesPairsWithMeatsConnections match this filter */
  pairsWithMeatsConnection_SINGLE?: InputMaybe<StylesPairsWithMeatsConnectionWhere>;
  /** Return Styles where some of the related StylesPairsWithMeatsConnections match this filter */
  pairsWithMeatsConnection_SOME?: InputMaybe<StylesPairsWithMeatsConnectionWhere>;
  /** Return Styles where all of the related Meats match this filter */
  pairsWithMeats_ALL?: InputMaybe<MeatsWhere>;
  /** Return Styles where none of the related Meats match this filter */
  pairsWithMeats_NONE?: InputMaybe<MeatsWhere>;
  /** Return Styles where one of the related Meats match this filter */
  pairsWithMeats_SINGLE?: InputMaybe<MeatsWhere>;
  /** Return Styles where some of the related Meats match this filter */
  pairsWithMeats_SOME?: InputMaybe<MeatsWhere>;
  pairsWithVegetablesAggregate?: InputMaybe<StylesPairsWithVegetablesAggregateInput>;
  /** Return Styles where all of the related StylesPairsWithVegetablesConnections match this filter */
  pairsWithVegetablesConnection_ALL?: InputMaybe<StylesPairsWithVegetablesConnectionWhere>;
  /** Return Styles where none of the related StylesPairsWithVegetablesConnections match this filter */
  pairsWithVegetablesConnection_NONE?: InputMaybe<StylesPairsWithVegetablesConnectionWhere>;
  /** Return Styles where one of the related StylesPairsWithVegetablesConnections match this filter */
  pairsWithVegetablesConnection_SINGLE?: InputMaybe<StylesPairsWithVegetablesConnectionWhere>;
  /** Return Styles where some of the related StylesPairsWithVegetablesConnections match this filter */
  pairsWithVegetablesConnection_SOME?: InputMaybe<StylesPairsWithVegetablesConnectionWhere>;
  /** Return Styles where all of the related Vegetables match this filter */
  pairsWithVegetables_ALL?: InputMaybe<VegetablesWhere>;
  /** Return Styles where none of the related Vegetables match this filter */
  pairsWithVegetables_NONE?: InputMaybe<VegetablesWhere>;
  /** Return Styles where one of the related Vegetables match this filter */
  pairsWithVegetables_SINGLE?: InputMaybe<VegetablesWhere>;
  /** Return Styles where some of the related Vegetables match this filter */
  pairsWithVegetables_SOME?: InputMaybe<VegetablesWhere>;
  typeId?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  typeId_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  varietalsAggregate?: InputMaybe<StylesVarietalsAggregateInput>;
  /** Return Styles where all of the related StylesVarietalsConnections match this filter */
  varietalsConnection_ALL?: InputMaybe<StylesVarietalsConnectionWhere>;
  /** Return Styles where none of the related StylesVarietalsConnections match this filter */
  varietalsConnection_NONE?: InputMaybe<StylesVarietalsConnectionWhere>;
  /** Return Styles where one of the related StylesVarietalsConnections match this filter */
  varietalsConnection_SINGLE?: InputMaybe<StylesVarietalsConnectionWhere>;
  /** Return Styles where some of the related StylesVarietalsConnections match this filter */
  varietalsConnection_SOME?: InputMaybe<StylesVarietalsConnectionWhere>;
  /** Return Styles where all of the related Varietals match this filter */
  varietals_ALL?: InputMaybe<VarietalsWhere>;
  /** Return Styles where none of the related Varietals match this filter */
  varietals_NONE?: InputMaybe<VarietalsWhere>;
  /** Return Styles where one of the related Varietals match this filter */
  varietals_SINGLE?: InputMaybe<VarietalsWhere>;
  /** Return Styles where some of the related Varietals match this filter */
  varietals_SOME?: InputMaybe<VarietalsWhere>;
};

export type Types = {
  __typename?: 'Types';
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  styles: Array<Styles>;
  stylesAggregate?: Maybe<TypesStylesStylesAggregationSelection>;
  stylesConnection: TypesStylesConnection;
};


export type TypesStylesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<StylesOptions>;
  where?: InputMaybe<StylesWhere>;
};


export type TypesStylesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StylesWhere>;
};


export type TypesStylesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypesStylesConnectionSort>>;
  where?: InputMaybe<TypesStylesConnectionWhere>;
};

export type TypesAggregateSelection = {
  __typename?: 'TypesAggregateSelection';
  count: Scalars['Int']['output'];
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type TypesConnectInput = {
  styles?: InputMaybe<Array<TypesStylesConnectFieldInput>>;
};

export type TypesConnectWhere = {
  node: TypesWhere;
};

export type TypesConnection = {
  __typename?: 'TypesConnection';
  edges: Array<TypesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypesCreateInput = {
  id: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  styles?: InputMaybe<TypesStylesFieldInput>;
};

export type TypesDeleteInput = {
  styles?: InputMaybe<Array<TypesStylesDeleteFieldInput>>;
};

export type TypesDisconnectInput = {
  styles?: InputMaybe<Array<TypesStylesDisconnectFieldInput>>;
};

export type TypesEdge = {
  __typename?: 'TypesEdge';
  cursor: Scalars['String']['output'];
  node: Types;
};

export type TypesOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TypesSort objects to sort Types by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypesSort>>;
};

export type TypesRelationInput = {
  styles?: InputMaybe<Array<TypesStylesCreateFieldInput>>;
};

/** Fields to sort Types by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypesSort object. */
export type TypesSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type TypesStylesAggregateInput = {
  AND?: InputMaybe<Array<TypesStylesAggregateInput>>;
  NOT?: InputMaybe<TypesStylesAggregateInput>;
  OR?: InputMaybe<Array<TypesStylesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypesStylesNodeAggregationWhereInput>;
};

export type TypesStylesConnectFieldInput = {
  connect?: InputMaybe<Array<StylesConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<StylesConnectWhere>;
};

export type TypesStylesConnection = {
  __typename?: 'TypesStylesConnection';
  edges: Array<TypesStylesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypesStylesConnectionSort = {
  node?: InputMaybe<StylesSort>;
};

export type TypesStylesConnectionWhere = {
  AND?: InputMaybe<Array<TypesStylesConnectionWhere>>;
  NOT?: InputMaybe<TypesStylesConnectionWhere>;
  OR?: InputMaybe<Array<TypesStylesConnectionWhere>>;
  node?: InputMaybe<StylesWhere>;
};

export type TypesStylesCreateFieldInput = {
  node: StylesCreateInput;
};

export type TypesStylesDeleteFieldInput = {
  delete?: InputMaybe<StylesDeleteInput>;
  where?: InputMaybe<TypesStylesConnectionWhere>;
};

export type TypesStylesDisconnectFieldInput = {
  disconnect?: InputMaybe<StylesDisconnectInput>;
  where?: InputMaybe<TypesStylesConnectionWhere>;
};

export type TypesStylesFieldInput = {
  connect?: InputMaybe<Array<TypesStylesConnectFieldInput>>;
  create?: InputMaybe<Array<TypesStylesCreateFieldInput>>;
};

export type TypesStylesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypesStylesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypesStylesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypesStylesNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  typeId_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type TypesStylesRelationship = {
  __typename?: 'TypesStylesRelationship';
  cursor: Scalars['String']['output'];
  node: Styles;
};

export type TypesStylesStylesAggregationSelection = {
  __typename?: 'TypesStylesStylesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypesStylesStylesNodeAggregateSelection>;
};

export type TypesStylesStylesNodeAggregateSelection = {
  __typename?: 'TypesStylesStylesNodeAggregateSelection';
  description: StringAggregateSelection;
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  typeId: BigIntAggregateSelection;
};

export type TypesStylesUpdateConnectionInput = {
  node?: InputMaybe<StylesUpdateInput>;
};

export type TypesStylesUpdateFieldInput = {
  connect?: InputMaybe<Array<TypesStylesConnectFieldInput>>;
  create?: InputMaybe<Array<TypesStylesCreateFieldInput>>;
  delete?: InputMaybe<Array<TypesStylesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TypesStylesDisconnectFieldInput>>;
  update?: InputMaybe<TypesStylesUpdateConnectionInput>;
  where?: InputMaybe<TypesStylesConnectionWhere>;
};

export type TypesUpdateInput = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  id_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  styles?: InputMaybe<Array<TypesStylesUpdateFieldInput>>;
};

export type TypesWhere = {
  AND?: InputMaybe<Array<TypesWhere>>;
  NOT?: InputMaybe<TypesWhere>;
  OR?: InputMaybe<Array<TypesWhere>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  stylesAggregate?: InputMaybe<TypesStylesAggregateInput>;
  /** Return Types where all of the related TypesStylesConnections match this filter */
  stylesConnection_ALL?: InputMaybe<TypesStylesConnectionWhere>;
  /** Return Types where none of the related TypesStylesConnections match this filter */
  stylesConnection_NONE?: InputMaybe<TypesStylesConnectionWhere>;
  /** Return Types where one of the related TypesStylesConnections match this filter */
  stylesConnection_SINGLE?: InputMaybe<TypesStylesConnectionWhere>;
  /** Return Types where some of the related TypesStylesConnections match this filter */
  stylesConnection_SOME?: InputMaybe<TypesStylesConnectionWhere>;
  /** Return Types where all of the related Styles match this filter */
  styles_ALL?: InputMaybe<StylesWhere>;
  /** Return Types where none of the related Styles match this filter */
  styles_NONE?: InputMaybe<StylesWhere>;
  /** Return Types where one of the related Styles match this filter */
  styles_SINGLE?: InputMaybe<StylesWhere>;
  /** Return Types where some of the related Styles match this filter */
  styles_SOME?: InputMaybe<StylesWhere>;
};

export type UpdateCheesesMutationResponse = {
  __typename?: 'UpdateCheesesMutationResponse';
  cheeses: Array<Cheeses>;
  info: UpdateInfo;
};

export type UpdateFlavorsMutationResponse = {
  __typename?: 'UpdateFlavorsMutationResponse';
  flavors: Array<Flavors>;
  info: UpdateInfo;
};

export type UpdateFoodsMutationResponse = {
  __typename?: 'UpdateFoodsMutationResponse';
  foods: Array<Foods>;
  info: UpdateInfo;
};

export type UpdateHerbsAndSpicesMutationResponse = {
  __typename?: 'UpdateHerbsAndSpicesMutationResponse';
  herbsAndSpices: Array<Herbs_And_Spices>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateMeatsMutationResponse = {
  __typename?: 'UpdateMeatsMutationResponse';
  info: UpdateInfo;
  meats: Array<Meats>;
};

export type UpdateStylesMutationResponse = {
  __typename?: 'UpdateStylesMutationResponse';
  info: UpdateInfo;
  styles: Array<Styles>;
};

export type UpdateTypesMutationResponse = {
  __typename?: 'UpdateTypesMutationResponse';
  info: UpdateInfo;
  types: Array<Types>;
};

export type UpdateVarietalsMutationResponse = {
  __typename?: 'UpdateVarietalsMutationResponse';
  info: UpdateInfo;
  varietals: Array<Varietals>;
};

export type UpdateVegetablesMutationResponse = {
  __typename?: 'UpdateVegetablesMutationResponse';
  info: UpdateInfo;
  vegetables: Array<Vegetables>;
};

export type Varietals = {
  __typename?: 'Varietals';
  aka?: Maybe<Scalars['String']['output']>;
  altGlass?: Maybe<Scalars['String']['output']>;
  drinkByDateYears: Scalars['BigInt']['output'];
  glass: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  includes: Array<Styles>;
  includesAggregate?: Maybe<VarietalsStylesIncludesAggregationSelection>;
  includesConnection: VarietalsIncludesConnection;
  name: Scalars['String']['output'];
  origin?: Maybe<Scalars['String']['output']>;
  servingTemp: Scalars['String']['output'];
  tastesLikeFlavors: Array<Flavors>;
  tastesLikeFlavorsAggregate?: Maybe<VarietalsFlavorsTastesLikeFlavorsAggregationSelection>;
  tastesLikeFlavorsConnection: VarietalsTastesLikeFlavorsConnection;
};


export type VarietalsIncludesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<StylesOptions>;
  where?: InputMaybe<StylesWhere>;
};


export type VarietalsIncludesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StylesWhere>;
};


export type VarietalsIncludesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VarietalsIncludesConnectionSort>>;
  where?: InputMaybe<VarietalsIncludesConnectionWhere>;
};


export type VarietalsTastesLikeFlavorsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FlavorsOptions>;
  where?: InputMaybe<FlavorsWhere>;
};


export type VarietalsTastesLikeFlavorsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FlavorsWhere>;
};


export type VarietalsTastesLikeFlavorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VarietalsTastesLikeFlavorsConnectionSort>>;
  where?: InputMaybe<VarietalsTastesLikeFlavorsConnectionWhere>;
};

export type VarietalsAggregateSelection = {
  __typename?: 'VarietalsAggregateSelection';
  aka: StringAggregateSelection;
  altGlass: StringAggregateSelection;
  count: Scalars['Int']['output'];
  drinkByDateYears: BigIntAggregateSelection;
  glass: StringAggregateSelection;
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  origin: StringAggregateSelection;
  servingTemp: StringAggregateSelection;
};

export type VarietalsConnectInput = {
  includes?: InputMaybe<Array<VarietalsIncludesConnectFieldInput>>;
  tastesLikeFlavors?: InputMaybe<Array<VarietalsTastesLikeFlavorsConnectFieldInput>>;
};

export type VarietalsConnectWhere = {
  node: VarietalsWhere;
};

export type VarietalsConnection = {
  __typename?: 'VarietalsConnection';
  edges: Array<VarietalsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VarietalsCreateInput = {
  aka?: InputMaybe<Scalars['String']['input']>;
  altGlass?: InputMaybe<Scalars['String']['input']>;
  drinkByDateYears: Scalars['BigInt']['input'];
  glass: Scalars['String']['input'];
  id: Scalars['BigInt']['input'];
  includes?: InputMaybe<VarietalsIncludesFieldInput>;
  name: Scalars['String']['input'];
  origin?: InputMaybe<Scalars['String']['input']>;
  servingTemp: Scalars['String']['input'];
  tastesLikeFlavors?: InputMaybe<VarietalsTastesLikeFlavorsFieldInput>;
};

export type VarietalsDeleteInput = {
  includes?: InputMaybe<Array<VarietalsIncludesDeleteFieldInput>>;
  tastesLikeFlavors?: InputMaybe<Array<VarietalsTastesLikeFlavorsDeleteFieldInput>>;
};

export type VarietalsDisconnectInput = {
  includes?: InputMaybe<Array<VarietalsIncludesDisconnectFieldInput>>;
  tastesLikeFlavors?: InputMaybe<Array<VarietalsTastesLikeFlavorsDisconnectFieldInput>>;
};

export type VarietalsEdge = {
  __typename?: 'VarietalsEdge';
  cursor: Scalars['String']['output'];
  node: Varietals;
};

export type VarietalsFlavorsTastesLikeFlavorsAggregationSelection = {
  __typename?: 'VarietalsFlavorsTastesLikeFlavorsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VarietalsFlavorsTastesLikeFlavorsNodeAggregateSelection>;
};

export type VarietalsFlavorsTastesLikeFlavorsNodeAggregateSelection = {
  __typename?: 'VarietalsFlavorsTastesLikeFlavorsNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type VarietalsIncludesAggregateInput = {
  AND?: InputMaybe<Array<VarietalsIncludesAggregateInput>>;
  NOT?: InputMaybe<VarietalsIncludesAggregateInput>;
  OR?: InputMaybe<Array<VarietalsIncludesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VarietalsIncludesNodeAggregationWhereInput>;
};

export type VarietalsIncludesConnectFieldInput = {
  connect?: InputMaybe<Array<StylesConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<StylesConnectWhere>;
};

export type VarietalsIncludesConnection = {
  __typename?: 'VarietalsIncludesConnection';
  edges: Array<VarietalsIncludesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VarietalsIncludesConnectionSort = {
  node?: InputMaybe<StylesSort>;
};

export type VarietalsIncludesConnectionWhere = {
  AND?: InputMaybe<Array<VarietalsIncludesConnectionWhere>>;
  NOT?: InputMaybe<VarietalsIncludesConnectionWhere>;
  OR?: InputMaybe<Array<VarietalsIncludesConnectionWhere>>;
  node?: InputMaybe<StylesWhere>;
};

export type VarietalsIncludesCreateFieldInput = {
  node: StylesCreateInput;
};

export type VarietalsIncludesDeleteFieldInput = {
  delete?: InputMaybe<StylesDeleteInput>;
  where?: InputMaybe<VarietalsIncludesConnectionWhere>;
};

export type VarietalsIncludesDisconnectFieldInput = {
  disconnect?: InputMaybe<StylesDisconnectInput>;
  where?: InputMaybe<VarietalsIncludesConnectionWhere>;
};

export type VarietalsIncludesFieldInput = {
  connect?: InputMaybe<Array<VarietalsIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<VarietalsIncludesCreateFieldInput>>;
};

export type VarietalsIncludesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VarietalsIncludesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VarietalsIncludesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VarietalsIncludesNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  typeId_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type VarietalsIncludesRelationship = {
  __typename?: 'VarietalsIncludesRelationship';
  cursor: Scalars['String']['output'];
  node: Styles;
};

export type VarietalsIncludesUpdateConnectionInput = {
  node?: InputMaybe<StylesUpdateInput>;
};

export type VarietalsIncludesUpdateFieldInput = {
  connect?: InputMaybe<Array<VarietalsIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<VarietalsIncludesCreateFieldInput>>;
  delete?: InputMaybe<Array<VarietalsIncludesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<VarietalsIncludesDisconnectFieldInput>>;
  update?: InputMaybe<VarietalsIncludesUpdateConnectionInput>;
  where?: InputMaybe<VarietalsIncludesConnectionWhere>;
};

export type VarietalsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more VarietalsSort objects to sort Varietals by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<VarietalsSort>>;
};

export type VarietalsRelationInput = {
  includes?: InputMaybe<Array<VarietalsIncludesCreateFieldInput>>;
  tastesLikeFlavors?: InputMaybe<Array<VarietalsTastesLikeFlavorsCreateFieldInput>>;
};

/** Fields to sort Varietals by. The order in which sorts are applied is not guaranteed when specifying many fields in one VarietalsSort object. */
export type VarietalsSort = {
  aka?: InputMaybe<SortDirection>;
  altGlass?: InputMaybe<SortDirection>;
  drinkByDateYears?: InputMaybe<SortDirection>;
  glass?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  origin?: InputMaybe<SortDirection>;
  servingTemp?: InputMaybe<SortDirection>;
};

export type VarietalsStylesIncludesAggregationSelection = {
  __typename?: 'VarietalsStylesIncludesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VarietalsStylesIncludesNodeAggregateSelection>;
};

export type VarietalsStylesIncludesNodeAggregateSelection = {
  __typename?: 'VarietalsStylesIncludesNodeAggregateSelection';
  description: StringAggregateSelection;
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  typeId: BigIntAggregateSelection;
};

export type VarietalsTastesLikeFlavorsAggregateInput = {
  AND?: InputMaybe<Array<VarietalsTastesLikeFlavorsAggregateInput>>;
  NOT?: InputMaybe<VarietalsTastesLikeFlavorsAggregateInput>;
  OR?: InputMaybe<Array<VarietalsTastesLikeFlavorsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VarietalsTastesLikeFlavorsNodeAggregationWhereInput>;
};

export type VarietalsTastesLikeFlavorsConnectFieldInput = {
  connect?: InputMaybe<Array<FlavorsConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FlavorsConnectWhere>;
};

export type VarietalsTastesLikeFlavorsConnection = {
  __typename?: 'VarietalsTastesLikeFlavorsConnection';
  edges: Array<VarietalsTastesLikeFlavorsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VarietalsTastesLikeFlavorsConnectionSort = {
  node?: InputMaybe<FlavorsSort>;
};

export type VarietalsTastesLikeFlavorsConnectionWhere = {
  AND?: InputMaybe<Array<VarietalsTastesLikeFlavorsConnectionWhere>>;
  NOT?: InputMaybe<VarietalsTastesLikeFlavorsConnectionWhere>;
  OR?: InputMaybe<Array<VarietalsTastesLikeFlavorsConnectionWhere>>;
  node?: InputMaybe<FlavorsWhere>;
};

export type VarietalsTastesLikeFlavorsCreateFieldInput = {
  node: FlavorsCreateInput;
};

export type VarietalsTastesLikeFlavorsDeleteFieldInput = {
  delete?: InputMaybe<FlavorsDeleteInput>;
  where?: InputMaybe<VarietalsTastesLikeFlavorsConnectionWhere>;
};

export type VarietalsTastesLikeFlavorsDisconnectFieldInput = {
  disconnect?: InputMaybe<FlavorsDisconnectInput>;
  where?: InputMaybe<VarietalsTastesLikeFlavorsConnectionWhere>;
};

export type VarietalsTastesLikeFlavorsFieldInput = {
  connect?: InputMaybe<Array<VarietalsTastesLikeFlavorsConnectFieldInput>>;
  create?: InputMaybe<Array<VarietalsTastesLikeFlavorsCreateFieldInput>>;
};

export type VarietalsTastesLikeFlavorsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VarietalsTastesLikeFlavorsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VarietalsTastesLikeFlavorsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VarietalsTastesLikeFlavorsNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VarietalsTastesLikeFlavorsRelationship = {
  __typename?: 'VarietalsTastesLikeFlavorsRelationship';
  cursor: Scalars['String']['output'];
  node: Flavors;
};

export type VarietalsTastesLikeFlavorsUpdateConnectionInput = {
  node?: InputMaybe<FlavorsUpdateInput>;
};

export type VarietalsTastesLikeFlavorsUpdateFieldInput = {
  connect?: InputMaybe<Array<VarietalsTastesLikeFlavorsConnectFieldInput>>;
  create?: InputMaybe<Array<VarietalsTastesLikeFlavorsCreateFieldInput>>;
  delete?: InputMaybe<Array<VarietalsTastesLikeFlavorsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<VarietalsTastesLikeFlavorsDisconnectFieldInput>>;
  update?: InputMaybe<VarietalsTastesLikeFlavorsUpdateConnectionInput>;
  where?: InputMaybe<VarietalsTastesLikeFlavorsConnectionWhere>;
};

export type VarietalsUpdateInput = {
  aka?: InputMaybe<Scalars['String']['input']>;
  altGlass?: InputMaybe<Scalars['String']['input']>;
  drinkByDateYears?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  glass?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  id_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  includes?: InputMaybe<Array<VarietalsIncludesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  servingTemp?: InputMaybe<Scalars['String']['input']>;
  tastesLikeFlavors?: InputMaybe<Array<VarietalsTastesLikeFlavorsUpdateFieldInput>>;
};

export type VarietalsWhere = {
  AND?: InputMaybe<Array<VarietalsWhere>>;
  NOT?: InputMaybe<VarietalsWhere>;
  OR?: InputMaybe<Array<VarietalsWhere>>;
  aka?: InputMaybe<Scalars['String']['input']>;
  aka_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  aka_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  aka_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aka_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  altGlass?: InputMaybe<Scalars['String']['input']>;
  altGlass_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  altGlass_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  altGlass_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altGlass_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  drinkByDateYears?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_GT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  drinkByDateYears_LT?: InputMaybe<Scalars['BigInt']['input']>;
  drinkByDateYears_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  glass?: InputMaybe<Scalars['String']['input']>;
  glass_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  glass_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  glass_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  glass_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  includesAggregate?: InputMaybe<VarietalsIncludesAggregateInput>;
  /** Return Varietals where all of the related VarietalsIncludesConnections match this filter */
  includesConnection_ALL?: InputMaybe<VarietalsIncludesConnectionWhere>;
  /** Return Varietals where none of the related VarietalsIncludesConnections match this filter */
  includesConnection_NONE?: InputMaybe<VarietalsIncludesConnectionWhere>;
  /** Return Varietals where one of the related VarietalsIncludesConnections match this filter */
  includesConnection_SINGLE?: InputMaybe<VarietalsIncludesConnectionWhere>;
  /** Return Varietals where some of the related VarietalsIncludesConnections match this filter */
  includesConnection_SOME?: InputMaybe<VarietalsIncludesConnectionWhere>;
  /** Return Varietals where all of the related Styles match this filter */
  includes_ALL?: InputMaybe<StylesWhere>;
  /** Return Varietals where none of the related Styles match this filter */
  includes_NONE?: InputMaybe<StylesWhere>;
  /** Return Varietals where one of the related Styles match this filter */
  includes_SINGLE?: InputMaybe<StylesWhere>;
  /** Return Varietals where some of the related Styles match this filter */
  includes_SOME?: InputMaybe<StylesWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  origin_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  origin_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  origin_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  origin_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  servingTemp?: InputMaybe<Scalars['String']['input']>;
  servingTemp_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  servingTemp_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  servingTemp_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  servingTemp_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  tastesLikeFlavorsAggregate?: InputMaybe<VarietalsTastesLikeFlavorsAggregateInput>;
  /** Return Varietals where all of the related VarietalsTastesLikeFlavorsConnections match this filter */
  tastesLikeFlavorsConnection_ALL?: InputMaybe<VarietalsTastesLikeFlavorsConnectionWhere>;
  /** Return Varietals where none of the related VarietalsTastesLikeFlavorsConnections match this filter */
  tastesLikeFlavorsConnection_NONE?: InputMaybe<VarietalsTastesLikeFlavorsConnectionWhere>;
  /** Return Varietals where one of the related VarietalsTastesLikeFlavorsConnections match this filter */
  tastesLikeFlavorsConnection_SINGLE?: InputMaybe<VarietalsTastesLikeFlavorsConnectionWhere>;
  /** Return Varietals where some of the related VarietalsTastesLikeFlavorsConnections match this filter */
  tastesLikeFlavorsConnection_SOME?: InputMaybe<VarietalsTastesLikeFlavorsConnectionWhere>;
  /** Return Varietals where all of the related Flavors match this filter */
  tastesLikeFlavors_ALL?: InputMaybe<FlavorsWhere>;
  /** Return Varietals where none of the related Flavors match this filter */
  tastesLikeFlavors_NONE?: InputMaybe<FlavorsWhere>;
  /** Return Varietals where one of the related Flavors match this filter */
  tastesLikeFlavors_SINGLE?: InputMaybe<FlavorsWhere>;
  /** Return Varietals where some of the related Flavors match this filter */
  tastesLikeFlavors_SOME?: InputMaybe<FlavorsWhere>;
};

export type Vegetables = {
  __typename?: 'Vegetables';
  foodsIncludes: Array<Foods>;
  foodsIncludesAggregate?: Maybe<VegetablesFoodsFoodsIncludesAggregationSelection>;
  foodsIncludesConnection: VegetablesFoodsIncludesConnection;
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  stylesPairsWith: Array<Styles>;
  stylesPairsWithAggregate?: Maybe<VegetablesStylesStylesPairsWithAggregationSelection>;
  stylesPairsWithConnection: VegetablesStylesPairsWithConnection;
  types: Scalars['String']['output'];
};


export type VegetablesFoodsIncludesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FoodsOptions>;
  where?: InputMaybe<FoodsWhere>;
};


export type VegetablesFoodsIncludesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FoodsWhere>;
};


export type VegetablesFoodsIncludesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VegetablesFoodsIncludesConnectionSort>>;
  where?: InputMaybe<VegetablesFoodsIncludesConnectionWhere>;
};


export type VegetablesStylesPairsWithArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<StylesOptions>;
  where?: InputMaybe<StylesWhere>;
};


export type VegetablesStylesPairsWithAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StylesWhere>;
};


export type VegetablesStylesPairsWithConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VegetablesStylesPairsWithConnectionSort>>;
  where?: InputMaybe<VegetablesStylesPairsWithConnectionWhere>;
};

export type VegetablesAggregateSelection = {
  __typename?: 'VegetablesAggregateSelection';
  count: Scalars['Int']['output'];
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  types: StringAggregateSelection;
};

export type VegetablesConnectInput = {
  foodsIncludes?: InputMaybe<Array<VegetablesFoodsIncludesConnectFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<VegetablesStylesPairsWithConnectFieldInput>>;
};

export type VegetablesConnectWhere = {
  node: VegetablesWhere;
};

export type VegetablesConnection = {
  __typename?: 'VegetablesConnection';
  edges: Array<VegetablesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VegetablesCreateInput = {
  foodsIncludes?: InputMaybe<VegetablesFoodsIncludesFieldInput>;
  id: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  stylesPairsWith?: InputMaybe<VegetablesStylesPairsWithFieldInput>;
  types: Scalars['String']['input'];
};

export type VegetablesDeleteInput = {
  foodsIncludes?: InputMaybe<Array<VegetablesFoodsIncludesDeleteFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<VegetablesStylesPairsWithDeleteFieldInput>>;
};

export type VegetablesDisconnectInput = {
  foodsIncludes?: InputMaybe<Array<VegetablesFoodsIncludesDisconnectFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<VegetablesStylesPairsWithDisconnectFieldInput>>;
};

export type VegetablesEdge = {
  __typename?: 'VegetablesEdge';
  cursor: Scalars['String']['output'];
  node: Vegetables;
};

export type VegetablesFoodsFoodsIncludesAggregationSelection = {
  __typename?: 'VegetablesFoodsFoodsIncludesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VegetablesFoodsFoodsIncludesNodeAggregateSelection>;
};

export type VegetablesFoodsFoodsIncludesNodeAggregateSelection = {
  __typename?: 'VegetablesFoodsFoodsIncludesNodeAggregateSelection';
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type VegetablesFoodsIncludesAggregateInput = {
  AND?: InputMaybe<Array<VegetablesFoodsIncludesAggregateInput>>;
  NOT?: InputMaybe<VegetablesFoodsIncludesAggregateInput>;
  OR?: InputMaybe<Array<VegetablesFoodsIncludesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VegetablesFoodsIncludesNodeAggregationWhereInput>;
};

export type VegetablesFoodsIncludesConnectFieldInput = {
  connect?: InputMaybe<Array<FoodsConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FoodsConnectWhere>;
};

export type VegetablesFoodsIncludesConnection = {
  __typename?: 'VegetablesFoodsIncludesConnection';
  edges: Array<VegetablesFoodsIncludesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VegetablesFoodsIncludesConnectionSort = {
  node?: InputMaybe<FoodsSort>;
};

export type VegetablesFoodsIncludesConnectionWhere = {
  AND?: InputMaybe<Array<VegetablesFoodsIncludesConnectionWhere>>;
  NOT?: InputMaybe<VegetablesFoodsIncludesConnectionWhere>;
  OR?: InputMaybe<Array<VegetablesFoodsIncludesConnectionWhere>>;
  node?: InputMaybe<FoodsWhere>;
};

export type VegetablesFoodsIncludesCreateFieldInput = {
  node: FoodsCreateInput;
};

export type VegetablesFoodsIncludesDeleteFieldInput = {
  delete?: InputMaybe<FoodsDeleteInput>;
  where?: InputMaybe<VegetablesFoodsIncludesConnectionWhere>;
};

export type VegetablesFoodsIncludesDisconnectFieldInput = {
  disconnect?: InputMaybe<FoodsDisconnectInput>;
  where?: InputMaybe<VegetablesFoodsIncludesConnectionWhere>;
};

export type VegetablesFoodsIncludesFieldInput = {
  connect?: InputMaybe<Array<VegetablesFoodsIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<VegetablesFoodsIncludesCreateFieldInput>>;
};

export type VegetablesFoodsIncludesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VegetablesFoodsIncludesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VegetablesFoodsIncludesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VegetablesFoodsIncludesNodeAggregationWhereInput>>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type VegetablesFoodsIncludesRelationship = {
  __typename?: 'VegetablesFoodsIncludesRelationship';
  cursor: Scalars['String']['output'];
  node: Foods;
};

export type VegetablesFoodsIncludesUpdateConnectionInput = {
  node?: InputMaybe<FoodsUpdateInput>;
};

export type VegetablesFoodsIncludesUpdateFieldInput = {
  connect?: InputMaybe<Array<VegetablesFoodsIncludesConnectFieldInput>>;
  create?: InputMaybe<Array<VegetablesFoodsIncludesCreateFieldInput>>;
  delete?: InputMaybe<Array<VegetablesFoodsIncludesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<VegetablesFoodsIncludesDisconnectFieldInput>>;
  update?: InputMaybe<VegetablesFoodsIncludesUpdateConnectionInput>;
  where?: InputMaybe<VegetablesFoodsIncludesConnectionWhere>;
};

export type VegetablesOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more VegetablesSort objects to sort Vegetables by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<VegetablesSort>>;
};

export type VegetablesRelationInput = {
  foodsIncludes?: InputMaybe<Array<VegetablesFoodsIncludesCreateFieldInput>>;
  stylesPairsWith?: InputMaybe<Array<VegetablesStylesPairsWithCreateFieldInput>>;
};

/** Fields to sort Vegetables by. The order in which sorts are applied is not guaranteed when specifying many fields in one VegetablesSort object. */
export type VegetablesSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  types?: InputMaybe<SortDirection>;
};

export type VegetablesStylesPairsWithAggregateInput = {
  AND?: InputMaybe<Array<VegetablesStylesPairsWithAggregateInput>>;
  NOT?: InputMaybe<VegetablesStylesPairsWithAggregateInput>;
  OR?: InputMaybe<Array<VegetablesStylesPairsWithAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<VegetablesStylesPairsWithNodeAggregationWhereInput>;
};

export type VegetablesStylesPairsWithConnectFieldInput = {
  connect?: InputMaybe<Array<StylesConnectInput>>;
  edge: PairsWithPropertiesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<StylesConnectWhere>;
};

export type VegetablesStylesPairsWithConnection = {
  __typename?: 'VegetablesStylesPairsWithConnection';
  edges: Array<VegetablesStylesPairsWithRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VegetablesStylesPairsWithConnectionSort = {
  edge?: InputMaybe<PairsWithPropertiesSort>;
  node?: InputMaybe<StylesSort>;
};

export type VegetablesStylesPairsWithConnectionWhere = {
  AND?: InputMaybe<Array<VegetablesStylesPairsWithConnectionWhere>>;
  NOT?: InputMaybe<VegetablesStylesPairsWithConnectionWhere>;
  OR?: InputMaybe<Array<VegetablesStylesPairsWithConnectionWhere>>;
  edge?: InputMaybe<PairsWithPropertiesWhere>;
  node?: InputMaybe<StylesWhere>;
};

export type VegetablesStylesPairsWithCreateFieldInput = {
  edge: PairsWithPropertiesCreateInput;
  node: StylesCreateInput;
};

export type VegetablesStylesPairsWithDeleteFieldInput = {
  delete?: InputMaybe<StylesDeleteInput>;
  where?: InputMaybe<VegetablesStylesPairsWithConnectionWhere>;
};

export type VegetablesStylesPairsWithDisconnectFieldInput = {
  disconnect?: InputMaybe<StylesDisconnectInput>;
  where?: InputMaybe<VegetablesStylesPairsWithConnectionWhere>;
};

export type VegetablesStylesPairsWithFieldInput = {
  connect?: InputMaybe<Array<VegetablesStylesPairsWithConnectFieldInput>>;
  create?: InputMaybe<Array<VegetablesStylesPairsWithCreateFieldInput>>;
};

export type VegetablesStylesPairsWithNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<VegetablesStylesPairsWithNodeAggregationWhereInput>>;
  NOT?: InputMaybe<VegetablesStylesPairsWithNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<VegetablesStylesPairsWithNodeAggregationWhereInput>>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  typeId_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  typeId_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type VegetablesStylesPairsWithRelationship = {
  __typename?: 'VegetablesStylesPairsWithRelationship';
  cursor: Scalars['String']['output'];
  node: Styles;
  properties: PairsWithProperties;
};

export type VegetablesStylesPairsWithUpdateConnectionInput = {
  edge?: InputMaybe<PairsWithPropertiesUpdateInput>;
  node?: InputMaybe<StylesUpdateInput>;
};

export type VegetablesStylesPairsWithUpdateFieldInput = {
  connect?: InputMaybe<Array<VegetablesStylesPairsWithConnectFieldInput>>;
  create?: InputMaybe<Array<VegetablesStylesPairsWithCreateFieldInput>>;
  delete?: InputMaybe<Array<VegetablesStylesPairsWithDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<VegetablesStylesPairsWithDisconnectFieldInput>>;
  update?: InputMaybe<VegetablesStylesPairsWithUpdateConnectionInput>;
  where?: InputMaybe<VegetablesStylesPairsWithConnectionWhere>;
};

export type VegetablesStylesStylesPairsWithAggregationSelection = {
  __typename?: 'VegetablesStylesStylesPairsWithAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<VegetablesStylesStylesPairsWithNodeAggregateSelection>;
};

export type VegetablesStylesStylesPairsWithNodeAggregateSelection = {
  __typename?: 'VegetablesStylesStylesPairsWithNodeAggregateSelection';
  description: StringAggregateSelection;
  id: BigIntAggregateSelection;
  name: StringAggregateSelection;
  typeId: BigIntAggregateSelection;
};

export type VegetablesUpdateInput = {
  foodsIncludes?: InputMaybe<Array<VegetablesFoodsIncludesUpdateFieldInput>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  id_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stylesPairsWith?: InputMaybe<Array<VegetablesStylesPairsWithUpdateFieldInput>>;
  types?: InputMaybe<Scalars['String']['input']>;
};

export type VegetablesWhere = {
  AND?: InputMaybe<Array<VegetablesWhere>>;
  NOT?: InputMaybe<VegetablesWhere>;
  OR?: InputMaybe<Array<VegetablesWhere>>;
  foodsIncludesAggregate?: InputMaybe<VegetablesFoodsIncludesAggregateInput>;
  /** Return Vegetables where all of the related VegetablesFoodsIncludesConnections match this filter */
  foodsIncludesConnection_ALL?: InputMaybe<VegetablesFoodsIncludesConnectionWhere>;
  /** Return Vegetables where none of the related VegetablesFoodsIncludesConnections match this filter */
  foodsIncludesConnection_NONE?: InputMaybe<VegetablesFoodsIncludesConnectionWhere>;
  /** Return Vegetables where one of the related VegetablesFoodsIncludesConnections match this filter */
  foodsIncludesConnection_SINGLE?: InputMaybe<VegetablesFoodsIncludesConnectionWhere>;
  /** Return Vegetables where some of the related VegetablesFoodsIncludesConnections match this filter */
  foodsIncludesConnection_SOME?: InputMaybe<VegetablesFoodsIncludesConnectionWhere>;
  /** Return Vegetables where all of the related Foods match this filter */
  foodsIncludes_ALL?: InputMaybe<FoodsWhere>;
  /** Return Vegetables where none of the related Foods match this filter */
  foodsIncludes_NONE?: InputMaybe<FoodsWhere>;
  /** Return Vegetables where one of the related Foods match this filter */
  foodsIncludes_SINGLE?: InputMaybe<FoodsWhere>;
  /** Return Vegetables where some of the related Foods match this filter */
  foodsIncludes_SOME?: InputMaybe<FoodsWhere>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_GT?: InputMaybe<Scalars['BigInt']['input']>;
  id_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  id_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_LT?: InputMaybe<Scalars['BigInt']['input']>;
  id_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  stylesPairsWithAggregate?: InputMaybe<VegetablesStylesPairsWithAggregateInput>;
  /** Return Vegetables where all of the related VegetablesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_ALL?: InputMaybe<VegetablesStylesPairsWithConnectionWhere>;
  /** Return Vegetables where none of the related VegetablesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_NONE?: InputMaybe<VegetablesStylesPairsWithConnectionWhere>;
  /** Return Vegetables where one of the related VegetablesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_SINGLE?: InputMaybe<VegetablesStylesPairsWithConnectionWhere>;
  /** Return Vegetables where some of the related VegetablesStylesPairsWithConnections match this filter */
  stylesPairsWithConnection_SOME?: InputMaybe<VegetablesStylesPairsWithConnectionWhere>;
  /** Return Vegetables where all of the related Styles match this filter */
  stylesPairsWith_ALL?: InputMaybe<StylesWhere>;
  /** Return Vegetables where none of the related Styles match this filter */
  stylesPairsWith_NONE?: InputMaybe<StylesWhere>;
  /** Return Vegetables where one of the related Styles match this filter */
  stylesPairsWith_SINGLE?: InputMaybe<StylesWhere>;
  /** Return Vegetables where some of the related Styles match this filter */
  stylesPairsWith_SOME?: InputMaybe<StylesWhere>;
  types?: InputMaybe<Scalars['String']['input']>;
  types_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  types_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  types_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  types_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type GetWineTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWineTypesQuery = { __typename?: 'Query', types: Array<{ __typename?: 'Types', name: string, id: any }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetWineTypesDocument = new TypedDocumentString(`
    query GetWineTypes {
  types {
    name
    id
  }
}
    `) as unknown as TypedDocumentString<GetWineTypesQuery, GetWineTypesQueryVariables>;