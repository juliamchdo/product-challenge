import ShoppingBag from "../../assets/shopping-bag.svg";
import { ProductProps } from "../../types/product";
import {
  Button,
  ProductContainer,
  ProductGrid,
  Content,
  Price,
  ProductCard,
  SubTitle,
  TitleContainer,
} from "./styled";
import { PorductItems } from "../../types/products";

export function Product({ products, chartItems, setChartItems }: PorductItems) {
  function handleCick(item: ProductProps) {
    const updateChartItems = [item, ...chartItems];
    setChartItems(updateChartItems);
  }

  return (
    <ProductContainer>
      <ProductGrid>
        {products.map((item) => {
          return (
            <ProductCard key={item.id}>
              <Content>
                <img src={item.photo} alt={item.name} />
                <TitleContainer>
                  <h1>{item.name}</h1>
                  <Price>R${Number(item.price)}</Price>
                </TitleContainer>
                <SubTitle>{item.description}</SubTitle>
              </Content>

              <Button onClick={() => handleCick(item)}>
                <img src={ShoppingBag} alt="shopping bag" />
                COMPRAR
              </Button>
            </ProductCard>
          );
        })}
      </ProductGrid>
    </ProductContainer>
  );
}
