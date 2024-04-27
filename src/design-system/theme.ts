import { DefaultTheme } from 'react-native-paper';

export const theme = {
  colors: {
    smoke: '#E8E8E8',
    onSmoke: '#999999',
    paper: '#FDFDFD',
    pencil: '#333333',
    primary: '#E21F2C',
    secondary: '#00FFB3',
    terciary: '#389CFF',
    surface: '#0E263E',
    onSurface: '#AFD7FF',
    background: '#1C4E80',
    onBackground: '#ECF6FF',
    error: '#DFA5A7',
    surfaceVariant: ['#041526', '#1C4E80'],
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.11)',
    surfaceSecondaryVariant: ['#00FFB3', '#389CFF'],
  },
  fonts: {
    primary: 'Roboto',
    secondary: 'Roboto',
  },
};

export type ThemeType = typeof theme;

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    secondaryContainer: 'transparent',
  },
};
