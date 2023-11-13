import { Chart } from "../Chart";
import { useState } from "react";
import { Menu } from "../Menu";
import { Nav, LogoContainer, Title, Subtitle } from "./styled";

export function Header() {

  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <LogoContainer>
        <Title>MKS</Title>
        <Subtitle>Sistemas</Subtitle>
      </LogoContainer>

      {!open && <Chart open={open} setOpen={setOpen} />}
      {open && <Menu open={open} setOpen={setOpen} />}
    </Nav>
  );
}
