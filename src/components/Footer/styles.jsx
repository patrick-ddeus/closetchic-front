import styled from 'styled-components';
import "@fontsource/raleway";
import "@fontsource/righteous";

export const Container = styled.div`
  height:280px;
  width:100%;
  background-color:#EAEEF2;

  @media screen and (max-width:1100px){
    background-color:transparent;
  }
`;

export const GridContainer = styled.div`
  display:grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;

  @media screen and (max-width:1100px){
    display:none;
  }

`;

export const BrandContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 71px 72px;

  h4{
    font-family:"Righteous", sans-serif;
    font-size:30px;
    font-weight:400;
  }

  p{
    color: #8E8E8E;
    margin-top:16px;
  }
`;

export const Column = styled.div`
  padding-top:55px;

  h4{
    font-family:"Raleway", sans-serif;
    font-weight: 600;
    margin-bottom:21px;
    color:#3C3C3C;
    font-size:19px;
  }

  li{
    color:#8E8E8E;
    cursor:pointer;
    margin-bottom:10px;
  }

  img{
    width:150px;
  }
`;

export const CopyrightContainer = styled.div`
  text-align: center;
  height:69px;
  display:flex;
  align-items:center;
  justify-content: center;
  border-top:1px solid #D3D3D3;
  margin:0 72px;

  p{
    color:#8E8E8E;
  }

  @media screen and (max-width:1100px){
    display:none;
  }
`;

export const ResponsiveFooter = styled.div`
  height:60px;
  width:100%;
  border-top: 1px solid #f0f0f0;
  background-color:white;
  position:fixed;
  bottom:0;
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding:0 72px;
  font-size:28px;
  z-index:20;

  svg{
    cursor:pointer;
  }

  @media screen and (min-width:1100px){
    display:none;
  }
`;