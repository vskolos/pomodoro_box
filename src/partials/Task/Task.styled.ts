import { styled } from '@linaria/react'

export const Item = styled.li`
  padding-block: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--grayE4);

  &:first-child {
    border-top: 1px solid var(--grayE4);
  }
`

export const Count = styled.span`
  position: relative;
  min-width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 16px;
  line-height: 1;

  &::before {
    position: absolute;
    content: '';
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid var(--grayC4);
  }
`

export const Text = styled.span`
  margin-right: auto;
  font-weight: 300;
  font-size: 16px;
  line-height: 1;
`

export const Dropdown = styled.div`
  position: relative;
`
