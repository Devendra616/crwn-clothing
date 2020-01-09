import styled from 'styled-components';
import { device } from '../../devices';


export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 5px;

    /* increase padding for larger devices */
  @media ${device.tablet} {    
    padding: 20px 80px;
  }
`;