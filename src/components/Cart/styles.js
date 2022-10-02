import styled from "styled-components";

export const CartStyled = styled.div`
  border-radius: var(--radius-2);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .cart__title {
    background-color: var(--color-primary);
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    p {
      font-size: var(--font-size-2);
      font-weight: var(--font-weight-title);
      color: white;
    }
  }

  @media (min-width: 768px) {
    width: 45%;
    max-width: 360px;
    height: max-content;

    position: sticky;
    top: 30px;
  }
`;
