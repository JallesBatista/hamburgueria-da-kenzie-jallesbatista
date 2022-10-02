import styled from "styled-components";

export const CartListStyled = styled.ul`
  background-color: var(--grey-0);
  padding: 20px 20px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border-bottom: 2px solid var(--grey-20); */
  max-height: 140px;
  overflow-y: scroll;

  @media (min-width: 768px) {
    padding: 20px 10px;
    max-height: 320px;
  }
`;
