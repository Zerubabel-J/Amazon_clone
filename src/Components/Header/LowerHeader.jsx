import { MdMenu } from "react-icons/md";
import classes from "./LowerHeader.module.css";
const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <MdMenu />
          All
        </li>
        <li>Todays Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
