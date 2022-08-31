import { styled } from '@linaria/react'

export const Info = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 1024px) {
    gap: 0;
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

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
`

export const Item = styled.li`
  display: flex;
  gap: 12px;
  font-size: 16px;
  line-height: 2;

  @media (min-width: 1024px) {
    gap: 16px;
  }

  &::before {
    content: '•';
    color: var(--red400);
  }
`
