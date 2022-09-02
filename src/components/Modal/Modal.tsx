import React from 'react'
import ReactDOM from 'react-dom'
import useCloseOnClickOutside from '../../hooks/useCloseOnClickOutside'
import * as S from './Modal.styled'

type Props = {
  onClose: () => void
  children?: React.ReactNode
}

export default function Modal({ onClose, children }: Props) {
  const [modal] = useCloseOnClickOutside(onClose)

  const modalRoot = document.querySelector('#modal_root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <S.Backdrop>
      <S.Modal ref={modal}>{children}</S.Modal>
    </S.Backdrop>,
    modalRoot
  )
}
