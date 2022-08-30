import { styled } from '@linaria/react'
import SVG from '../../components/SVG/SVG'

export const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0px 10px 63px rgba(0, 0, 0, 0.07);

  @media (min-width: 576px) {
    padding-inline: 30px;
  }

  @media (min-width: 768px) {
    padding-inline: 50px;
  }

  @media (min-width: 1024px) {
    padding-inline: 80px;
  }

  @media (min-width: 1440px) {
    padding-inline: calc((100% - 1280px) / 2);
  }
`

export const Logo = styled(SVG)`
  width: 142.1px;
  height: 28px;

  @media (min-width: 576px) {
    width: auto;
    height: auto;
  }
`
