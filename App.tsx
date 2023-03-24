import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import AppLoading from 'expo-app-loading';
import { useFonts, UnifrakturCook_700Bold } from '@expo-google-fonts/unifrakturcook';
import { Teko_400Regular, Teko_700Bold } from '@expo-google-fonts/teko'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clf1g63xp2sx801ug9ymbepeg/master",
  cache: new InMemoryCache(),
})

export default function App() {

  let [fontsLoaded] = useFonts({
    UnifrakturCook_700Bold
  }
  );
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </NavigationContainer>
    </ApolloProvider>
  );
}
