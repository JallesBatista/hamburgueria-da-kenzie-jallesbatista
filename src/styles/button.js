import styled from "styled-components";

export const ButtonDefaultGreen = styled.button`
  background-color: var(--color-primary);
  padding: var(--padding-button-1);
  border-radius: var(--radius-1);

  color: white;
  font-weight: var(--font-weight-button);
  font-size: var(--font-size-3);

  &&:hover {
    background-color: var(--color-primary-50);
  }
`;

export const ButtonDefaultGrey = styled.button`
  background-color: var(--grey-20);
  padding: var(--padding-button-2);
  border-radius: var(--radius-1);

  color: var(--grey-50);
  font-weight: var(--font-weight-button);
  font-size: var(--font-size-3);

  &&:hover {
    background-color: var(--grey-50);
    color: var(--grey-20);
  }
`;
