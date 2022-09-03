import { styled } from '@linaria/react'

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--red400);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: var(--red500);
  }

  &:focus-visible {
    color: var(--red500);
    outline: 2px solid var(--red200);
  }

  &:active {
    color: var(--red600);
  }

  &:focus-visible & > svg > g[clip-path='url(#clip0_6146_248)'] > path {
    transition: fill 0.1s ease-in-out;
  }

  &:hover > svg > g[clip-path='url(#clip0_6146_248)'] > path,
  &:focus-visible > svg > g[clip-path='url(#clip0_6146_248)'] > path {
    fill: var(--red500);
  }

  &:active > svg > g[clip-path='url(#clip0_6146_248)'] > path {
    fill: var(--red600);
  }
`
