import styled from 'styled-components';
import { device } from '../../devices';

export const SignInAndSignUpContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    flex-direction:column;
    
    @media ${device.tablet} {   
        width: 850px; 
        margin : 30px auto;
        flex-direction:row;
    }
`;