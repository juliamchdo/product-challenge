import { styled } from "styled-components";

export const CardContainer = styled.div`
  height: 80vh;
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
  width: 13.625rem;
  height: 17.8125rem;
  border-radius: 0.5rem;
  box-shadow: 0rem 0.125rem 0.5rem 0rem rgba(0, 0, 0, 0.14);
`;
