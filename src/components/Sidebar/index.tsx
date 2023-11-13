import { SidebarContainer, StyledSidebar } from "./styled";
import close from "../../assets/close.svg";
import { SidebarItems } from "../SidebarItems";
import { SidebarProps } from "../../types/sidebar";

export function Sidebar({ open, setOpen, sidebarItems }: SidebarProps) {
  return (
    <StyledSidebar>
      <SidebarContainer>
        <h2>Carrinho de compras</h2>
        <img src={close} alt="chart" onClick={() => setOpen(!open)} />
      </SidebarContainer>

      <SidebarItems sidebarItems={sidebarItems}></SidebarItems>
    </StyledSidebar>
  );
}
