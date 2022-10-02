import { ButtonDefaultGrey } from "../../styles/button";
import CartList from "./CartList";
import { CartNoItemStyled } from "./CartNoItensStyled/styles";
import { CartResumeStyled } from "./CartResumeStyled/styles";
import { CartStyled } from "./styles";

export default function Cart({ currentSale, setCurrentSale, cartTotal }) {
  return (
    <CartStyled>
      <div className="cart__title">
        <p>Carrinho de compras</p>
      </div>
      {currentSale.length ? (
        <>
          <CartList
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          ></CartList>
          <CartResumeStyled>
            <span></span>
            <div className="resume__content">
              <p>Total</p>
              <span>R$ {Number(cartTotal).toFixed(2).replace(".", ",")}</span>
            </div>
            <ButtonDefaultGrey onClick={() => setCurrentSale([])}>
              Remover todos
            </ButtonDefaultGrey>
          </CartResumeStyled>
        </>
      ) : (
        <CartNoItemStyled>
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </CartNoItemStyled>
      )}
    </CartStyled>
  );
}
