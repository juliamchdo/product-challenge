import { ItemCard, ItemsContainer } from "./styled";
import { SidebarItemsProps } from "../../types/sidebar-items";

export function SidebarItems({ sidebarItems }: SidebarItemsProps) {

  return (
    <ItemsContainer>
      {sidebarItems.map((item) => {
        return (
            <ItemCard key={item.id}>
                <img src={item.photo} alt={item.name}/>
            </ItemCard>
        )
      })}
    </ItemsContainer>
  );
}
