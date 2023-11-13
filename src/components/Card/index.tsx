import { CardContainer, CardGrid, StyledCard } from "./styled";
interface ProductProps {
  brand: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
}

interface CardProps {
  products: ProductProps[];
}

export function Card({ products }: CardProps) {
  return (
    <CardContainer>
      <CardGrid>
        {products.map((product) => {
          return <StyledCard key={product.id}></StyledCard>
        })}
      </CardGrid>
    </CardContainer>
  );
}
