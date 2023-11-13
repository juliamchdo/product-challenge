import chartLogo from "../../assets/chart.svg";
import { Dispatch, SetStateAction } from "react";
import { ButtonContainer, ChartButton, TotalItems } from "./styled";

interface ProductProps {
  brand: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
}
interface ChartProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    chartItems: ProductProps[]
}

export function Chart({open, setOpen, chartItems} : ChartProps) {
  return (
    <ChartButton onClick={() => setOpen(!open)}>
      <ButtonContainer >
        <img src={chartLogo} alt="chart" />
        <TotalItems>{chartItems.length}</TotalItems>
      </ButtonContainer>
    </ChartButton>
  );
}
