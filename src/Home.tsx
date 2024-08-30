import graphqlRequestClient from "./client/graphqlRequestClient";
import { useQuery } from "@tanstack/react-query";
import { GetWineTypesQuery } from "./graphql/queries/GetWineTypesQuery";
import "../App.css";

const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["types"],
    queryFn: async () => graphqlRequestClient.request(GetWineTypesQuery),
  });

  console.log({ data, error, isLoading });

  return (
    <>
      <div>Hero</div>
      <div>Side Nav?</div>
    </>
  );
};

export default Home;
