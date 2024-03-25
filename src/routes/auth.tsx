import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserInfoScreen, WelcomeScreen } from '../screens';

export type AuthStackParams = {
  Welcome: undefined;
  Informações: undefined;
};

export const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Informações" component={UserInfoScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
