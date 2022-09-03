import { styled } from '@linaria/react'
import Icon from '../../components/Icon/Icon'

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

export const LogoIcon = styled(Icon)`
  width: 28px;
  height: 28px;

  @media (min-width: 576px) {
    width: 40px;
    height: 40px;
  }
`

export const LogoText = styled.span`
  font-weight: 300;
  font-size: 16px;
  line-height: 1;

  @media (min-width: 576px) {
    font-size: 24px;
  }
`

export const LinkText = styled.span`
  font-size: 16px;
  line-height: 1;
`
