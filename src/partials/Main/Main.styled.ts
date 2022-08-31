import { styled } from '@linaria/react'

export const Main = styled.main`
  padding: 32px 15px;
  display: grid;
  gap: 32px;

  @media (min-width: 576px) {
    padding-inline: calc((100% - 516px) / 2);
  }

  @media (min-width: 768px) {
    padding-block: 100px;
  }

  @media (min-width: 1024px) {
    padding-inline: 80px;
    grid-auto-flow: column;
    align-items: start;
  }

  @media (min-width: 1200px) {
    grid-template-columns: max-content auto;
  }

  @media (min-width: 1440px) {
    padding-inline: calc((100% - 1280px) / 2);
  }
`
