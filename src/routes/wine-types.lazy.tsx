import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getWineTypesQuery } from "../queries/getWineTypes";

export const Route = createLazyFileRoute("/wine-types")({
  component: Wine,
});

function Wine() {
  const { data: types } = useQuery(getWineTypesQuery);

  console.log({ types });

  return <div className="p-2">Wine Types</div>;
}
