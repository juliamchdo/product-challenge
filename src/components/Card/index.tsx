import { Dispatch, SetStateAction } from "react";
import ShoppingBag from "../../assets/shopping-bag.svg";
import {
  Button,
  CardContainer,
  CardGrid,
  Content,
  Price,
  StyledCard,
  SubTitle,
  TitleContainer,
} from "./styled";
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
  chartItems: ProductProps[];
  setChartItems: Dispatch<SetStateAction<ProductProps[]>>
}

export function Card({ products, chartItems, setChartItems }: CardProps) {

  function handleCick(item : ProductProps){
    const updateChartItems = [item, ...chartItems];
    setChartItems(updateChartItems);
  }

  return (
    <CardContainer>
      <CardGrid>
        {products.map((item) => {
          return (
            <StyledCard key={item.id}>
              <Content>
                <img src={item.photo} alt={item.name} />
                <TitleContainer>
                  <h1>{item.name}</h1>
                  <Price>R${item.price}</Price>
                </TitleContainer>
                <SubTitle>{item.description}</SubTitle>
              </Content>

              <Button onClick={() => handleCick(item)}>
                <img src={ShoppingBag} alt="shopping bag" />
                COMPRAR
              </Button>
            </StyledCard>
          );
        })}
      </CardGrid>
    </CardContainer>
  );
}
