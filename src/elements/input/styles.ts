import styled from 'styled-components/native';

interface Props {
  mb?: string;
}

export const InputElement = styled.TextInput`
  padding: 15px;
  border-radius: 7px;
  margin-bottom: ${({mb}: Props) => mb };
  background: #f0f0f0;
`;