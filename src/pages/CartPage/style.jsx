import styled from "styled-components";

export const ContainerCartPage = styled.div`
  display: flex;
  margin: auto;  
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
  padding: 80px 46px 0px 31px;  
`
export const ContainerRight = styled.div`
  width: 41%;
  padding: 80px 72px 0px 47px;
`
export const SectionBreak = styled.div`
  width: 100%;
  height: 1px;
  background-color: #D9D9D9;
`
export const TableDescriptions = styled.div`
  padding: 0 22px 0 234px;  
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Product = styled.div`
  height: 174px;
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
  input{

  }
  button{
    
  }
`