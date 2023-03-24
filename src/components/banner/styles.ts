import styled from 'styled-components/native';

interface Props {
  size?: string;
}

export const Container = styled.ImageBackground`
  width: 100%;
  height: ${({size}: Props) => size === 'L' ? '200px' : 
  size === 'M' ? '100px' : 
  size === 'S' ? '50px' : 
  ''};
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #000;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Overlay = styled.View`
  background-color: #000;
  opacity: .3;
  width: 100%;
  justify-content: center;
  position: absolute;
  z-index: 1;
  align-items: center;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 39px;
  width: 75%;
  position: absolute;
  color: white;
  z-index: 2;
  font-family: 'UnifrakturCook_700Bold';
  text-align: center;
`;
