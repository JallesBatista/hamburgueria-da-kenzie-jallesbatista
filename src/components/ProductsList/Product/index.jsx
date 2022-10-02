import { ButtonDefaultGreen } from "../../../styles/button";
import { ProductCardStyled } from "./styles";

export default function Product({ product, handleClick }) {
  const { id, name, category, price, img } = product;
  return (
    <ProductCardStyled>
      <div className="product__image">
        <img src={img} alt={name} />
      </div>
      <div className="product__content">
        <h2>{name}</h2>
        <span>{category}</span>
        <p>R$ {Number(price).toFixed(2).replace(".", ",")}</p>
        <ButtonDefaultGreen onClick={() => handleClick(id)}>
          Adicionar
        </ButtonDefaultGreen>
      </div>
    </ProductCardStyled>
  );
}
