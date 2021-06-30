import styled from 'styled-components';

export const PreviewCollecttionStyleContainer = styled.div`

    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    justify-content:space-between
  
    .title {
      font-size: 28px;
      margin-bottom: 35px;
    }
  

    @media screen and (max-width:800px){

        align-items: center;
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-gap:15px

    }
  

`

export const PreviewStyled = styled.div`

    display: flex;
    justify-content: space-between;

        @media screen and (max-width:800px){

            display: grid;
            grid-template-columns: 1fr 1fr ;
            grid-gap:15px;

        }
          
`