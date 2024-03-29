import styled from 'styled-components'

import CustomButton from '../../../signInAndOut/custom-button/customButton.component'

export const CollectionItemContainer = styled.div`

    width: 80%vw;
    display: flex;
    flex-direction: column;
    height: 360px;
    align-items: center;
    position:relative;

    @media screen and (max-width: 800px){

        /* display:grid;
        grid-template-columns:1fr; */



        &:hover{

            .image{
                opacity: unset;

            }

            .custom-button{
                opacity: unset;
            }
        }

    }

    .image{

        width: 100%;
        height: 95%;
        background-size: cover;
        background-position: center;
        margin-bottom: 5px;




    }


    

    .custom-button{
        
        width: 80%;
        opacity: 0.7;
        position:absolute;
        top: 255px;
        display:none;

        @media screen and (max-width: 800px){
            
            display:block;
            opacity:0.9;
            min-width:unset;
            padding: 0 10px ;
            overflow:hidden;


        }

        
    }

    &:hover{
        .image{
            opacity: 0.8;

        }

        .custom-button{
            opacity: 0.85;
            display: flex;
        }
    }

    .collection-footer{
        width: 80%;
        height: 5%;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        margin-bottom: 25px;

        .name{
            width: 90%;
            margin-bottom: 15px;
        }

        .price {
            width: 10%;
        }

        @media screen and (max-width: 800px){
            
            font-size: 15px


        }
    }



`