import styled from "styled-components";

export const ProductCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 32%;
  min-width: 300px;

  border: 2px solid var(--grey-20);
  border-radius: var(--radius-2);
  overflow: hidden;
  transition: 0.3s;

  &&:hover {
    scale: 1.05;
  }
  .product__image {
    height: 40%;
    background-color: var(--grey-0);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 10px 0px;

    img {
      width: 170px;
      height: 120%;
    }
  }

  .product__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 60%;
    gap: 16px;
    padding: 20px 24px;

    h2 {
      color: var(--gray-100);
      font-size: var(--font-size-2);
      font-weight: var(--font-weight-title);
    }

    span {
      color: var(--grey-50);
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-regular);
    }

    p {
      color: var(--color-primary);
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-button);
    }
  }

  @media (min-width: 768px) {
    && {
      min-width: 225px;
      max-width: 300px;
    }
  }
`;
