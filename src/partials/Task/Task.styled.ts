import { styled } from '@linaria/react'
import DefaultButton from '../../components/Button/Button'

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
  line-height: 27px;
`

export const Input = styled.input`
  margin-right: auto;
  width: 100%;
  padding: 4px 5px;
  font-weight: 300;
  font-size: 16px;
  line-height: 1;
  background-color: var(--grayF4);
  border-radius: 0;
  border: none;

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

export const Dropdown = styled.div`
  flex-shrink: 0;
  position: relative;
`

export const Button = styled(DefaultButton)`
  border-radius: 50%;

  &:hover,
  &:focus-visible {
    background-color: var(--grayF4);
  }

  &:active {
    background-color: var(--grayEE);
  }
`
