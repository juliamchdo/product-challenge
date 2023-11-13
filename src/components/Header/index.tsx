import { Chart } from "../Chart";
import { useState } from "react";
import { Menu } from "../Menu";
import { Nav, LogoContainer, Title, Subtitle } from "./styled";

interface ChartProps {
  brand: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
}

interface HeaderProps {
  chartItems: ChartProps[];
}

export function Header({ chartItems } : HeaderProps) {

  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <LogoContainer>
        <Title>MKS</Title>
        <Subtitle>Sistemas</Subtitle>
      </LogoContainer>

      {!open && <Chart open={open} setOpen={setOpen} chartItems={chartItems}/>}
      {open && <Menu open={open} setOpen={setOpen} />}
    </Nav>
  );
}
