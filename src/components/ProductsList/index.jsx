import Product from "./Product";
import { ProductNoItemStyled } from "./ProductNoItemStyled/styles";
import { ProductsListStyled } from "./styles";

export default function ProductsList({ filteredProducts, handleClick }) {
  return (
    <ProductsListStyled>
      {filteredProducts.length ? (
        filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))
      ) : (
        <ProductNoItemStyled>
          <span>Nenhum produto encontrado...</span>
        </ProductNoItemStyled>
      )}
    </ProductsListStyled>
  );
}
