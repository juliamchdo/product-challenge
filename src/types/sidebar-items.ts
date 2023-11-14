import { Dispatch, SetStateAction } from "react";
import { ProductProps } from "./product";

export interface SidebarItemsProps {
    sidebarItems: ProductProps[];
    setChartItems: Dispatch<SetStateAction<ProductProps[]>>;
    setTotal: Dispatch<SetStateAction<number>>;
    total: number
  }