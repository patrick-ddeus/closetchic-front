import styled from 'styled-components';
import BannerImage from "../../../assets/banner-1280.jpg";
import "@fontsource/raleway";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/500.css";

export const Banner = styled.div`
  width:100%;
  height:555px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${BannerImage});
  border-radius:6px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position:0px -50px;
  background-size: cover;

  h2{
    color:white;
    font-family:"Raleway", sans-serif;
    font-weight: 700;
    font-size:73px;
    text-align:center;
  }
`;

export const Container = styled.div`
  width:100%;
  padding:0 72px;
`;

export const BannerButton = styled.button`
  padding:17px 27px;
  font-family:"Raleway", sans-serif;
  font-weight: 700;
  font-size:16px;
  border-radius:10px;
  border:0;
  cursor:pointer;
  margin-top:60px;
`;

export const TopSection = styled.section`
  margin:85px 0;
  display:flex;
  justify-content: space-between;
  align-items: center;

  div:nth-child(1){
    position:relative;

    p{
        font-family:"Raleway", sans-serif;
        font-weight:700;
        font-size:26px;
        width:398px;
    }
  }

  div:nth-child(2){
    p{
        font-family:"Raleway", sans-serif;
        font-weight:500;
        font-size:17px;
        color:#9B9B9B;
    }
  }

  div:nth-child(1)::after{
    content:"";
    position:absolute;
    height:77px;
    width:2px;
    background-color:black;
    right:-35%;
    bottom:0;
  }
`;

export const CardSection = styled.section`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
`;

export const Card = styled.div`
    width:300px;

    p{
        color:#B6BCC6;
        width:290px;
        margin-top:10px;
    }
`;

export const CardIcon = styled.div`
    background-color:#F2F3F7;
    width:46px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    margin-bottom:16px;

  svg{
    font-size:26px;
  }
`;