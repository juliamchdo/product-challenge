import { Dispatch, SetStateAction } from "react";
import { ProductProps } from "./product";

export interface SidebarProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    sidebarItems: ProductProps[];
  }