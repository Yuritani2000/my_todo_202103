import styled from 'styled-components';

export const Parent = styled.div(()=> `
    width: 100%;
    display: flex;
    justify-content: center;
`);

export const Container = styled.div(()=> `
    width: 800px;
`);

type MarginBoxProps = {
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

export const MarginBox = styled.div<MarginBoxProps>((props)=> `
    margin-top: ${props.marginTop ? props.marginTop + 'px' : '0px'};
    margin-right: ${props.marginRight ? props.marginRight + 'px' : '0px'};
    margin-bottom: ${props.marginBottom ? props.marginBottom + 'px' : '0px'};
    margin-left: ${props.marginLeft ? props.marginLeft + 'px' : '0px'};
`);