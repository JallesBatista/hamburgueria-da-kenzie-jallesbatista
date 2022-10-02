import styled from "styled-components";

export const CartNoItemStyled = styled.div`
  background-color: var(--grey-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 160px;
  border-radius: 0px 0px var(--radius-2) var(--radius-2);
  justify-content: center;
  gap: 12px;

  p {
    color: var(--gray-100);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-title);
  }

  span {
    color: var(--grey-50);
    font-size: var(--font-size-3);
    font-weight: var(--font-size-regular);
  }
`;
