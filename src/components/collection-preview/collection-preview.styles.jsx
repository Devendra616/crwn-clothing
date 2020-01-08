import styled from 'styled-components';
import { device } from '../../devices';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    text-align:center;

    /* switch to left align for larger devices*/
  @media ${device.tablet} {
    text-align:left;
  } 

    &:hover {
        color: grey;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction:column;

/* switch for larger devices*/
  @media ${device.tablet} {
    flex-direction:row;
  } 
`;