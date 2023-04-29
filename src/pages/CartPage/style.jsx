import styled from "styled-components";
import colors from "../../constants/colors.js";

export const ContainerCartPage = styled.div`
  display: flex;
  margin: auto;
  height: 650px;
  h1{
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 28px;
  }
`
export const ContainerLeft = styled.div`
  width: 59%;
  border-right: 1px solid #D9D9D9;
  padding: 40px 46px 0px 31px;
`
export const ContainerRight = styled.div`
  width: 41%;
  padding: 40px 72px 0px 47px;
`
export const SectionBreak = styled.div`
  width: 100%;
  height: 1px;
  background-color: #D9D9D9;
`
export const TableDescriptions = styled.div`
  padding: 0 24px 0 0;
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
export const ContainerCart = styled.div`
  padding-top: 38px;
  max-height: 468px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
  }
`
export const Product = styled.div`
  height: 174px;
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  overflow:hidden;

  p{
    width: 80px;
    text-align: center;
  }
  img{
    width: 172px;
    position:relative;
    bottom:-20px;
  }

  span{
    font-weight: 500;
    width: 63px;
    text-align: end;
  }
  strong{
    display: flex;
    align-items: center;
    width: 150px;
    p{
    width: 120px;
    width: inherit;
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
  && ~ &&{
    margin-top: 25px;
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
    width: 294px;
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
    width: 137px;
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