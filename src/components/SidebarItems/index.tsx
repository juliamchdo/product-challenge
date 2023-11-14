import { ItemCard, ItemsContainer, QuantityButton } from "./styled";
import { SidebarItemsProps } from "../../types/sidebar-items";
import { useEffect, useState } from "react";
import close from "../../assets/close.svg";

export function SidebarItems({
  sidebarItems,
  setChartItems,
  setTotal,
  total,
}: SidebarItemsProps) {
  const [itemStates, setItemStates] = useState(
    sidebarItems.map((item) => ({
      price: Number(item.price),
      totalItems: 1,
    }))
  );

  useEffect(() => {
    const newTotal = itemStates.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [setTotal, itemStates]);

  function addItem(index: number) {
    const newItems = [...itemStates];
    newItems[index].price += Number(sidebarItems[index].price);
    newItems[index].totalItems += 1;
    setItemStates(newItems);
  }

  function removeItem(index: number) {
    const newItems = [...itemStates];
    if (newItems[index].totalItems > 1) {
      newItems[index].price -= Number(sidebarItems[index].price);
      newItems[index].totalItems -= 1;
      setItemStates(newItems);
    }
  }

  function deleteItemFromChart(index: number) {
    const newItems = [...itemStates];
    const removedItem = newItems.splice(index, 1)[0];
    setItemStates(newItems);
    setChartItems((prevItems) =>
      prevItems.filter((item) => item.id !== sidebarItems[index].id)
    );
    setTotal(total - removedItem.price);
  }

  return (
    <ItemsContainer>
      {sidebarItems.map((item, index) => (
        <ItemCard key={item.id}>
          <div className="item-group">
            <img src={item.photo} alt={item.name} />
            <p>{item.name}</p>
          </div>

          <QuantityButton>
            <p>Qtd:</p>
            <div className="qnt-conatainer">
              <button
                className="button-left"
                disabled={itemStates[index].totalItems === 1}
                onClick={() => removeItem(index)}
              >
                -
              </button>
              <span>{itemStates[index].totalItems}</span>
              <button className="button-right" onClick={() => addItem(index)}>
                +
              </button>
            </div>
          </QuantityButton>

          <p className="price">R${itemStates[index].price}</p>
          <img
            className="delete"
            src={close}
            alt="delete"
            onClick={() => deleteItemFromChart(index)}
          />
        </ItemCard>
      ))}
    </ItemsContainer>
  );
}
