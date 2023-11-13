import { Dispatch, SetStateAction } from "react";
import { ProductProps } from "./product";

export interface  PorductItems{
    products: ProductProps[];
    chartItems: ProductProps[];
    setChartItems: Dispatch<SetStateAction<ProductProps[]>>;
  }