import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context"

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const{addtoCart,cartItems}=useContext(ShopContext);
  let cartItemcounter=cartItems[id];
 
  
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Rs.{price}</p>
      </div>
      <button className="addToCartBttn"  onClick={()=>addtoCart(id)} >
        Add to cart {cartItemcounter>0 && <>{cartItemcounter}</>}
      </button>
    </div>
  );
};
