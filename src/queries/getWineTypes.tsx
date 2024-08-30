import { queryOptions } from "@tanstack/react-query";
import graphqlRequestClient from "../client/graphqlRequestClient";
import { GetWineTypesQuery } from "../graphql/queries/GetWineTypesQuery";

export const getWineTypesQuery = queryOptions({
  queryKey: ["GET_WINE_TYPES"],
  queryFn: async () => {
    const types = await graphqlRequestClient.request(GetWineTypesQuery);
    return types;
  },
});
