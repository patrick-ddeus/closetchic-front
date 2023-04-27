import styled from 'styled-components';
import "@fontsource/raleway";

export const Container = styled.div`
  padding:0 72px;
`;

export const Products = styled.div`
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  padding:0 72px;
  margin-bottom:140px;
`;

export const Product = styled.div`
  font-family:"Raleway", sans-serif;
`;

export const ProductImage = styled.div`
  background-color:#D9D9D9;
  width:285px;
  height:350px;
  position:relative;
  border-radius:15px;
  cursor:pointer;

  img{
    object-fit: cover;
    object-position: center;
    position:absolute;
    bottom:0;
  }
`;

export const ProductDescription = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:24px;
    margin-bottom:42px;

  h4{
    font-size:20px;
    font-family:600;
  }

  p{
    font-size:17px;
  }
`;