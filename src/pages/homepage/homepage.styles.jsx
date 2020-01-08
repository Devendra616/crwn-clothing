import styled from 'styled-components';
import { device } from '../../devices';


export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;

    // reduce padding for smaller devices
  @media ${device.tablet} {
    padding: 10px 60px;
  }
`;