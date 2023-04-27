import styled from 'styled-components';
import girl from "../../../../assets/girl-banner.jpeg"

export const Container = styled.div`
    width:100%;
    height:326px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom:100px;

    .left-column{
        background:linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${girl});
        background-size: cover;
        background-position:0 -40px;
    } 

    .right-column{
        background-color:#1D242D;
        color:white;
        display:flex;
        flex-direction: column;
        padding:51px;

        h4{
            font-family:"Raleway", sans-serif;
            font-style:normal;
            font-weight: 300;
            margin-top:30px;
            margin-bottom:37px;
            font-size:19px;
        }

        p{
            font-family:"Raleway", sans-serif;
            font-size:27px;
            font-weight: 700;
            line-height:1.5;
        }
    }
`;
