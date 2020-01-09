import styled from 'styled-components';
import { device } from '../../devices';

export const CheckoutPageContainer = styled.div`
    width: 97%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    button {
      margin-left: auto;
      margin-top: 50px;
      width:100%;
    }

    @media ${device.tablet} { 
        width: 55%;

    button {
            margin-left: auto;
            margin-top: 50px;
            width:inherit;
        }
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
     width: 8%;
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 28px;

    @media ${device.tablet} { 
        font-size: 36px;
    }
`;

export const TestWarning = styled.div`
    color: red;
    font-size: 18px;
    text-align: center;
    margin-top: 40px;

    @media ${device.tablet} { 
        font-size: 24px;
    }
`;