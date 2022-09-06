import { styled } from '@linaria/react'
import DefaultIcon from '../../components/Icon/Icon'

export const Pomodoros = styled.div`
  display: grid;
  background-color: var(--grayF4);
`

export const Visual = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const Icon = styled(DefaultIcon)`
  width: 60px;
  height: 60px;

  @media (min-width: 576px) {
    width: auto;
    height: auto;
  }
`

export const Count = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.375;
  color: var(--gray99);

  @media (min-width: 576px) {
    font-size: 24px;
  }
`

export const Text = styled.div`
  padding: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red400);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.375;
  color: var(--white);

  @media (min-width: 576px) {
    font-size: 24px;
  }
`
