import CategoryCard from "./CategoryCard";
import { categoryInfos } from "./CategoryFullInfos";
import classes from "./Category.module.css";
const Category = () => {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.id} data={infos} />
      ))}
    </section>
  );
};

export default Category;
