import styled from "styled-components";

export const Continer_section= styled.div`
  margin-top:200px ;
  display: flex;
  flex-wrap: nowrap;
  gap: 30px;
  
  &{
    .card_content{
      display: flex;
      gap: 20px;
      
    }
    .card_content div{
      max-width: 197px;
      
    }
    .card_content p{
      font-size: .7rem;
      margin-top: 20px;
    }
    .card_content img{
      width:125px;
     
    }
    
  }
`