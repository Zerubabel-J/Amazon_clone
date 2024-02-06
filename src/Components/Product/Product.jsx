import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import Loade from "../Loader/Loade";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        setProducts(res.data);
        setisLoading(false);
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loade />
      ) : (
        <section className={classes.product__container}>
          {products.map((singleProduct) => {
            return (
              <ProductCard
                key={singleProduct.id}
                product={singleProduct}
                renderAdd={true}
              />
            );
          })}
        </section>
      )}
    </>
  );
};

export default Product;
