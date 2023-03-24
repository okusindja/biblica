import Gospel from '../screens/home/gospel';
import Teachings from '../screens/home/teachings';
import Praying from '../screens/home/praying';
import Meditation from '../screens/home/meditation';
import Advices from '../screens/home/advices';
import { Home } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type ContentStackParams = {
  Home: undefined;
  Evangelho: undefined;
  Ensinos: undefined;
  'Planos de meditação': undefined;
  'Planos de oração': undefined;
  'Solicitar aconselhamento': undefined;
};
  
export const ContentStack = createNativeStackNavigator<ContentStackParams>();

export function Content() {
  return (
    <ContentStack.Navigator initialRouteName='Home' 
    screenOptions={{headerShown: false}}
    >
      <ContentStack.Screen
        name="Home"
        component={Home}
      />
      <ContentStack.Screen
        name="Evangelho"
        component={Gospel}
      />
      <ContentStack.Screen
        name="Ensinos"
        component={Teachings}
      />
      <ContentStack.Screen
        name="Planos de meditação"
        component={Meditation}
      />
      <ContentStack.Screen
        name="Planos de oração"
        component={Praying}
      />
      <ContentStack.Screen
        name="Solicitar aconselhamento"
        component={Advices}
      />
    </ContentStack.Navigator>
  );
}