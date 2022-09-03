import React from 'react'

export default function Favicons() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/favicons/safari-pinned-tab.svg"
        color="#dc3e22"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="theme-color" content="#ffffff" />
    </>
  )
}
