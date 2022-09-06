import styled from 'styled-components'

export const Container_section = styled.div`
  margin: 250px 0 150px;
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  gap: 70px;
  & {
    .form-container {
      display: flex;
      flex-direction: column;
      width: 100%;

      h2 {
        font-weight: 400;
        color: ${(props) => props.theme.colors.fontSecondary};
      }

      .back {
        position: absolute;
        font-weight: 700;
        font-size: 5.2rem;
        color: #272727;
        top: -40px;
        z-index: -1;
      }

      form {
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        gap: 10px;
        
      }

      form input,
      textarea {
        background-color: transparent;
        width: 100%;
        border: 2px solid ${(props) => props.theme.colors.fontSecondary};
        border-radius: 0 15px 0 0;
      }
      label{
        font-size: .9rem;
      }
      form input {
        
        padding: 0.4rem;
      }
      form textarea {
        resize: none;
      }

      form button {
        background-color: transparent;
        border: none;
        text-align: start;
        cursor: pointer;
        transition: all .4s;
      }
      form button:hover {
        color: ${(props) => props.theme.colors.hover};
      }
    }

    .partnership_adress {
      display: grid;
      gap:20px;
      flex-wrap: wrap;
      grid-template-columns: repeat(3, 150px);

      &{

        .icons{
          display: flex;
          justify-content: space-between;
          img{
            width: 40px;
          }
        }
        .card{
          cursor: pointer;
        }
        .card > img{
          height: 50px;
        }
        h3, button{
          font-weight: 400;
          color:  ${(props) => props.theme.colors.fontSecondary};
        }
       
        p{
          padding-top: 5px;
          font-size: .7rem;
          font-weight: 300;
          height:90px;
        }
        
        button{
          font-size: .7rem;
          background-color: transparent;
          border: none;
          transition: .5s;
          cursor: pointer;
        }
        button img{
          padding-left: 5px;
        }
        button:hover{
          color: ${(props) => props.theme.colors.hover};
        }

      }
    }
  }

  @media  (max-width:850px) {
    flex-wrap: wrap;

    &{
      .partnership_adress{
        margin: auto;
        grid-template-columns: repeat(2, 150px);
      }
    }
  }

  
`

