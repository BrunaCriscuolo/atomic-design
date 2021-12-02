import { createGlobalStyle } from 'styled-components'

import { Colors } from '../variables'

const { white, gray700 } = Colors

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root{
    min-height: 100%;
  }
  body{
    background-color: ${white};
	overflow-y: scroll;
  }
  body,
  input,textarea{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  button{
    cursor: pointer;
    font-size: 14px;
    line-height: 24px;
  }
  [disabled]{
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${white};
  }
	span{
		&.ant-menu-title-content{
			color:${gray700}!important;
		}
	}
  .mt-30{
    margin-top: 30px;
  }
`
