import styled from 'styled-components';
import girl from "../../../../assets/girl-banner.jpeg";
import bgDetalhe from "../../../../assets/bg_detalhe.png";

export const Container = styled.div`
    width:100%;
    height:326px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom:60px;

    .left-column{
        background:linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${girl});
        background-size: cover;
        background-position:0;
    } 

    .right-column{
        background-color:#003d52;
        background-image:url(${bgDetalhe});
        background-repeat:no-repeat;
        background-position:right bottom;
        color:white;
        display:flex;
        flex-direction: column;
        padding:51px;

        h4{
            font-family:"Raleway", sans-serif;
            font-style:normal;
            font-weight: 700;
            margin-top:30px;
            margin-bottom:37px;
            font-size:27px;
        }

        p{
            font-family:"Raleway", sans-serif;
            font-size:27px;
            font-weight: 300;
            line-height:1.5;
        }
    }

    @media screen and (max-width:1100px){
        margin-bottom:-100px;
        grid-template-columns: 1fr;
        .left-column{
            display:none;
        }

        .right-column{
            justify-content:center;
            height:400px;
        }
    }
`;
