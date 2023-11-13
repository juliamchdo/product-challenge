import { Card } from "../../components/Card";
import { api } from "../../lib/axios";
import { useQuery } from "react-query";

export function Home() {

  const { data, isLoading, error } = useQuery("products", () => {
    return api
      .get("/products?page=1&rows=8&sortBy=id&orderBy=DESC")
      .then((response) => response.data.products);
  }, {
    retry: 5
  });

  if(isLoading){
    return <div>Carregando...</div>
  }

  if(error){
    return <div>Algo deu errado</div>
  }

  return <Card products={data} />;
}
