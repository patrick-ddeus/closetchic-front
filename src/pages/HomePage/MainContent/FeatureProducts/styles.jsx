import styled from 'styled-components';
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/700.css";

export const Container = styled.div`
  margin-top:74px;
`;

export const TitleContainer = styled.div`
  display:flex;
  justify-content: space-between;

  div{
    display:flex;
    gap:10px;
  }
`;

export const ButtonArrow = styled.button`
  width:52px;
  height:52px;
  border-radius:10px;
  background-color: #1d242d;
  border:0;
  color:white;
  font-size:24px;
  cursor:pointer;
`;

export const ProductsArea = styled.div`
    margin-top:25px;
    padding-bottom:100px;
    display:flex;
    gap:20px;
    overflow:hidden;
    scroll-behavior: smooth;
`;

export const ProductCard = styled.div`
    .productImageArea{
        width:385px;
        height:515px;
        background-color:#F6F6F6;
        border-radius:5px;
        position:relative;

        img{
            position:absolute;
            bottom:0;
        }
    }

    .descArea p:nth-child(1){
        font-family:"Raleway", sans-serif;
        font-weight:600;
        font-size:27px;
        margin-top:22px;
    }

    .productDescArea{
        display:flex;
        align-items:center;
        justify-content: space-between;
    }

    .cartIconArea{
        font-size:20px;
        height:52px;
        width:52px;
        background-color:#1D242D;
        color:white;
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius:10px;
        cursor:pointer;
    }
  
`;

