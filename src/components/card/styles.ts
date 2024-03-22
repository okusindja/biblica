import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
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

export const styles = StyleSheet.create({
  container: {
    height: 270,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  title: {
    paddingHorizontal: scale(60),
    paddingVertical: scale(20),
    textAlign: 'center',
  },
  postFooterContent: {
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    gap: scale(25),
  },
  titleWrapper: {
    zIndex: 2,
    paddingHorizontal: scale(30),
    paddingVertical: scale(15),
  },
  info: {
    flexDirection: 'row',
    gap: scale(7),
    alignItems: 'center',
  },
  overlay: {
    zIndex: 1,
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.45,
    backgroundColor: 'black',
    position: 'absolute',
  },
});
