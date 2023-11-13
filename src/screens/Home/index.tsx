import { Card } from "../../components/Card";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

export function Home(){

    interface ProductProps {
        brand: string,
        description: string,
        id: number,
        name: string,
        photo: string,
        price: string,
    }

    const [products, setProducts] = useState<ProductProps[]>([]);

//     const queryInfo = useQuery(["products"], () => {
//     api.get("/products?page=1&rows=8&sortBy=id&orderBy=DESC").then((response) => {
//       return response;
//     })
//   })

   useEffect(() => {
    api.get("/products?page=1&rows=8&sortBy=id&orderBy=DESC").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

    return (
        <Card products={products} />
    )
}