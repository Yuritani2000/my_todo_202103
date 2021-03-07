import styled from 'styled-components';
import { Color } from '../../../../styles/Color';

export const Parent = styled.div(() => `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 11;
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background: ${Color.White};
`);

export const Container = styled.div(()=> `
    width: 800px;
`);