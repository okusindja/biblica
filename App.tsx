import 'react-native-gesture-handler';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import AppLoading from 'expo-app-loading';
import {
  UnifrakturCook_700Bold,
  useFonts,
} from '@expo-google-fonts/unifrakturcook';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { FIREBASE_AUTH } from './src/FirebaseConfig';
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
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const auth = FIREBASE_AUTH;
  const [fontsLoaded] = useFonts({
    UnifrakturCook_700Bold,
  });

  // Handle user state changes
  function onStateChanged(user: User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  console.log('User:', user);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar style="auto" />
        {user?.uid ? (
          <SafeAreaView style={{ flex: 1 }}>
            <Routes />
          </SafeAreaView>
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </ApolloProvider>
  );
}
