import React from 'react'
import { css } from '@linaria/core'

const globals = css`
  :global() {
    :root {
      --black: #333333;
      --white: #ffffff;
      --red200: #ea8979;
      --red300: #ee735d;
      --red400: #dc3e22;
      --red500: #b7280f;
      --red600: #a5240e;
      --green400: #a8b64f;
      --green500: #899441;
      --green600: #697131;
      --gray99: #999999;
      --grayC4: #c4c4c4;
      --grayDE: #dedede;
      --grayE4: #e4e4e4;
      --grayEC: #ececec;
      --grayEE: #eeeeee;
      --grayF4: #f4f4f4;
      --orange400: #ffae35;
      --orange300: #ffdda9;
      --purple400: #9c97d7;
      --purple300: #dfdcfe;
      --blue400: #7fc2d7;
      --blue300: #c5f1ff;
    }

    @font-face {
      font-family: 'SFProDisplay';
      src: url('/assets/fonts/SFProDisplay-Bold.woff2') format('woff2'),
        url('/assets/fonts/SFProDisplay-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SFProDisplay';
      src: url('/assets/fonts/SFProDisplay-Medium.woff2') format('woff2'),
        url('/assets/fonts/SFProDisplay-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SFProDisplay';
      src: url('/assets/fonts/SFProDisplay-Light.woff2') format('woff2'),
        url('/assets/fonts/SFProDisplay-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SFProDisplay';
      src: url('/assets/fonts/SFProDisplay-Regular.woff2') format('woff2'),
        url('/assets/fonts/SFProDisplay-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SFProDisplay';
      src: url('/assets/fonts/SFProDisplay-Thin.woff2') format('woff2'),
        url('/assets/fonts/SFProDisplay-Thin.woff') format('woff');
      font-weight: 100;
      font-style: normal;
      font-display: swap;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    html:focus-within {
      scroll-behavior: smooth;
    }

    body {
      min-width: 320px;
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      font-family: SFProDisplay, Helvetica, sans-serif;
      color: var(--black);
    }

    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    img,
    picture,
    svg {
      max-width: 100%;
      display: block;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
      color: inherit;
    }
  }
`

export default function MyApp({ Component, pageProps }) {
  return <Component className={globals} {...pageProps} />
}
