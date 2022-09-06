import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function Stats({ className, style }: Props) {
  return (
    <svg
      className={className}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_6146_248)">
        <path
          d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z"
          fill="#DC3E22"
        />
      </g>
      <defs>
        <clipPath id="clip0_6146_248">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
