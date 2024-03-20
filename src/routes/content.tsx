import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens';
import Advices from '../screens/home/advices';
import Classes from '../screens/home/classes';
import ClassDetails from '../screens/home/classes/class-details';
import Contents from '../screens/home/contents';
import Evaluation from '../screens/home/evaluation';
import Gospel from '../screens/home/gospel';
import Meditation from '../screens/home/meditation';
import Praying from '../screens/home/praying';
import Teachings from '../screens/home/teachings';

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
    </Stack.Navigator>
  );
};

export default ContentStack;
