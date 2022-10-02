import styled from "styled-components";

export const CartResumeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px 20px 20px;

  background-color: var(--grey-0);

  && > span {
    height: 2px;
    background-color: var(--grey-20);
  }
  .resume__content {
    display: flex;
    justify-content: space-between;

    p {
      color: var(--gray-100);
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-button);
    }

    span {
      color: var(--grey-50);
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-button);
    }
  }

  @media (min-width: 768px) {
    && {
      padding: 0px 10px 20px 10px;
    }
  }
`;
