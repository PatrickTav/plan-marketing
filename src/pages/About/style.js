import styled from 'styled-components'

export const Container_section = styled.div`
  margin-top: 250px;
  display: flex;
  gap: 30px;
  position: relative;

  & {
  .text-content{
  
  }
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
      padding-top: 1rem;
    }
    .card_container {
      display: flex;
      /* flex-wrap: wrap; */
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
      top: -20px;
      z-index: -1;
    }
  }



  @media (max-width:1300px) {
    flex-direction: column;
    margin-top: 50px;

    .card_container{
      justify-content: center;
      display: flex;
    }
  }
  @media (max-width:880px) {
    .card_container{
      flex-wrap: wrap;
    }
  }


  @media  (max-width:425px) {
   

    .card_container p{
      font-size: .8rem;
    }
  }
 
`
