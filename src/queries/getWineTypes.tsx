import { queryOptions } from "@tanstack/react-query";
import graphqlRequestClient from "../client/graphqlRequestClient";
import { GetWineTypesQuery } from "../graphql/queries/GetWineTypesQuery";

export const getWineTypesQuery = queryOptions({
  queryKey: ["types"],
  queryFn: () => graphqlRequestClient.request(GetWineTypesQuery),
});
