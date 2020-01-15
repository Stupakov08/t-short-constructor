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
  width: 140px;
  height: 140px;
  background: url(${props => props.url});
  background-size: cover;
  position: absolute;
  top: 80px;
  left: 130px;
  opacity: 0.9;
`;
export const ControllWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

`;
export const PushDown = styled.div`
  margin-top: auto;
`;