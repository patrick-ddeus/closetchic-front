import styled from 'styled-components';
import "@fontsource/righteous";
import "@fontsource/raleway";

export const Container = styled.div`
  background-color:#F7F7F7;
  height:100%;
  padding-bottom:100px;
`;

export const HeaderCheckout = styled.header`
  padding:20px 0 20px 72px;
  width:50%;
  display:flex;
  justify-content: space-between;
  align-items:center;

  h1{
      font-family:"Righteous", sans-serif;
      cursor:pointer;
  }

  h2{
    font-family:"Raleway", sans-serif;
    font-weight:400;
  }
`;

export const GridContainer = styled.div`
  padding:0 72px;
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:10px;
`;

export const LeftColumn = styled.div`
    font-family:"Raleway", sans-serif;
    font-weight:400;

  .address-group{
    margin-top:17px;
    input{
        width:100%;
    }
  }

  .city-group{
    display:flex;
    gap:11px;

    div:nth-child(2){
        input{
            width:100%;
        }
    }

    div:nth-child(3){
        input{
            width:100%;
        }
    }
  }

  .cell-group{
    input{
        width:172px;
    }
  }
`;

export const RightColumn = styled.div`
  padding:18px 21px;
  background-color:#fff;
  max-height:338px;
  font-family:"Raleway", sans-serif;
`;

export const RightColumnArea = styled.div`
  h3{
    border-bottom:1px solid #D9D9D9;
    padding-bottom:25px;
  }
`;

export const ProductDescription = styled.div`
    padding:18px 0;
    border-bottom:1px solid #D9D9D9;
    font-size:15px;

    span{
    display:flex;
    justify-content: space-between;
    margin-bottom:7px;

    p:nth-child(1){
        font-weight:500
    }

    p:nth-child(2){
        font-weight:400
    }
  }

  span:nth-child(2) p:nth-child(2){
    color:red;
  }
`;

export const TotalArea = styled.div`
  display:flex;
  justify-content: space-between;
  font-weight:700;
  padding-top:12px;
`;

export const CheckoutButton = styled.button`
  width:389px;
  height:41px;
  background: #1C232C;
  color:white;
  display:flex;
  align-items:center;
  justify-content: center;
  border:0;
  font-weight:700;
  font-family: inherit;
  font-size:15px;
  margin-top:40px;
  cursor:pointer;
`;