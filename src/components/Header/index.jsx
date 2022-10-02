import { useState } from "react";
import { ButtonDefaultGreen } from "../../styles/button.js";
import { HeaderContainer, HeaderStyled } from "./styles";
function Header({ products, setFilteredProducts }) {
  const [searchContent, setSearchContent] = useState("");

  const showProducts = () => {
    const treatedFilter = searchContent.trim().toLowerCase();

    setFilteredProducts(
      products.filter(({ name, category }) => {
        name = name.trim().toLowerCase();
        category = category.trim().toLowerCase();
        if (name.includes(treatedFilter) || category.includes(treatedFilter)) {
          return true;
        }
      })
    );
  };

  return (
    <HeaderStyled>
      <HeaderContainer>
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <nav>
          <input
            onChange={(event) => setSearchContent(event.target.value)}
            type="text"
            placeholder="Digitar Pesquisa"
          />
          <ButtonDefaultGreen onClick={showProducts}>
            Pesquisar
          </ButtonDefaultGreen>
        </nav>
      </HeaderContainer>
    </HeaderStyled>
  );
}
export default Header;
