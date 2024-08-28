// source: https://www.youtube.com/watch?v=ZZrr82beJQk || https://github.com/leoroese/reactquery-ts-graphqlrequest-tutorial/blob/main/src/lib/clients/graphqlRequestClient.ts

import { GraphQLClient } from 'graphql-request';

const graphqlRequestClient = new GraphQLClient('http://localhost:4000/' as string);

export default graphqlRequestClient;