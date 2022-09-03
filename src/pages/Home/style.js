import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Section = styled.section`
  margin: auto;
  width: 1240px;
  height: 100vh;
  padding-left: 250px;
 
  /* @media (min-width:1400px) {
    padding-left: 0;
    padding: 0 20px;

  } */
  @media (max-width:1400px) {
    padding-left: 0;
    padding: 0 20px;
    
  }
`
