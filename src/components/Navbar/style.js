import styled from "styled-components";


export const SideBar= styled.nav`
  
  max-width: 275px;
  height: 100% ;
  background-color: #FF0000;
  position: fixed;
  
  &{
    .container_nav{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      
    }
    .container_nav .back{
      position: fixed;
      color: ${props=>props.theme.colors.fontSecondary};
    }
  }
`