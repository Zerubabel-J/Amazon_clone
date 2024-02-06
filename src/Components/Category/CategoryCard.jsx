/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "./Category.module.css";
const CategoryCard = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className={classes.category}>
        <Link to={`category/${data.name}`}>
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.image} alt="hey" />
          <p>shope me</p>
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
