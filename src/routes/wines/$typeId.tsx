import { createFileRoute } from "@tanstack/react-router";
import { queryOptions } from "@tanstack/react-query";
import graphqlRequestClient from "../../client/graphqlRequestClient";
import { GetWineStylesWhere } from "../../graphql/queries/GetWineStylesWhere";

export const Route = createFileRoute("/wines/$typeId")({
  loader: ({ params, context: { queryClient } }) =>
    queryClient.ensureQueryData(
      queryOptions({
        queryKey: ["GET_WINE_STYLES_BY_TYPE"],
        queryFn: async () => {
          const styles = await graphqlRequestClient.request({
            document: GetWineStylesWhere,
            variables: {
              stylesWhere: {
                typeId: params.typeId,
              },
              typesWhere: {
                id: params.typeId,
              },
            },
          });
          return styles;
        },
      })
    ),
});
