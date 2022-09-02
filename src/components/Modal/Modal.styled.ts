import { styled } from '@linaria/react'
import Button from '../Button/Button'

export const Backdrop = styled.div`
  padding: 20px;
  position: fixed;
  display: grid;
  justify-items: center;
  align-items: center;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.5);
  cursor: pointer;
  overflow: auto;
  z-index: 500;

  @media (min-width: 1024px) {
    padding: 60px;
  }
`

export const Modal = styled.div`
  position: relative;
  max-width: 350px;
  width: 100%;
  padding: 25px;
  display: grid;
  justify-items: center;
  gap: 10px;
  background-color: var(--white);
  cursor: initial;
`

export const CloseButton = styled(Button)`
  position: absolute;
  top: 12px;
  right: 12px;
`
