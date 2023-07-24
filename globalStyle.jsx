import { createGlobalStyles } from "goober/global";

export const desktop = `@media screen and (max-width: 1440px)`;
export const minTablet = `@media screen and (min-width: 1024px)`;
export const tablet = `@media screen and (max-width: 1023px)`;
export const tabletSmall = `@media screen and (max-width: 991px)`;
export const mobile = `@media screen and (max-width: 767px)`;
export const minMobile = `@media screen and (min-width: 768px)`;
export const mobileSmall = `@media screen and (max-width: 480px)`;

export const GlobalStyles = createGlobalStyles`
  @font-face {
    font-family: "Inter-Regular", sans-serif;
    src: url("./fonts/Inter-Regular.ttf");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Inter-Medium", sans-serif;
    src: url("./fonts/Inter-Medium.ttf");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Inter-SemiBold", sans-serif;
    src: url("./fonts/Inter-SemiBold.ttf");
    font-weight: 600;
    font-style: normal;
  }

  :root {
    /* colors */
    --white: #ffffff;
    --black: #000000;
    --light: #E8F7EE;
    --primary: #011A27;
    --green: #BCE909;
    --blue: #002D7C;
  
    /* fonts */
    font-family: 'Inter-Regular', sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    background-color: var(--primary);
    color: var(--white);
    
    /* border radius */
    --br-sm: 6px; 
    --br: 8px;
    --br-lg: 20px;
    --br-xl: 24px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-size: 16px;
    width: 100%;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul,
    menu {
      margin: 0;
      padding: 0;
    }

    h1, h2, h3 {
      font-family: "Inter-Semibold", sans-serif;
    }

    img {
      display: block;
      height: auto;
      user-select: none;
      -webkit-user-drag: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    svg {
      display: block;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;
      width: 100%;
      text-align: center;
      outline: none;
      font-family: 'Inter-Medium',sans-serif;
      cursor: pointer;
      background: none;
      white-space: nowrap;
      border: none;
      svg {
        fill: var(--button-svg-color);
      }
      &.disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
  @keyframes slideIn {
    0% {
      transform: translateX(-20%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideInFadeIn {
    0% {
      opacity: 0;
      transform: translateX(-10%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-in {
    animation: slideIn 800ms cubic-bezier(0.42, 0, 0.58, 1);
  }
  .fade-in {
    animation: slideInFadeIn 800ms cubic-bezier(0.42, 0, 0.58, 1);
  }
`;
