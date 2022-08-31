import { styled } from '@linaria/react'

export const Tasks = styled.div`
  display: grid;
  gap: 25px;

  @media (min-width: 1024px) {
    max-width: 370px;
  }
`

export const Form = styled.form`
  display: grid;
  gap: 25px;

  @media (min-width: 1024px) {
    justify-items: start;
  }
`

export const Input = styled.input`
  padding: 19px 15px;
  font-weight: 300;
  font-size: 16px;
  line-height: 1;
  color: var(--black);
  background-color: var(--grayF4);
  border-radius: 0;
  border: none;
  transition: background-color 0.1s ease-in-out;

  @media (min-width: 1024px) {
    width: 370px;
  }

  &:focus-visible {
    outline: none;
  }

  &:hover,
  &:focus-visible {
    background-color: var(--grayEE);
  }

  &:active {
    background-color: var(--grayE4);
  }

  &::placeholder {
    color: var(--gray99);
  }
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
`

export const Item = styled.li`
  padding-block: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--grayE4);

  &:first-child {
    border-top: 1px solid var(--grayE4);
  }
`

export const Count = styled.span`
  position: relative;
  min-width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 16px;
  line-height: 1;

  &::before {
    position: absolute;
    content: '';
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid var(--grayC4);
  }
`

export const Text = styled.span`
  margin-right: auto;
  font-weight: 300;
  font-size: 16px;
  line-height: 1;
`

export const Time = styled.span`
  margin-top: -6px;
  font-weight: 300;
  font-size: 16px;
  line-height: 1;
  color: var(--gray99);
`
