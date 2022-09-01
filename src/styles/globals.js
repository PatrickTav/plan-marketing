import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    padding:0 ;
    margin: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamily.montserrat};
    color:${(props) => props.theme.colors.fontPrimary} ;
  }

  body{
    background-color: ${(props) => props.theme.colors.primary};
  }
`
