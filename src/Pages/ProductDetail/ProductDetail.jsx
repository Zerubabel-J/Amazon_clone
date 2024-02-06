import { useEffect, useState } from "react";
import LayOut from "../../Components/Layout/LayOut";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loade from "../../Components/Loader/Loade";

const ProductDetail = () => {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    console.log(productId);
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        console.log(product);
        setisLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setisLoading(false);
      });
  }, []); // Include productId in the dependency array

  return (
    <>
      <LayOut>
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
        {isLoading ? (
          <Loade />
        ) : (
          <ProductCard
            product={product}
            flex={true}
            renderDisc={true}
            renderAdd={true}
          />
        )}
      </LayOut>
    </>
  );
};

export default ProductDetail;
