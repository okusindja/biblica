import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackNavigatorProps = {
  Início: undefined;
  Púlpito: undefined;
  Mais: undefined;
  Conteúdo: undefined;
  Home: undefined;
  Turmas: undefined;
  Ensinos: undefined;
  Livraria: undefined;
  Evangelho: undefined;
  MoreStack: undefined;
  Perfil: undefined;
  Definições: undefined;
  Informações: undefined;
  'Planos de oração': undefined;
  'Planos de meditação': undefined;
  'Solicitar aconselhamento': undefined;
  Turma: { title: string; author: string; category: string; image: string };
  Aula: { title: string; image: string };
  Avaliação: { title: string; image: string };
};

export type StackTypes = NativeStackNavigationProp<StackNavigatorProps>;

export type TurmaProps = RouteProp<StackNavigatorProps, 'Turma'>;
export type AulaProps = RouteProp<StackNavigatorProps, 'Aula'>;
export type AvaliacaoProps = RouteProp<StackNavigatorProps, 'Avaliação'>;
