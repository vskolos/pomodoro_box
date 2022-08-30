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

  &[data-style^='primary'] {
    padding: 19px 50px;
    color: var(--white);

    &[data-style$='green'] {
      background-color: var(--green400);
    }

    &[data-style$='red'] {
      background-color: var(--red400);
    }
  }

  &[data-style^='secondary'] {
    padding: 17px 48px;

    &[data-style$='green'] {
      color: var(--green400);
      border: 2px solid var(--green400);
    }

    &[data-style$='red'] {
      color: var(--red400);
      border: 2px solid var(--red400);
    }
  }
`
