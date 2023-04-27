import styled from 'styled-components';
import "@fontsource/raleway/600.css";

export const Container = styled.div`
  margin-top:74px;
`;

export const ProductsArea = styled.div`
    margin-top:25px;
    padding-bottom:25px;
    display:flex;
    gap:20px;
    overflow-y:hidden;
    overflow-x:scroll;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
        height: 7px;
  }
  
    /* Track */
    &::-webkit-scrollbar-track {
        background:#D9D9D9;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: black; 
    }
    
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`;

export const ProductCard = styled.div`
    .productImageArea{
        width:380px;
        height:515px;
        background-color:#F6F6F6;
        border-radius:5px;
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
    }
  
`;