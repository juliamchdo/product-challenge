import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { useQuery } from "react-query";
import { HomeContainer } from "./styled";
import { useState } from "react";

export function Home() {
  const { data, isLoading, error } = useQuery(
    "products",
    async () => {
      const response = await api.get(
        "/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      );
      return response.data.products;
    },
    {
      retry: 5,
    }
  );

  interface ProductProps {
    brand: string;
    description: string;
    id: number;
    name: string;
    photo: string;
    price: string;
  }


  const [chartItems, setChartItems] = useState<ProductProps[]>([]);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  if (error) {
    return <h1>Algo deu errado</h1>;
  }

  return (
    <HomeContainer>
      <Header chartItems={chartItems} />
      <Card products={data} chartItems={chartItems} setChartItems={setChartItems}/>
    </HomeContainer>
  );
}
