import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getWineTypesQuery } from "../../queries/getWineTypes";

export const Route = createLazyFileRoute("/wines/")({
  component: Wine,
});

function Wine() {
  const { data: types } = useQuery(getWineTypesQuery);

  console.log({ types });

  return (
    <>
      <h2>Wine Types:</h2>
      {types.types.map((t) => (
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
