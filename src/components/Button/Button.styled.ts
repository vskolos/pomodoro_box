import { styled } from '@linaria/react'

export const Button = styled.button`
  margin: 0;
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
    border-color 0.1s ease-in-out, opacity 0.1s ease-in-out,
    filter 0.1s ease-in-out;

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    filter: grayscale(1);
    opacity: 0.5;
    pointer-events: none;
  }
`

export const PrimaryButton = styled(Button)`
  padding: 19px 50px;
  color: var(--white);
  background-color: var(--color400);

  &:hover,
  &:focus-visible {
    background-color: var(--color500);
  }

  &:active {
    background-color: var(--color600);
  }
`

export const SecondaryButton = styled(Button)`
  padding: 17px 48px;
  color: var(--color400);
  border: 2px solid var(--color400);

  &:hover,
  &:focus-visible {
    background-color: var(--color500);
    border-color: var(--color500);
    color: var(--white);
  }

  &:active {
    background-color: var(--color600);
    border-color: var(--color600);
    color: var(--white);
  }
`
