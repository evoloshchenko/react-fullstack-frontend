import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Quantity,
} from "../styles/CartStyles";

import { FaShoppingCart } from "react-icons/fa";

import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove } = useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>You have more shopping to do 😉!</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card key={item.slug}>
                <img
                  src={item.image.data.attributes.formats.small.url}
                  alt={item.Title}
                />
                <CardInfo>
                  <h3>{item.Title}</h3>
                  <h3>{item.price}</h3>
                  <Quantity>
                    <span>Quantity</span>
                    <button>
                      <AiFillMinusCircle onClick={() => onRemove(item)} />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </Quantity>
                </CardInfo>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
}
