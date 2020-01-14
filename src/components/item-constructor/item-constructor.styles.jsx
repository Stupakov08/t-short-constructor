import styled from 'styled-components';

export const ConstructorArea = styled.div`
  width: 100%;
  min-height: 400px;
  margin: 20px auto;
  background: #fff;
  box-shadow: 0px 0px 2px 1px #00000010;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;
export const RenderArea = styled.div`
  width: 50%;
  heigth: 100%;
  box-shadow: 1px 0px 1px #00000010;
`;
export const RenderWrapper = styled.div`
  padding: 20px;
`;
export const Canvas = styled.div`
  width: 400px;
  height: 400px;
  background: url(${props => props.url});
  background-size: cover;
  margin: 0 auto;
  position: relative;
`;
export const ImageCanvas = styled.div`
  width: 200px;
  height: 200px;
  background: url(${props => props.url});
  background-size: cover;
  position: absolute;
  top: 50px;
  left: 100px;
  border: 1px solid green;
`;
export const ControllWrapper = styled.div`
  padding: 20px 40px;
`;
export const Controll = styled.div`
`;
export const ControllTitle = styled.div`
    font-size: 20px;
    color: #202020;
`;
export const ControllVariants = styled.div`
    height: 50px;
    margin-top: 10px;
    display: flex;
`;
export const ControllVariant = styled.div`
    height: 50px;
    width: 50px;
    border: 1px solid rgb(0,0,0,0.1);
    background: url(${props => props.url});
    background-size: contain;
    margin-right: 5px;
    box-sizing: border-box;
    cursor: pointer;
    ${
    props => props.active ?
        `border: 1px solid rgb(0,0,255,0.5);` :
        "none"
    };
`;