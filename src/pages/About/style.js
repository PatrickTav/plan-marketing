import styled from 'styled-components'

export const Container_section = styled.div`
  margin-top: 250px;
  display: flex;
  flex-wrap: nowrap;
  gap: 30px;

  & {
    .text-content h2,
    .text-content p {
      font-weight: 400;
      color: ${(props) => props.theme.colors.fontSecondary};
    }
    .text-content .description,
    .text-content .back + p {
      color: ${(props) => props.theme.colors.fontPrimary};
    }

    .text-content p {
      padding-top: 10px;
    }
    .card_container {
      display: flex;
      gap: 20px;
    }
    .text-content .sinopse,
    .text-content .back + p,
    .text-content .description {
      font-size: 0.9rem;
    }
    .card_container div {
      max-width: 197px;
    }
    .card_container p {
      font-size: 0.7rem;
      margin-top: 20px;
    }
    .card_container img {
      width: 100%;
    }
    .card_content p {
      font-size: 0.8rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors.fontSecondary};
    }
    .plus p {
      font-size: 1.1rem;
      color: ${(props) => props.theme.colors.fontSecondary};
    }
    .plus img {
      width: 60px;
      padding-top: 60px;
    }
    .text-content .back {
      position: absolute;
      font-weight: 700;
      font-size: 5.2rem;
      color: #272727;
      top: 230px;
      z-index: -1;
    }
  }

 
`
