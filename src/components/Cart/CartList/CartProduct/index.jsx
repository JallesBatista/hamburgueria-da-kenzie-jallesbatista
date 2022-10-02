import { CartProductStyled } from "./styles";

export default function CartProduct({
  product,
  currentSale,
  setCurrentSale,
  removeProduct,
}) {
  const { id, name, category, img, quantity } = product;

  return (
    <>
      <CartProductStyled>
        <div className="cartProduct__image">
          <img src={img} alt={name} />
        </div>
        <div className="cartProduct__content">
          <div className="cartProduct__title">
            <h3>{name}</h3>
            <span>{category}</span>
          </div>
          <div className="cartProduct__action">
            <button onClick={() => removeProduct(id)}>Remover</button>
            <span>x{quantity}</span>
          </div>
        </div>
      </CartProductStyled>
    </>
  );
}
