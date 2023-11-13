import { Dispatch, SetStateAction } from "react";
import { ProductProps } from "./product";

export interface ChartProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    chartItems: ProductProps[]
}