import { ItemCard, ItemsContainer, QuantityButton } from "./styled";
import { SidebarItemsProps } from "../../types/sidebar-items";
import { useEffect, useState } from "react";
import { ProductProps } from "../../types/product";
import close from "../../assets/close.svg";

export function SidebarItems({
  sidebarItems,
  setChartItems,
  setTotal,
  total,
}: SidebarItemsProps) {
  const [price, setPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(1);

  useEffect(() => {
    const newTotal = sidebarItems.reduce(
      (acc, item) => acc + Number(item.price),
      0
    );
    setTotal(newTotal);

    sidebarItems.map((item) => {
      setPrice(Number(item.price));
    });
  }, [setTotal, sidebarItems]);

  function addItem(item: ProductProps) {
    setPrice(price + Number(item.price));
    setTotal(total + Number(item.price));
    setTotalItems(totalItems + 1);
  }

  function removeItem(item: ProductProps) {
    setPrice(price - Number(item.price));
    setTotal(total - Number(item.price));
    setTotalItems(totalItems - 1);
  }

  function deleteItem(item: ProductProps){
    const id = item.id;
    const newList = sidebarItems.filter((i) => i.id !== id);
    console.log(newList)
    setChartItems(newList)
  }

  return (
    <ItemsContainer>
      {sidebarItems.map((item) => {
        return (
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
                  disabled={totalItems === 1}
                  onClick={() => removeItem(item)}
                >
                  -
                </button>
                <span>{totalItems}</span>
                <button className="button-right" onClick={() => addItem(item)}>
                  +
                </button>
              </div>
            </QuantityButton>

            <p className="price">R${price}</p>
            <img className="delete" src={close} alt="delete" onClick={() =>  deleteItem(item)} />
          </ItemCard>
        );
      })}
    </ItemsContainer>
  );
}
