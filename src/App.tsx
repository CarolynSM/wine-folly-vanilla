import graphqlRequestClient from "./client/graphqlRequestClient";
import { useQuery } from "@tanstack/react-query";
import { GetWineTypesQuery } from "./graphql/queries/GetWineTypesQuery";
import "./App.css";

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["types"],
    queryFn: async () => graphqlRequestClient.request(GetWineTypesQuery),
  });

  console.log({ data, error, isLoading });

  return (
    <>
      <div>yoooooo</div>
    </>
  );
}

export default App;
