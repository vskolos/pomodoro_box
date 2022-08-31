import { styled } from '@linaria/react'

export const Button = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 16px;
  line-height: 1;
  background: none;
  border-radius: 0;
  border: none;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out,
    border-color 0.1s ease-in-out;

  &:focus-visible {
    outline: none;
  }

  &[data-style^='primary'] {
    padding: 19px 50px;
    color: var(--white);

    &[data-style$='green'] {
      background-color: var(--green400);

      &:hover,
      &:focus-visible {
        background-color: var(--green500);
      }

      &:active {
        background-color: var(--green600);
      }
    }

    &[data-style$='red'] {
      background-color: var(--red400);

      &:hover,
      &:focus-visible {
        background-color: var(--red500);
      }

      &:active {
        background-color: var(--red600);
      }
    }
  }

  &[data-style^='secondary'] {
    padding: 17px 48px;

    &[data-style$='green'] {
      color: var(--green400);
      border: 2px solid var(--green400);

      &:hover,
      &:focus-visible {
        background-color: var(--green500);
        border-color: var(--green500);
        color: var(--white);
      }

      &:active {
        background-color: var(--green600);
        border-color: var(--green600);
        color: var(--white);
      }
    }

    &[data-style$='red'] {
      color: var(--red400);
      border: 2px solid var(--red400);

      &:hover,
      &:focus-visible {
        background-color: var(--red500);
        border-color: var(--red500);
        color: var(--white);
      }

      &:active {
        background-color: var(--red600);
        border-color: var(--red600);
        color: var(--white);
      }
    }
  }
`
