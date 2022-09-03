import styled from 'styled-components'

export const SideBar = styled.nav`
  display: flex;
  max-width: 275px;
  height: 100%;
  position: fixed;
  padding-left: 20px;
  border-right: 3px solid #292929;


  & {
    .container_nav {
      display: flex;
      flex-direction: column;
    }
    .list_links {
      display: flex;
      flex-direction: column;
      gap: 50px;
      padding: 1rem;
    }
    .list_links a{
      text-decoration: none;
    }
    .list_links span{
      transition: all .4s;
    }
    .list_links span:hover{
      color: ${(props) => props.theme.colors.hover};
    }
    .container_nav .back {
      position: absolute;
      font-weight: 700;
      font-size: 3.9rem;
      color: #272727;
      bottom: -20px;
      z-index: -1;
      
    }
    .container_nav a {
      position: relative;
      font-style: none;
    }
    .container_nav a img {
      margin: 30px 0 100px;
    }
    .container_nav .logo{
      text-align: center;
    }
    .container_nav-plus{
      border-top: 3px solid #292929;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 60px;
      font-size: 1.2rem;
      
    }
    .container_nav-plus img{
      text-align: end;
    }
  }
  @media (max-width:1350px) {
    display: none;
  }

  
`
