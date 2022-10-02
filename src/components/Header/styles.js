import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--grey-0);
  padding: 15px 0;

  @media (min-width: 768px) {
    padding: 10px;
  }
`;
export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: var(--padding-container);
  align-items: center;

  h1 {
    font-size: var(--font-size-0);
    font-weight: var(--font-weight-title);

    span {
      font-size: var(--font-size-2);
      color: var(--color-secondary);
    }
  }

  nav {
    position: relative;

    input {
      background-color: white;
      border: 2px solid var(--grey-20);
      border-radius: var(--radius-1);
      padding: 0 125px 0 10px;

      width: 100%;
      max-width: 365px;
      height: 60px;

      font-size: var(--font-size-regular);
      font-weight: var(--font-weight-regular);
    }
    input::placeholder {
      color: var(--grey-20);
    }
    input:focus {
      border-color: var(--grey-50);
    }

    button {
      position: absolute;
      right: 10px;
      top: 10px;
      bottom: 10px;
      font-weight: var(--font-weight-regular);
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
