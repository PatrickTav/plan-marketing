import styled from 'styled-components'

export const ContainerSidebar = styled.aside`
  
  

  @media (max-width: 1350px) {
    display: flex;
    width: 275px;
    height: 100%;
    padding-top: 150px;
    position: fixed;
    right: 0;
    border-left: 3px solid #292929;
    z-index: 10;
    background-color: ${(props) => props.theme.colors.primary};
    transition: 4s;
    & {
      nav {
        display: flex;
        flex-direction: column;
      }
      .list_links {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 1rem;
      }
      .list_links a {
        text-decoration: none;
      }
      .list_links span {
        transition: all 0.4s;
      }
      .list_links span:hover {
        color: ${(props) => props.theme.colors.hover};
      }
      .back {
        position: absolute;
        font-weight: 700;
        font-size: 3.9rem;
        color: #272727;
        bottom: -20px;
        z-index: -1;
      }
      nav a {
        position: relative;
        font-style: none;
      }
      nav a img {
        margin: 30px 0 100px;
      }
      nav .logo {
        text-align: center;
      }
      .container_nav-plus {
        border-top: 3px solid #292929;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 60px;
        font-size: 1.2rem;
      }
      .container_nav-plus img {
        text-align: end;
      }
    }
  }
`
