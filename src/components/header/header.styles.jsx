import {Link} from 'react-router-dom';
import styled,{css} from 'styled-components';
import { device } from '../../devices';

/* For sharing styles that may be duplicated */
const OptionContainerStyles =  css`
    padding: 10px 10px;
    cursor: pointer;
    font-size: 0.9em;
    font-weight:bold;

    @media ${device.tablet} {    
        font-size: 1em;
        padding: 10px 15px;
        font-weight:normal;
    }
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 50px;
    padding: 15px;

 /*  for larger devices */
  @media ${device.tablet} {    
    width: 70px;
    padding: 25px;
  }
`;

export const OptionsContainer = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    /*  for larger devices */
  @media ${device.tablet} {    
    width: 50%;    
  }
`;

export const OptionContainerLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionContainerDiv = styled.div`
    ${OptionContainerStyles}
`;