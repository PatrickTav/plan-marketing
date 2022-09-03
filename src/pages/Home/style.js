import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
 
`

export const Section = styled.section`
  margin: auto;
  width: 1240px;
  height: 100%;
  padding-left: 250px;
  
 
  /* @media (min-width:1350px) {
    padding-left: 0;
    padding: 0 20px;

  } */
  @media (max-width:1350px) {
    padding-left: 0;
    padding: 0 20px;
    
  }
`
