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
  overflow: auto;
`;
export const RenderArea = styled.div`
  width: 50%;
  min-width: 280px;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 1px 0px 1px #00000010;
`;
export const RenderWrapper = styled.div`
  padding: 20px;
`;
export const Canvas = styled.div`
  max-width: 500px;
  width: 100%;
  height: 500px;
  background: url(${props => props.url});
  background-size: cover;
  margin: 0 auto;
  position: relative;
  background-position: center top;
`;
export const ImageCanvas = styled.div`
  width: 160px;
  height: 160px;
  background: url(${props => props.url});
  background-size: cover;
  position: absolute;
  top: 110px;
  left: 50%;
  opacity: 0.9;
  transform: translateX(-50%);
  `;
export const ControllWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;   
  flex-wrap: wrap;

`;
export const PushDown = styled.div`
  margin-top: auto;
`;