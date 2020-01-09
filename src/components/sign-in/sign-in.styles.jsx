import styled from 'styled-components';
import { device } from '../../devices';

export const SignInContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    @media ${device.tablet} { 
        margin-top:inherit;   
        font-size: 1em;
        width: 380px;
        padding: 10px 15px;
        font-weight:normal;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SignInTitle = styled.h2`
    margin: 10px 0;
`;