import { useEffect } from "react";
import "./Home.css";
import bgimage from "../../resources/ecommerce.jpg";
import Product from "../Product/Product";

function Home() {

  useEffect(() => {
    
  });

  return (
    <div className="home">
      <div className="home__container">
        <img src={bgimage} alt="ecommerce" className="home__image" />

        <div className="home__row">
          <Product
            id="12321341"
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
          <Product
            id="49538094"
            title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
            price={199.99}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
