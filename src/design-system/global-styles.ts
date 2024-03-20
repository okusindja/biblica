import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  gap: string;
  align?:
    | 'center'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  mh?: string | number;
  hasLine?: boolean;
}

export const GapBox = styled.View<Props>`
  gap: ${({ gap }) => gap};
`;

export const Row = styled.View<Props>`
  align-items: center;
  flex-direction: row;
  gap: ${({ gap }) => gap};
  margin: ${({ mh }) => mh} 0;
  justify-content: ${({ align }) => align};
  border-style: ${({ hasLine }) => (hasLine ? 'solid' : 'none')};
  border-color: ${({ hasLine }) => (hasLine ? '#e0e0e0' : 'none')};
  padding-bottom: ${({ hasLine }) => (hasLine ? '10px' : 'none')};
  border-bottom-width: ${({ hasLine }) => (hasLine ? '1px' : 'none')};
`;

export const globalStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    padding: 10,
    width: '100%',
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
