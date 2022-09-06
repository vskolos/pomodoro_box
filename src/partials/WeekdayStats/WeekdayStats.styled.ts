import { styled } from '@linaria/react'

export const Weekday = styled.div`
  padding: 25px;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 14px;
  background-color: var(--grayF4);
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.375;

  @media (min-width: 576px) {
    font-size: 24px;
  }
`

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.75;
`

export const Time = styled.span`
  font-weight: 600;
  color: var(--red400);
`
