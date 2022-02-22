import { useEffect, useState } from "react";
import "./Home.css";
import bgimage from "../../resources/ecommerce.jpg";
import Product from "../Product/Product";
import axios from "axios";
import _ from "lodash";

function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      console.log("~ products", response.data);
    });
  }, []);

  function renderProducts(n) {
    return _.sampleSize(products, n);
  }

  return (
    <div className="home">
      <div className="home__container">
        <img src={bgimage} alt="ecommerce" className="home__image" />

        <div className="home__row">
          {products &&
            renderProducts(2).map((prod) => (
              <Product
                id={prod.id}
                title={prod.title}
                price={prod.price}
                rating="10"
                image={prod.image}
              />
            ))}
        </div>
        <div className="home__row">
          {products &&
            renderProducts(3).map((prod) => (
              <Product
                id={prod.id}
                title={prod.title}
                price={prod.price}
                rating="10"
                image={prod.image}
              />
            ))}
        </div>

        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
