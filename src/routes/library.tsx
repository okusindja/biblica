import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LibraryScreen, WelcomeScreen } from '../screens';

export const Stack = createNativeStackNavigator();

const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Iniício" component={LibraryScreen} />
    </Stack.Navigator>
  );
};

export default LibraryStack;
