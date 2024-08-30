import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useQuery } from "@tanstack/react-query";
import graphqlRequestClient from "../../client/graphqlRequestClient";
import { GetWineStylesWhere } from "../../graphql/queries/GetWineStylesWhere";
import { getWineStylesByType } from "../../queries/getWineStylesByType";

export const Route = createFileRoute("/wines/$typeName")({
  loader: ({ params, context: { queryClient } }) =>
    queryClient.ensureQueryData(
      queryOptions({
        queryKey: ["GET_WINE_STYLES_BY_TYPE"],
        queryFn: async () => {
          console.log({ params });
          const styles = await graphqlRequestClient.request({
            document: GetWineStylesWhere,
            variables: {
              where: {
                typeId: params.typeId,
              },
            },
          });
          return styles;
        },
      })
    ),
});
