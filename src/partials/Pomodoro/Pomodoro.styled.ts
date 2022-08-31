import { styled } from '@linaria/react'
import DefaultButton from '../../components/Button/Button'

export const Pomodoro = styled.div`
  display: grid;
`

export const Header = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grayC4);

  @media (min-width: 480px) {
    padding: 19px 40px;
  }
`

export const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: var(--white);
`

export const Count = styled.span`
  font-size: 16px;
  line-height: 1;
  color: var(--white);
`

export const Timer = styled.div`
  padding: 32px;
  display: grid;
  gap: 20px;
  justify-items: center;
  background-color: var(--grayF4);

  @media (min-width: 576px) {
    padding: 55px;
  }

  @media (min-width: 1024px) {
    padding: 95px;
  }
`

export const Countdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 200;
  font-size: 70px;
  line-height: 1;

  @media (min-width: 480px) {
    font-size: 120px;
  }

  @media (min-width: 1024px) {
    font-size: 100px;
  }

  @media (min-width: 1200px) {
    font-size: 120px;
  }

  @media (min-width: 1400px) {
    font-size: 150px;
  }
`

export const Button = styled(DefaultButton)`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -40px;

  &:hover > svg > circle {
    transition: fill 0.1s ease-in-out;
  }

  &:hover > svg > circle,
  &:focus-visible > svg > circle {
    fill: var(--green500);
  }

  &:active > svg > circle {
    fill: var(--green600);
  }

  @media (min-width: 480px) {
    width: 40px;
    height: 40px;
    right: -56px;
  }

  @media (min-width: 576px) {
    width: auto;
    height: auto;
    right: -81px;
  }

  @media (min-width: 1024px) {
    width: 40px;
    height: 40px;
    right: -56px;
  }

  @media (min-width: 1400px) {
    width: auto;
    height: auto;
    right: -81px;
  }
`

export const Task = styled.span`
  font-size: 16px;
  line-height: 1;
`

export const Number = styled.span`
  color: var(--gray99);
`

export const Controls = styled.div`
  justify-self: stretch;
  display: grid;
  gap: 16px;

  @media (min-width: 480px) {
    justify-self: auto;
    grid-auto-flow: column;
    gap: 26px;
  }
`
