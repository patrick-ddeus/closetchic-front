import styled from 'styled-components';
import "@fontsource/raleway";
import "@fontsource/righteous";

export const Container = styled.div`
  height:280px;
  width:100%;
  background-color:#EAEEF2;
`;

export const GridContainer = styled.div`
  display:grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;

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
`;