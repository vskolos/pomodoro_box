import { styled } from '@linaria/react'
import DefaultIcon from '../../components/Icon/Icon'

export const Calculated = styled.div`
  padding: 25px;
  display: grid;
  grid-template-columns: auto max-content;
  gap: 20px;
  background-color: var(--color);
  transition: background-color 0.1s ease-in-out;
`

export const Title = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.375;

  @media (min-width: 576px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`

export const Value = styled.span`
  font-size: 36px;
  line-height: 1.2;
  align-self: end;

  @media (min-width: 480px) {
    font-size: 48px;
  }

  @media (min-width: 576px) {
    font-size: 64px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
  }
`

export const Icon = styled(DefaultIcon)`
  width: 77px;
  height: 77px;
  grid-column: 2;
  grid-row: 1 / span 2;
  align-self: center;

  @media (min-width: 480px) {
    width: 99px;
    height: 99px;
  }

  @media (min-width: 576px) {
    width: auto;
    height: auto;
  }

  @media (min-width: 1024px) {
    width: 77px;
    height: 77px;
  }

  @media (min-width: 1200px) {
    width: 99px;
    height: 99px;
  }

  @media (min-width: 1440px) {
    width: auto;
    height: auto;
  }

  & > path {
    transition: stroke 0.1s ease-in-out;
    stroke: var(--color);
  }
`
