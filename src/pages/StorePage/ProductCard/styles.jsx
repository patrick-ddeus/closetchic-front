import styled from 'styled-components';

export const Product = styled.div`
  font-family:"Raleway", sans-serif;
  color:black;
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
    margin-top:24px;
    margin-bottom:42px;
    display:flex;
    flex-direction: column;

  h3{
    font-size:20px;
    font-family:600;
    width:280px;
    height:45px;
  }

  div{
    margin-top:10px;
  }

  p{
    margin-top:10px;
    font-size:20px;
    font-weight:500;
  }
`;