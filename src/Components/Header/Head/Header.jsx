import "./Header.css";
import logo from "../../assets/amazon-logo-white.png";
import mobileLogo from "../../assets/amazon-mobile-logo-white.png";
import searchIcon from "../../assets/icons/search-icon.png";
import cartIcon from "../../assets/icons/cart-icon.png";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  console.log(basket.length);
  return (
    <section className="fixed">
      <div className="amazon-header">
        <div className="amazon-header-left-section">
          <Link to="/" className="header-link">
            <img className="amazon-logo" src={logo} />
            <img className="amazon-mobile-logo" src={mobileLogo} />
          </Link>
          <a className="header-link">
            <div id="glow-ingress-block">
              <span
                className="nav-line-1 nav-progressive-content"
                id="glow-ingress-line1"
              >
                Deliver to
              </span>
              <span
                className="nav-line-2 nav-progressive-content"
                id="glow-ingress-line2"
              ></span>
            </div>
          </a>
        </div>

        <div className="amazon-header-middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src={searchIcon} />
          </button>
        </div>

        <div className="amazon-header-right-section">
          <img
            className="us-flag"
            src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
            alt=""
          />
          <section name="" id="" className="lang">
            <option value="">En</option>
          </section>
          <Link className="orders-link header-link" to={user ? "/" : "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello, {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & List</span>
                </>
              )}
            </div>
          </Link>

          <Link className="orders-link header-link" to="/orders">
            <span className="returns-text">Returns</span>
            <span className="orders-text">& Orders</span>
          </Link>

          <Link className="cart-link header-link" to="/cart">
            <img className="cart-icon" src={cartIcon} />
            <div className="cart-quantity js-cart-quantity">{totalItem}</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
};

export default Header;
