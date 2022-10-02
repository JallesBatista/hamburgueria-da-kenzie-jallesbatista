import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { api } from "./services/api";
import Cart from "./components/Cart";
function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    api
      .get("products")
      .then(({ data }) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setCartTotal(
      currentSale.reduce((ac, va) => ac + va.price * va.quantity, 0)
    );
  }, [currentSale]);

  const handleClick = (itemId) => {
    const cardItemVerify = currentSale.find(
      (saleProduct) => saleProduct.id == itemId
    );

    if (!cardItemVerify) {
      const cartItem = products.find((product) => {
        if (product.id == itemId) {
          product.quantity = 1;
          return product;
        }
      });
      setCurrentSale([...currentSale, cartItem]);
    } else {
      setCurrentSale(
        currentSale.map((saleProduct) => {
          if (saleProduct.id == itemId) {
            saleProduct.quantity++;
          }
          return saleProduct;
        })
      );
    }
  };

  return (
    <div className="App">
      <Header products={products} setFilteredProducts={setFilteredProducts} />
      <main>
        <ProductsList
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
        <Cart
          cartTotal={cartTotal}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      </main>
    </div>
  );
}

export default App;
