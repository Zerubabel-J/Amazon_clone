import "./Header.css";
import logo from "../../assets/amazon-logo-white.png";
import mobileLogo from "../../assets/amazon-mobile-logo-white.png";
import searchIcon from "../../assets/icons/search-icon.png";
import cartIcon from "../../assets/icons/cart-icon.png";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <div className="amazon-header">
        <div className="amazon-header-left-section">
          <a href="amazon.html" className="header-link">
            <img className="amazon-logo" src={logo} />
            <img className="amazon-mobile-logo" src={mobileLogo} />
          </a>
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

          <a className="orders-link header-link" href="orders.html">
            <span className="returns-text">Returns</span>
            <span className="orders-text">& Orders</span>
          </a>

          <a className="cart-link header-link" href="checkout.html">
            <img className="cart-icon" src={cartIcon} />
            <div className="cart-quantity js-cart-quantity">0</div>
            <div className="cart-text">Cart</div>
          </a>
        </div>
      </div>
      <br />

      <LowerHeader />
    </>
  );
};

export default Header;
