import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getWineStylesByType } from "../../queries/getWineStylesByType";

export const Route = createLazyFileRoute("/wines/$typeId")({
  component: Styles,
});

function Styles() {
  const { typeId } = Route.useParams();
  const { data: styles } = useQuery(getWineStylesByType);
  console.log({ styles });

  return <div>This is the {typeId} page.</div>;
}
