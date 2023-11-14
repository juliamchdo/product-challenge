import { styled } from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0F52BA;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 0;
  right: 0;
  overflow: auto;

  height: 100vh;

  @media screen and (max-width: 880px){
    width: 100%;
    position: fixed;
  }

  @media screen and (min-width: 881px){
    width: 48.6rem;
    position: fixed;
  }

  img {
    height: 38px;
    width: 38px;
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;

  h2{
    width: 18rem;
    color: #fff;
    font-size: 2.7rem;
    font-weight: 700;
    line-height: normal;
  }
`

export const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;

  h2{
    padding: 0 5rem;
    font-size: 2rem;
  }
`;

export const SidebarButton = styled.button`
  width: 100%;
  height: 10rem;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
`
