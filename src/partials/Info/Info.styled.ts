import { styled } from '@linaria/react'

export const Info = styled.div`
  display: grid;
  gap: 16px;
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;
  line-height: 1;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  line-height: 1;

  &::before {
    content: '•';
    color: var(--red400);
  }
`
