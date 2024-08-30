import { createFileRoute } from "@tanstack/react-router";
import { getWineTypesQuery } from "../../queries/getWineTypes";
import "../../App.css";

export const Route = createFileRoute("/wines/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(getWineTypesQuery),
});
