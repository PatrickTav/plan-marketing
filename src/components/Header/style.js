import styled from 'styled-components'

export const ContainerHeader = styled.header`
  display: none;

  @media (max-width: 1350px) {
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20px;
    align-items: center;

    & {
      .logo {
        width: 9rem;
      }
      .logo img {
        width: 100%;
      }

      .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #939598;
        cursor: pointer;
        font-size: 1.5rem;
        width: 3rem;
        height: 3rem;
        color: #fff;
        font-weight: 600;
        transition: all .4s;
      }
      .menu:hover{
        background-color: ${props=>props.theme.colors.hover};

      }
    }
  }
`
