import { createLazyFileRoute } from "@tanstack/react-router";
import { getRouteApi } from "@tanstack/react-router";
import { Scalars } from "../../graphql/generated/graphql";
import { Type } from "./index.lazy";

export const Route = createLazyFileRoute("/wines/$typeId")({
  component: Styles,
});

type Style = {
  description: Scalars["String"]["output"];
  id: Scalars["BigInt"]["output"];
  name: Scalars["String"]["output"];
};

function Styles() {
  const route = getRouteApi("/wines/$typeId");
  const loaderData = route.useLoaderData();

  const { styles, types } = loaderData as { styles: Style[]; types: Type[] };
  console.log({ styles, types });

  let typeName = types && types[0] && types[0].name;

  return (
    <div className="w-5/6">
      <div className="font-bold py-8 text-xl bg-white rounded-lg m-2 p-4">
        This is the {typeName} Wine page. Here are all the different styles of{" "}
        {typeName.toLowerCase()} wine:
      </div>
      <div className="flex flex-wrap">
        {styles.map((style) => (
          <div
            key={`${style.id}-item`}
            className="flex flex-col m-2 p-5 bg-white rounded-lg w-1/3"
          >
            <span className="font-semibold">{style.name}</span>
            <div className="flex flex-row items-start">
              <span>{style.description}</span>
              <div className="bg-secondary ml-4 p-3 rounded-md ">Varietals</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
