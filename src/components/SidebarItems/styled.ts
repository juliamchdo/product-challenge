import { styled } from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.375rem;
`;

export const ItemCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  height: 9.5rem;
  width: 37.9rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  .item-group{
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  img {
    width: 4.6rem;
    height: 4.6rem;
  }

  .delete{
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: 420px) {
    width: 30rem;
  }

  p {
    width: 5rem;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.7rem;
    color: #2c2c2c;
  }

  .price {
    font-size: 1.4rem;
    font-weight: 700;
    color: #000;
  }
`;

export const QuantityButton = styled.div`
  display: flex;
  flex-direction: column;

  p{
    font-size: .5rem;
    margin: 0;
  }

  .qnt-conatainer{
    display: flex;
    align-items: center;
    border: 0.3px solid #BFBFBF;
    border-radius: 0.25rem;
  }

  span{
    padding: 0 .5rem;
    border-left: 0.3px solid #BFBFBF;
    border-right: 0.3px solid #BFBFBF;
  }

  button{
    background-color: #fff;
    border: none;
    border-radius: 0.25rem;
  }

`;
