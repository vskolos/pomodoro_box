import { styled } from '@linaria/react'

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

export const ChartSection = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 576px) {
    gap: 32px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 296px auto;
  }
`

export const Chart = styled.div`
  padding: 25px;
  background-color: var(--grayF4);

  @media (min-width: 1024px) {
    grid-column: 2;
    grid-row: 1 / span 2;
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
