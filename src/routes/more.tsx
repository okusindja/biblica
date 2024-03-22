import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  MoreScreen,
  ProfileScreen,
  SettingsScreen,
  UserInfoScreen,
} from '../screens';

export const Stack = createNativeStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={MoreScreen} />
      <Stack.Screen name="Definições" component={SettingsScreen} />
      <Stack.Screen name="Perfil" component={ProfileScreen} />
      <Stack.Screen name="Informações" component={UserInfoScreen} />
    </Stack.Navigator>
  );
};

export default MoreStack;
