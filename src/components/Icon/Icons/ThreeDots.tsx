import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function ThreeDots({ className, style }: Props) {
  return (
    <svg
      className={className}
      style={style}
      width="26"
      height="26"
      viewBox="0 0 26 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3" r="3" fill="#C4C4C4" />
      <circle cx="13" cy="3" r="3" fill="#C4C4C4" />
      <circle cx="23" cy="3" r="3" fill="#C4C4C4" />
    </svg>
  )
}
