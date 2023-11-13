import { styled } from "styled-components";

export const CardContainer = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  gap: 1.375rem;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 999px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 815px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledCard = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0rem 0.125rem 0.5rem 0rem rgba(0, 0, 0, 0.14);
  box-sizing: border-box;
  background-color: #fff;
`;

export const Content = styled.div`
  width: 13.625rem;
  height: 17.8125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;

  img {
    width: fullWidth;
    height: 8.625rem;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  h1 {
    font-size: 1rem;
    font-weight: 400;
    color: #2c2c2c;
  }
`;

export const SubTitle = styled.h2`
  font-size: 0.625rem;
  font-weight: 300;
`;

export const Price = styled.div`
  border-radius: 0.3125rem;
  font-size: 0.9375rem;
  background-color: #373737;
  color: #fff;
  text-align: center;
  font-weight: 700;
  height: fit-content;
  padding: 0.5rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  width: 100%;
  height: 2rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: #fff;
  background-color: #0f52ba;
  border: 1px solid #0f52ba;
  border-radius: 0px 0px 0.5rem 0.5rem;
`;
