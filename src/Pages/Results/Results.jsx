import LayOut from "../../Components/Layout/LayOut";
import classes from "./Results.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import Loade from "../../Components/Loader/Loade";
const Results = () => {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  console.log(categoryName);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
        setisLoading(false);
        console.log(results);
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <>
      <LayOut>
        {isLoading ? (
          <Loade />
        ) : (
          <section>
            <h1
              style={{
                marginTop: "75px",
                paddingLeft: "10px",
              }}
            >
              Results{" "}
            </h1>

            <p style={{ padding: "10px" }}>Category / {categoryName}</p>
            <Link to="/">
              <button
                style={{
                  backgroundColor: "pink",
                  border: "none",
                  borderRadius: "10px",
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                Go back
              </button>
            </Link>
            <hr />
            <div className={classes.product_container}>
              {results?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  renderAdd={true}
                />
              ))}
            </div>
          </section>
        )}
      </LayOut>
    </>
  );
};

export default Results;
