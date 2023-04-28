import styled from 'styled-components';
import "@fontsource/raleway";
import banner from "../../assets/men-banner.jpg";
export const Container = styled.div`
  padding:0 72px;
`;

export const Products = styled.div`
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  padding:0 72px;
`;

export const PaginationButton = styled.button`
  width:30px;
  height:30px;
  border:1px solid #1D242D;
  background-color:${({ active }) => active ? "#1D242D" : "#fff"};
  cursor:pointer;
  border-radius:5px;
  font-weight:700;
  color:${({ active }) => active ? "#fff" : "#1D242D"};
  font-size:"Raleway", sans-serif;
`;

export const PaginationArea = styled.div`
  display:flex;
  justify-content:center;
  gap:5px;
  margin-bottom:100px;
`;

export const BannerMen = styled.div`
  margin-top:-50px;
  margin-bottom:40px;
  height:350px;
  background: url(${banner});
  background-size:cover;
  background-position:0 -20px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  font-family: "Raleway";
  font-size:24px;
  text-align:left;
  padding-left:45px;
  font-style:italic;
`;