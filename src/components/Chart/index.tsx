import chartLogo from "../../assets/chart.svg";
import { ButtonContainer, ChartButton, TotalItems } from "./styled";
import { ChartProps } from "../../types/chart";

export function Chart({ open, setOpen, chartItems }: ChartProps) {
  return (
    <ChartButton onClick={() => setOpen(!open)}>
      <ButtonContainer>
        <img src={chartLogo} alt="chart" />
        <TotalItems>{chartItems.length}</TotalItems>
      </ButtonContainer>
    </ChartButton>
  );
}
