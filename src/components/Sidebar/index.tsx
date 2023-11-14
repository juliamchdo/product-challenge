import {
  SidebarButton,
  SidebarContainer,
  StyledSidebar,
  Total,
} from "./styled";
import close from "../../assets/close.svg";
import { SidebarItems } from "../SidebarItems";
import { SidebarProps } from "../../types/sidebar";
import { useState } from "react";

export function Sidebar({ open, setOpen, sidebarItems, setChartItems }: SidebarProps) {
  const [total, setTotal] = useState(0);
  return (
    <StyledSidebar>
      <div>
        <SidebarContainer>
          <h2>Carrinho de compras</h2>
          <img src={close} alt="chart" onClick={() => setOpen(!open)} />
        </SidebarContainer>

        <SidebarItems
          sidebarItems={sidebarItems}
          setTotal={setTotal}
          setChartItems={setChartItems}
          total={total}
        ></SidebarItems>
      </div>

      <div>
        <Total>
          <h2>Total</h2>
          <h2>R${total}</h2>
        </Total>
        <SidebarButton>Finalizar Compra</SidebarButton>
      </div>
    </StyledSidebar>
  );
}
