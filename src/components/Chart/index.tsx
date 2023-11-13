import chartLogo from "../../assets/chart.svg";
import { Dispatch, SetStateAction } from "react";
import { ButtonContainer, ChartButton, TotalItems } from "./styled";

interface ChartProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Chart({open, setOpen} : ChartProps) {

  return (
    <ChartButton onClick={() => setOpen(!open)}>
      <ButtonContainer >
        <img src={chartLogo} alt="chart" />
        <TotalItems>0</TotalItems>
      </ButtonContainer>
    </ChartButton>
  );
}
