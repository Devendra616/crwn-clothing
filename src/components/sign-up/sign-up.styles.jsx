import styled from 'styled-components';
import { device } from '../../devices';

export const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    margin-top: 50px;

    @media ${device.tablet} { 
        margin-top:inherit;   
        font-size: 1em;
        width: 380px;
        padding: 10px 15px;
        font-weight:normal;
    }
`;

export const SignupTitle = styled.h2`
    margin: 10px 0;
`;