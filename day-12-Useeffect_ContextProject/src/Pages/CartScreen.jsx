import React, { useContext } from "react";
import CartProductCard from "../Components/CartProductCard";
import { MyStore } from "../Context/MyContext";
const CartScreen = () => {
let {cartItem} = useContext(MyStore)

  return (
    <div className="h-[95%] ">
      {cartItem.map((elem) => {
        return <CartProductCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};
export default CartScreen;
