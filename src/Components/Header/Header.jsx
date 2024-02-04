import "./Header.css";
const Header = () => {
  return (
    <>
      <section>
        <section>
          {/* Logo */}

          <div>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=" Amazon logo"
              className="logo"
            />
            {/* delivery */}
            <span>{/* icon */}</span>
          </div>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
          <div>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" id="" placeholder="Search products" />
            {/* icon */}
          </div>
          {/* Right side */}
          <div>
            <div>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt=""
              />
              <section name="" id="">
                <option value="">En</option>
              </section>
            </div>
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* Order */}
            <a href="">
              <div>
                <p>returns</p>
                <span> & Order</span>
              </div>
            </a>
            {/* cart */}
            <a to={"/cart"}>
              {/* icon */}
              <span>0</span>
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default Header;
