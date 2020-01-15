import styled from 'styled-components';

export const Controll = styled.div`
`;
export const ControllTitle = styled.div`
    font-size: 20px;
    color: #202020;
    margin-top: 10px;
`;
export const ControllVariants = styled.div`
    height: 50px;
    margin-top: 10px;
    display: flex;
`;
export const ControllVariant = styled.div`
    height: 50px;
    min-width: 50px;
    border: 1px solid rgb(0,0,0,0.1);
    background: url(${props => props.url});
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 5px;
    box-sizing: border-box;
    cursor: pointer;
    ${
    props => props.active ?
        `border: 1px solid rgb(0,0,255,0.5); box-shadow: 0px 1px 3px rgba(0,0,0,0.2)` :
        ""
    };
`;