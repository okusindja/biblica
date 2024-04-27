import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '@hooks/use-auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';

import { LogoSVG } from '../components/svg';
import { PostsScreen, PreachPlaceScreen } from '../screens';
import ContentStack from './content';
import LibraryStack from './library';
import MoreStack from './more';

const Tab = createBottomTabNavigator();

type MaterialIconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>['name'];
let iconName: MaterialIconName;

export const Routes: FC = () => {
  const { token } = useAuth();

  console.log('Token:', token);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Início') {
            iconName = focused ? 'home-variant' : 'home-variant-outline';
          } else if (route.name === 'Conteúdo') {
            iconName = focused ? 'bookmark' : 'bookmark';
          } else if (route.name === 'Mais') {
            iconName = focused
              ? 'dots-vertical-circle'
              : 'dots-vertical-circle-outline';
          } else if (route.name === 'Púlpito') {
            iconName = focused ? 'microphone' : 'microphone';
          } else if (route.name === 'Livraria') {
            iconName = focused ? 'bookshelf' : 'bookshelf';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        headerRight: () => (
          <Pressable style={{ paddingRight: scale(20) }}>
            <Ionicons name="notifications" size={24} color="gray" />
          </Pressable>
        ),
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              // Do something
            }}
            style={{ paddingLeft: scale(20) }}
          >
            <LogoSVG maxWidth={30} maxHeight={42} />
          </TouchableOpacity>
        ),
        tabBarActiveTintColor: '#E21F2C',
        tabBarInactiveTintColor: 'gray',
        headerStyle: { height: 80 },
        headerTitleStyle: { fontSize: 18 },
      })}
    >
      <Tab.Screen name="Início" component={PostsScreen} />
      <Tab.Screen name="Conteúdo" component={ContentStack} />
      <Tab.Screen name="Livraria" component={LibraryStack} />
      <Tab.Screen name="Púlpito" component={PreachPlaceScreen} />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Mais"
        component={MoreStack}
      />
    </Tab.Navigator>
  );
};
