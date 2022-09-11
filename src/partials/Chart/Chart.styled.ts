import { styled } from '@linaria/react'

export const Chart = styled.div`
  padding-top: 16px;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 20px;
  background-color: var(--grayF4);

  @media (min-width: 1024px) {
    grid-column: 2;
    grid-row: 1 / span 2;
    grid-template-rows: 1fr 50px;
  }
`

export const Lines = styled.div`
  padding-block: 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;

  @media (min-width: 1024px) {
    padding-block: 68px;
    gap: 62px;
  }
`

export const Line = styled.div`
  padding-right: 12px;
  display: grid;
  grid-template-columns: 1fr 60px;
  justify-items: start;
  align-items: center;
  gap: 16px;
  font-size: 12px;
  line-height: 1;

  @media (min-width: 1024px) {
    padding-right: 22px;
    gap: 32px;
  }

  &::before {
    content: '';
    height: 1px;
    width: 100%;
    background-color: var(--black);
    opacity: 0.2;
  }
`

export const Legend = styled.div`
  background-color: var(--grayEC);
`

export const Bars = styled.div`
  position: absolute;
  inset: 16px 100px 20px 12px;
  display: grid;
  grid-auto-flow: column;
  align-items: end;
  gap: 16px;

  @media (min-width: 1024px) {
    inset: 16px 146px 50px 32px;
    gap: 32px;
  }

  @media (min-width: 1200px) {
    inset: 16px 170px 50px 56px;
  }
`

export const Bar = styled.button`
  position: relative;
  padding: 0;
  border: none;
  border-radius: 0;
  display: flex;
  justify-content: center;
  background-color: var(--red200);
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }

  &:hover,
  &:focus-visible {
    background-color: var(--red300);

    & > span {
      color: var(--red300);
    }
  }
`

export const BarText = styled.span`
  position: absolute;
  top: 100%;
  font-size: 12px;
  line-height: 20px;
  color: var(--color);

  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 50px;
  }
`
