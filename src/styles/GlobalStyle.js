import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'antd/dist/antd.css';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing:border-box;  
   
  }

  body {
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
 
    background-color: #eeee;
  }


  ol,
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color:black;
    :hover{
      color:black;
    }
    

  }

  input,
  select,
  button {
    border: none;
    outline: none;
    box-sizing: border-box;
    background: none;
  }
  #components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
`;

export default GlobalStyles;
