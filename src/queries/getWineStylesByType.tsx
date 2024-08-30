import { queryOptions } from "@tanstack/react-query";
import graphqlRequestClient from "../client/graphqlRequestClient";
import { GetWineStylesWhere } from "../graphql/queries/GetWineStylesWhere";

export const getWineStylesByType = queryOptions({
  queryKey: ["GET_WINE_STYLES_BY_TYPE"],
  queryFn: async (typeId) => {
    const styles = await graphqlRequestClient.request({
      document: GetWineStylesWhere,
      variables: {
        where: {
          typeId: typeId,
        },
      },
    });
    return styles;
  },
});
