import { styled } from '@linaria/react'
import Button from '../../components/Button/Button'

export const Header = styled.div`
  display: grid;
  gap: 10px;

  @media (min-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;
  line-height: 1;

  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 33px;
  }
`
export const Select = styled.div`
  position: relative;
  display: grid;

  @media (min-width: 480px) {
    min-width: 230px;
  }

  @media (min-width: 1200px) {
    min-width: 370px;
  }
`

export const SelectButton = styled(Button)`
  width: 100%;
  padding: 19px 15px;
  justify-content: space-between;
  gap: 15px;
  background-color: var(--grayF4);

  &:hover,
  &:focus-visible {
    background-color: var(--grayEE);
  }

  &:active {
    background-color: var(--grayE4);
  }

  &:not(:last-child) {
    padding-bottom: 18px;
    border-bottom: 1px solid var(--grayDE);
  }

  & > svg {
    transition: rotate 0.1s ease-in-out;
  }
`

export const SelectList = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  filter: drop-shadow(0px 10px 63px rgba(0, 0, 0, 0.07));
  z-index: 5;
`

export const ChartSection = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 576px) {
    gap: 32px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 296px auto;
    grid-template-rows: auto 179px;
  }
`

export const Calculated = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 576px) {
    gap: 32px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
