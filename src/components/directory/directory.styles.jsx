import styled from 'styled-components';
import { device } from '../../devices';

export const DirectoryMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* mobile friendly by default */
    flex-direction: column;
    justify-content: space-between;

    /* switch to rows for larger devices*/
  @media ${device.laptop} {
    flex-direction: row;
  }
`;