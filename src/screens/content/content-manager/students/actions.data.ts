import { scale } from 'react-native-size-matters';

export const TABLE_HEADER = ['ID', 'Aluno', 'Nota', 'Frequencia', 'Situacao'];
export const TABLE_DATA = [
  {
    id: 1,
    aluno: 'João',
    nota: 10,
    frequencia: 100,
    situacao: 'APR',
  },
  {
    id: 2,
    aluno: 'Maria',
    nota: 9,
    frequencia: 90,
    situacao: 'APR',
  },
  {
    id: 3,
    aluno: 'José',
    nota: 5,
    frequencia: 50,
    situacao: 'REP',
  },
  {
    id: 4,
    aluno: 'Ana',
    nota: 7,
    frequencia: 70,
    situacao: 'APR',
  },
  {
    id: 5,
    aluno: 'Pedro',
    nota: 6,
    frequencia: 60,
    situacao: 'REP',
  },
  {
    id: 6,
    aluno: 'Manuel',
    nota: 6,
    frequencia: 60,
    situacao: 'REP',
  },
  {
    id: 7,
    aluno: 'Filipe',
    nota: 6,
    frequencia: 60,
    situacao: 'REP',
  },
  {
    id: 8,
    aluno: 'António',
    nota: 6,
    frequencia: 60,
    situacao: 'REP',
  },
];

export const COLUMN_WIDTHS = [
  scale(30),
  scale(70),
  scale(70),
  scale(95),
  scale(70),
];
