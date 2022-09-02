import { styled } from '@linaria/react'
import DefaultButton from '../../components/Button/Button'

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  padding-block: 5px;
  display: grid;
  background-color: var(--white);
  border: 1px solid var(--grayC4);
  z-index: 10;

  @media (min-width: 1024px) {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    position: absolute;
    bottom: 100%;
    right: 5px;
    content: '';
    border-bottom: 7px solid var(--grayC4);
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;

    @media (min-width: 1024px) {
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &::after {
    position: absolute;
    bottom: 100%;
    right: 6px;
    content: '';
    border-bottom: 6px solid var(--white);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;

    @media (min-width: 1024px) {
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

export const Button = styled(DefaultButton)`
  padding: 9px 14px;
  gap: 8px;
  justify-content: start;
  font-weight: 300;
  color: var(--gray99);

  &:hover,
  &:focus-visible {
    background-color: var(--grayF4);
  }

  &:active {
    background-color: var(--grayE4);
  }
`

export const ModalTitle = styled.p`
  font-size: 24px;
  line-height: 2;
`

export const CancelButton = styled(DefaultButton)`
  font-weight: 300;
  color: var(--gray33);
  text-decoration: underline;
`
