import styled from "styled-components";

export const CartProductStyled = styled.li`
  height: 80px;
  display: flex;
  .cartProduct__image {
    background-color: var(--grey-20);
    height: 80px;
    width: 120px;
    border-radius: var(--radius-2);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .cartProduct__content {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 10px;
    width: 100%;
    .cartProduct__title {
      display: flex;
      gap: 16px;
      flex-direction: column;

      h3 {
        color: black;
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-title);
      }
      span {
        color: var(--grey-50);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-regular);
      }
    }
    .cartProduct__action {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        background-color: transparent;
        color: var(--gray-4);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-medium);
      }
      span {
        color: var(--color-primary);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-title);
      }
    }
  }
`;
