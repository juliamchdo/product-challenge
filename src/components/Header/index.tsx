import { Chart } from "../Chart";
import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { Nav, LogoContainer, Title, Subtitle } from "./styled";
import { HeaderProps } from "../../types/header";

export function Header({ chartItems, setChartItems }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <LogoContainer>
        <Title>MKS</Title>
        <Subtitle>Sistemas</Subtitle>
      </LogoContainer>

      {!open && <Chart open={open} setOpen={setOpen} chartItems={chartItems} />}
      {open && (
        <Sidebar open={open} setOpen={setOpen} sidebarItems={chartItems} setChartItems={setChartItems}/>
      )}
    </Nav>
  );
}
