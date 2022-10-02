import styled from "styled-components";

export const ProductsListStyled = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  padding: 16px 8px;
  overflow-x: scroll;

  @media (min-width: 768px) {
    && {
      padding: 0;
      width: 82%;
      flex-wrap: wrap;
      gap: 20px 12px;
      justify-content: center;
      overflow: inherit;
    }
  }
`;
