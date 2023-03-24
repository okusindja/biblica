import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const AuthorPhoto = styled.View`
    width: 200px;
    height: 200px;
    background-color: white;
    margin: 35px 0;
    border-radius: 200px;
    overflow: hidden;
    border: 2px solid #E21F2C;
    `;

export const Photo = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

export const PreacherName = styled.Text`
    font-size: 16px;
    color: #a9a9a9;
    margin-bottom: 30px
`;

export const PreachingSubject = styled.Text`
    font-family: 'UnifrakturCook_700Bold';
    font-size: 35px;
    color: #a9a9a9;
`;

export const Player = styled.View`
    width: 100%;
    height: 100px;
    background: #E21F2C;
    margin-top: auto;
    justify-content: center;
    align-items: center;
`;


