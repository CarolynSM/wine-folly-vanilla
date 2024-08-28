import graphqlRequestClient from "./client/graphqlRequestClient";
import { useQuery } from "@tanstack/react-query";
import { graphql } from "./graphql/generated/gql";

import "./App.css";

const getWineTypesDocument = graphql(`
  query GetWineTypes {
    types {
      name
      id
    }
  }
`);

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["types"],
    queryFn: async () => graphqlRequestClient.request(getWineTypesDocument),
  });

  console.log({ data, error, isLoading });

  return (
    <>
      <div>yoooooo</div>
    </>
  );
}

export default App;
