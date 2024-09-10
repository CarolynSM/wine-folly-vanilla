import { Scalars } from "../../graphql/generated/graphql";
import { getRouteApi } from "@tanstack/react-router";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/wines/")({
  component: Wine,
});

export type Type = {
  id: Scalars["BigInt"]["output"];
  name: Scalars["String"]["output"];
};

function Wine() {
  const route = getRouteApi("/wines/");
  const loaderData = route.useLoaderData();

  const { types } = loaderData as { types: Type[] };

  return (
    <>
      <h2>Wine Types:</h2>
      {types.map((t) => (
        <Link
          to="/wines/$typeId"
          params={{ typeId: t.id }}
          key={`${t.id}-link`}
        >
          <div>{t.name}</div>
        </Link>
      ))}
    </>
  );
}
