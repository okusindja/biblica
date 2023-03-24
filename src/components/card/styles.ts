import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  height: 270px;
  overflow: hidden;
  position: relative;
  align-items: center;
  border-radius: 10px;
  justify-content: flex-end;
  `;

export const Title = styled.Text`
  z-index: 2;
  color: white;
  font-size: 15px;
  padding: 20px 60px;
  text-align: center;
  font-weight: bold;
`;

export const PostFooterContent = styled.View`
  z-index: 2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

export const Info = styled.Text`
  color: white;
  font-size: 12px;
  margin-left: 7px;
  margin-right: 20px;
`;

export const Overlay = styled.View`
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0.45;
  background: black;
  position: absolute;
`;
