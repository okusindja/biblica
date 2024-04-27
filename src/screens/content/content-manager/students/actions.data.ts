import { scale } from 'react-native-size-matters';

export const TABLE_HEADER = ['Aluno', 'Nota', 'Frequência', 'Situação'];
export const TABLE_DATA = [
  {
    aluno: 'João',
    nota: '10',
    frequencia: '100%',
    situacao: 'APR',
  },
  {
    aluno: 'Maria',
    nota: '90',
    frequencia: '90%',
    situacao: 'APR',
  },
  {
    aluno: 'José',
    nota: '50',
    frequencia: '50%',
    situacao: 'REP',
  },
  {
    aluno: 'Ana',
    nota: '70',
    frequencia: '70%',
    situacao: 'APR',
  },
  {
    aluno: 'Pedro',
    nota: '60',
    frequencia: '60%',
    situacao: 'REP',
  },
];

export const COLUMN_WIDTHS = [scale(70), scale(70), scale(70), scale(70)];
