import 'react-native-gesture-handler';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { theme } from '@design-system/theme';
import { Typography } from '@elements';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  UnifrakturCook_700Bold,
  useFonts,
} from '@expo-google-fonts/unifrakturcook';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';

import useAuth from './src/hooks/use-auth';
import { AuthStack } from './src/routes';
import { Routes } from './src/routes/bottom-tabs';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clf1g63xp2sx801ug9ymbepeg/master',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzgzOTE2MjgsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xmMWc2M3hwMnN4ODAxdWc5eW1iZXBlZy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1zYS1lYXN0LTEuaHlncmFwaC5jb20vIiwic3ViIjoiOTlmODUxNDEtYzBmMi00NDA3LWJhOGMtMDJmMzA2NzQ3ZDgyIiwianRpIjoiY2xmMWoxZ3pkMndkbzAxdWpkNmJ6ODBnMSJ9.PNq5SlGaCZfSkKdYilep9I6-MRgsxLpClXVbJAPbTyTUxdDzbIxKVclvvxIfq0eHlYMmRf9KdG3bYkkk7WnhsPNM3cagH74GA5W4kGlD3pb8-l9miYarBzfIBwrLi07zBujYKq8TZmTiu7dmGhOU9dR6wXJwH_AMHLSnsFQfwgD7zb7jXPA1zwFamzt0SxftwhV2rZhDYSkQRUZj5CwkqXM_qi9R1sn9ZZK8fzx2p4pPDFKuZDLd0jCavBesd_HVVzAq82UstWDACDF9tI0ZFu9J7DUMoTj6T6iLaIMT9lfiyETNm3Eqm8hwcJzxLT4sJnAfuAwhduycAzjGxCXGOv4ETk7uM9pHRUrM7flqNyCDSOZYIpNUUf6L2Q5fk7tggeo4pJ68fb-o74RBT1W47Ud3To1xkq3NMeVcFzw3mxtuK0CimjEQdHytEfb24XhJTh-Cy13x5NqQNwSvj81fznSlBuG5TYZSuifm85GrgvZLahLBtI5b5fSlX2SE9vf1VuWu0yYuaFlWwpsgcqavzkuU_73LUDvAHMktOyDgQgEOXxRKDxUovyNWCdWh4zcqKIipnCNHZOdxOmAs5tjTRowIi4Nes8KEqTuDKlLD-bzRd3T9BFPCmbzFdt7r2V3xDhcDM5yFKfMH8F_ucoru2nEQisLFK4kMoDnhAvGU6uo',
  },
});

export default function App() {
  const { token, user, initializing } = useAuth();
  const [fontsLoaded] = useFonts({
    UnifrakturCook_700Bold,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (initializing) {
    return <Typography variant="paragraph">Loading...</Typography>;
  }

  if (!fontsLoaded) {
    return <Typography variant="paragraph">Loading...</Typography>;
  }

  console.log('User:', user);
  console.log('Token:', token);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar style="auto" />
          {token && user ? (
            <SafeAreaView style={{ flex: 1 }}>
              <Routes />
            </SafeAreaView>
          ) : (
            <AuthStack />
          )}
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}
