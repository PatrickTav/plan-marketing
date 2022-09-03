import styled from 'styled-components'

export const Cards = styled.div`
  height: 400px;
  background-color: ${(props) => props.theme.colors.colorCard};
  width: 200px;
  transition: all .5s;
   cursor: pointer;
  
   :hover{
   background-color: ${(props) => props.theme.colors.primary};
  }

  & {
    .image img {
      width: 100%;
    }

    .text_content {
      padding: 0 20px;
    }
    span {
      color: ${(props) => props.theme.colors.colorCard};
      background-color: ${(props) => props.theme.colors.bgCard};
      padding: 0.1rem 0.3rem;
      font-size: 0.7rem;
      font-weight: 600;
      height: 30px;
    }
    h2,
    a {
      color: ${(props) => props.theme.colors.fontSecondary};
    }
    h2 {
      font-size: 1rem;
      font-weight: 300;
      height: 70px;
    }
    h2,
    p {
      padding-top: 10px;
    }
    p {
      height: 130px;
    }
    p,
    a {
      text-decoration: none;
      font-size: 0.8rem;
    }
   
  }

  
`
