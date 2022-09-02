import styled from 'styled-components'

export const Container_section = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 30px;

  & {
    .container_cards {
      display: grid;
      grid-template-columns: repeat(5, 200px);
      gap: 30px;
    }
    .container_cards .card{
      height: 400px;
      background-color: ${props=>props.theme.colors.colorCard};
      width: 210px;
    }
    
    .card img{
      width: 100%;
     }
    
     .card  span{
      color:${props=>props.theme.colors.colorCard};
      background-color:${props=>props.theme.colors.bgCard} ;
      padding:.1rem .3rem;
      font-size: .7rem;
      font-weight: 600;
     }
  }
`
