import { Dispatch, SetStateAction } from "react";
import { ProductProps } from "./product";

export interface HeaderProps {
    chartItems: ProductProps[];
    setChartItems: Dispatch<SetStateAction<ProductProps[]>>;
  }