import CartProduct from "./CartProduct";
import { CartListStyled } from "./styles";

export default function CartList({ currentSale, setCurrentSale }) {
  const removeProduct = (id) => {
    const findedProduct = currentSale.find((item) => item.id == id);

    if (findedProduct.quantity > 1) {
      const newCurrentSale = currentSale.map((item) => {
        if (item.id == findedProduct.id) {
          item.quantity--;
        }
        return item;
      });

      setCurrentSale(newCurrentSale);
    } else {
      setCurrentSale(currentSale.filter((item) => item.id != id));
    }
  };

  return (
    <CartListStyled>
      {currentSale.map((product) => (
        <CartProduct
          key={product.id}
          product={product}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          removeProduct={removeProduct}
        />
      ))}
    </CartListStyled>
  );
}
