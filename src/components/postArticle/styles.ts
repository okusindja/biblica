import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 130px;
  padding: 30px 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const PostImage = styled.ImageBackground`
  width: 90px;
  height: 90px;
  overflow: hidden;
  margin-right: 20px
  border-radius: 10px;
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: #e0e0e0;
  `;

export const PostText = styled.View`
  flex: 1;
  height: 90px;
  justify-content: space-between;
`;

export const TitleWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: gray;
  max-width: 70%;
  font-size: 14px;
  font-weight: bold;
`;

export const PostFooter = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: row;
  gap: 20px;
`;

export const PostFooterContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const PostFooterText = styled.Text`
    color: #afafaf;
    font-size: 12px;
    margin-left: 7px;
`;

