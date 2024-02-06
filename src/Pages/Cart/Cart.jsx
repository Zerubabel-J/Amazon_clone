import LayOut from "../../Components/Layout/LayOut";
import { useContext } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../Utitlity/action.type";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
  console.log(basket);
  const total = basket.reduce((amount, item) => {
    return item.price * item.price + amount;
  }, 0);
  console.log(total);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <>
      <LayOut>
        <section className={classes.container}>
          <div className={classes.cart__container}>
            <h1>Hello</h1>
            <h3>Your shoping basket</h3>
            <hr />

            {basket?.length === 0 ? (
              <p>Oops! No items in your cart</p>
            ) : (
              basket?.map((item, i) => {
                return (
                  <>
                    <section className={classes.cart__product}>
                      <ProductCard
                        key={i}
                        product={item}
                        renderDisc={true}
                        flex={true}
                        renderAdd={false}
                      />
                      <div className={classes.btn__container}>
                        <button onClick={() => increment(item)}>
                          {<IoIosArrowUp />}
                        </button>
                        <span>{item.amount}</span>
                        <button onClick={() => decrement(item.id)}>
                          {<MdKeyboardArrowDown />}
                        </button>
                      </div>
                    </section>
                  </>
                );
              })
            )}
            <br />
            <br />
            <br />

            {basket?.length !== 0 && (
              <div className={classes.subtotal}>
                <div>
                  <p>Subtotal ({basket?.length} items), </p>
                  <CurrencyFormat amount={total} />
                </div>
                <span>
                  <input type="checkbox" />
                  <small>This order containes a gitft</small>
                </span>
                <Link to="/payments">Continue to checkout</Link>
              </div>
            )}
          </div>
        </section>
      </LayOut>
    </>
  );
};

export default Cart;
