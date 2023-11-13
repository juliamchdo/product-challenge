import { styled } from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0F52BA;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 0;
  right: 0;

  height: 100vh;

  @media screen and (max-width: 880px){
    width: 100%;
  }

  @media screen and (min-width: 881px){
    width: 30.375rem;
    padding: 0 2rem;
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
  padding: 2rem;

  h2{
    width: 9.375rem;
    color: #fff;
    font-size: 1.6875rem;
    font-weight: 700;
    line-height: 2rem;
  }
`
