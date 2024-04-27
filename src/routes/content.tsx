import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContentManager from '@screens/content/content-manager';
import StudentsManager from '@screens/content/content-manager/students';
import React from 'react';

import { HomeScreen } from '../screens';
import Advices from '../screens/content/advices';
import Classes from '../screens/content/classes';
import ClassDetails from '../screens/content/classes/class-details';
import Contents from '../screens/content/contents';
import Evaluation from '../screens/content/evaluation';
import Gospel from '../screens/content/gospel';
import Meditation from '../screens/content/meditation';
import Praying from '../screens/content/praying';
import Teachings from '../screens/content/teachings';

export const Stack = createNativeStackNavigator();

const ContentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Turma" component={ClassDetails} />
      <Stack.Screen name="Aula" component={Contents} />
      <Stack.Screen name="Avaliação" component={Evaluation} />
      <Stack.Screen name="Turmas" component={Classes} />
      <Stack.Screen name="Evangelho" component={Gospel} />
      <Stack.Screen name="Ensinos" component={Teachings} />
      <Stack.Screen name="Planos de meditação" component={Meditation} />
      <Stack.Screen name="Planos de oração" component={Praying} />
      <Stack.Screen name="Solicitar aconselhamento" component={Advices} />
      <Stack.Screen name="Gestor de conteúdo" component={ContentManager} />
      <Stack.Screen name="Gestão de alunos" component={StudentsManager} />
    </Stack.Navigator>
  );
};

export default ContentStack;
