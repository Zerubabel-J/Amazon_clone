/* eslint-disable react/prop-types */
import classes from "./Category.module.css";
const CategoryCard = ({ data }) => {
  return (
    <>
      <div className={classes.category}>
        <a href="">
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.image} alt="hey" />
          <p>shope me</p>
        </a>
      </div>
    </>
  );
};

export default CategoryCard;
