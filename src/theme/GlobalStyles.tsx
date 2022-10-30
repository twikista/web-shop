import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
    *, ::after,::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
        line-height: 1.6;
    }

    body{
        font-size: 1.6rem;
        font-family: 'PT Sans', sans-serif;

    }

    .App{
      display: grid;
      grid-template-rows: 75.39px 1fr 15.94px;
      min-height: 100vh;
      /* background-color: #f5f5f5; */
      background-color: #fffffe;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style:none;
  }

  button,
  input,
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }
`;
