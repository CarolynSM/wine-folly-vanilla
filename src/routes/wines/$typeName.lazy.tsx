import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getWineStylesByType } from "../../queries/getWineStylesByType";

export const Route = createLazyFileRoute("/wines/$typeName")({
  component: Styles,
});

function Styles() {
  const { typeName } = Route.useParams();
  const { data: styles } = useQuery(getWineStylesByType);
  console.log({ styles });

  console.log({ typeName });

  return <div>This is the {typeName} page.</div>;
}
