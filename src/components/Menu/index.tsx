import { Dispatch, SetStateAction } from "react";
import { MenuContainer, StyledMenu } from "./styled";
import close from "../../assets/close.svg";

interface ChartProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Menu({ open, setOpen }: ChartProps) {
  return (
    <StyledMenu>
      <MenuContainer>
        <h2>Carrinho de</h2>
        <img src={close} alt="chart" onClick={() => setOpen(!open)} />
      </MenuContainer>
    </StyledMenu>
  );
}
