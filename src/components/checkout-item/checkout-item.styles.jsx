import styled from 'styled-components';
import { device } from '../../devices';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 10px 0;
    font-size: 16px;
    align-items: center;

    @media ${device.tablet} { 
        padding: 15px 0;
        font-size: 20px;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
  
      img {
        width: 100%;
        height: 100%;
      }
`;

export const TextContainer = styled.span`
    width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
    display: flex;

    span {
        margin: 0 15px;

        @media ${device.tablet} { 
            margin: 0 10px;
        }
    }

    div {
        cursor: pointer;
    }
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 5px;
    cursor: pointer;

    @media ${device.tablet} { 
        padding-left: 12px;
     }
`;