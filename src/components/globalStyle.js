import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Playfair Display';
      src: url('/fonts/PlayfairDisplay-Medium.eot');
      src: url('/fonts/PlayfairDisplay-Medium.eot?#iefix') format('embedded-opentype'),
          url('/fonts/PlayfairDisplay-Medium.woff2') format('woff2'),
          url('/fonts/PlayfairDisplay-Medium.woff') format('woff'),
          url('/fonts/PlayfairDisplay-Medium.ttf') format('truetype'),
          url('/fonts/PlayfairDisplay-Medium.svg#PlayfairDisplay-Medium') format('svg');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Work Sans';
      src: url('/fonts/WorkSans-Regular.eot');
      src: url('/fonts/WorkSans-Regular.eot?#iefix') format('embedded-opentype'),
          url('/fonts/WorkSans-Regular.woff2') format('woff2'),
          url('/fonts/WorkSans-Regular.woff') format('woff'),
          url('/fonts/WorkSans-Regular.ttf') format('truetype'),
          url('/fonts/WorkSans-Regular.svg#WorkSans-Regular') format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  body {
    width: 100%;

    margin: 0;
    padding: 0;

    font-family: 'Work Sans', Tahoma, Arial, Helvetica, sans-serif;
    font-size: 1em;
    line-height: 1.65;
    color: black;

    position: relative;

    &:before,
    &:after {
      content: '';

      position: absolute;
      left: 0;

      width: 100%;
      height: 5px;

      background-color: #B335F7;
    }
    &:before {
      top: 0;
    }
    &:after {
      bottom: 0;
    }

    ${props => props.noBottomBar ? css`
      &:after {
        display: none;
      }
    ` : ''}
  }

  img {
    display: block;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Playfair Display", serif;
    font-weight: 600;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  a {
    color: currentColor;
    text-decoration: underline;

    &:hover {
      color: #B335F7;
    }
  }

  pre {
    padding: 1rem 1.5rem;
    background: #f7f7f7;
    border-left: 3px solid #B335F7;

    code {}
  }
`

export default GlobalStyle
