import styled from "styled-components";
import colors from "../../constants/colors.js";

export const ContainerCartPage = styled.div`
  display: flex;
  margin: auto;
  min-height: 650px;
  h1{
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 28px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
export const ContainerLeft = styled.div`
  width: 100%;
  border-right: 1px solid #D9D9D9;
  padding: 40px 46px 0px 31px;
  @media (max-width: 1200px) {
    padding: 40px 30px 0px 30px;
  }
`
export const ContainerRight = styled.div`  
  max-width: 40%;
  padding: 40px 72px 0px 47px;
  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 60px 30px;
  }
`
export const SectionBreak = styled.div`
  width: 100%;
  height: 1px;
  background-color: #D9D9D9;
`
export const TableDescriptions = styled.tr`
  padding: 0 24px 0 0;
  height: 50px;
  position: sticky;
  top: 0;
  background-color: #FFFFFF;
  th{
    font-family: 'Raleway';
    font-weight: 500;
    font-size: 16px;
  }  
`
export const ContainerCart = styled.div`
  max-height: 600px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
  }
`
export const Product = styled.tr`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  td{
    text-align: center;
    padding-top: 15px;
    img{
      width: 172px;
      height: 174px;
    }
    span{
      font-weight: 500;
    }
    strong{
      display: flex;
      align-items: center;
      overflow: hidden;
      p{
      max-width: 250px;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: start;
      :hover{
        overflow: visible;
        white-space: break-spaces;
      }
      }
    }
    input{
      width: 63px;
      height: 38px;
      background: #FFFFFF;
      border: 1px solid #EAEAEA;
      text-align: center;
    }
  }
`
export const ContainerSubtotal = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
    font-family: 'Raleway';
    font-weight: 500;
    font-size: 16px;
  }
`
export const Coupon = styled.div`
  height: 147px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input{
    width: 100%;
    height: 43px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    padding-left: 21px;
    ::placeholder{
      font-family: 'Raleway';
      font-weight: 500;
      font-size: 16px;
      color: #B0B0B0;
    }
  }
  button{
    max-width: 137px;
    width: 100%;
    height: 43px;
    background: ${colors.primaryColor};
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
  }
`
export const ContainerToCheckout = styled.div`
  padding-top: 43px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  button{
    width: 431px;
    height: 57px;
    background: ${colors.primaryColor};
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 18px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 44px;
  }
`
export const ContainerTotal = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway';
  font-weight: 500;
  font-size: 16px;
  text-align: right;
  p{
    margin-bottom: 6px;
  }
`