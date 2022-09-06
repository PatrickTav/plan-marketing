import styled from 'styled-components'

export const ContainerHeader = styled.header`
  display: none;

  @media (max-width: 1350px) {
    position: fixed;
    display: block;
    max-width: 100%;
    display: flex;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20px;
    align-items: center;
    z-index: 11;
    transition: all 0.4s;

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
        font-size: 1.7rem;
        width: 3rem;
        height: 3rem;
        color: ${(props) => props.theme.colors.primary};
        font-weight: 800;
        transition: all 0.4s;
      }
      .menu:hover {
        background-color: ${(props) => props.theme.colors.hover};
      }
      .menu:active {
        background-color: ${(props) => props.theme.colors.fontSecondary};
      }
    }
  }
`
