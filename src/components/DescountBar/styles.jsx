import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  width:100%;
  height:45px;
  background-color:${colors.primaryColor};
  display:flex;
  justify-content: center;
  align-items: center;

  p{
    color:white;
  }

  span{
    text-decoration: underline;
  }
`;
