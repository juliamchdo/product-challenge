import { Product } from "../../components/Product";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { useQuery } from "react-query";
import { HomeContainer, Loading } from "./styled";
import { useState } from "react";
import { Footer } from "../../components/Footer";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Spinner,
} from "@chakra-ui/react";

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
    return (
      <Loading>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Loading>
    );
  }

  if (error) {
    return (
      <Loading>
        <Alert status="error" width={600} borderRadius={30}>
          <AlertIcon />
          <AlertTitle>Algo deu errado!</AlertTitle>
          <AlertDescription>
            Não foi possível carregar a página.
          </AlertDescription>
        </Alert>
      </Loading>
    );
  }

  return (
    <HomeContainer>
      <Header chartItems={chartItems} setChartItems={setChartItems} />
      <Product
        products={data}
        chartItems={chartItems}
        setChartItems={setChartItems}
      />
      <Footer />
    </HomeContainer>
  );
}
