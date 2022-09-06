import styled from 'styled-components'

export const Container_section = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
  position: relative;

  & {
    .title {
      display: flex;
      align-items: flex-end;
      gap: 20px;
    }
    .title a {
      align-self: flex-end;
    }
    .container_cards {
      display: grid;
      grid-template-columns: repeat(5, 200px);
      gap: 10px;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .back {
      position: absolute;
      font-weight: 700;
      font-size: 5.2rem;
      color: #272727;
      top: -30px;
      z-index: -1;
    }

    .section_content h2 {
      font-weight: 400;
    }
    .section_content a {
      font-size: 0.6rem;
    }
    .section_content h2,
    a {
      color: ${(props) => props.theme.colors.fontSecondary};
      text-decoration: none;
    }
    .section_content a {
      display: inline-block;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    margin-top: 200px;

    .container_cards {
      display: flex;
    }
  }
`
