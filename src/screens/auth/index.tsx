import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import React, { FC, useState } from 'react';
import { Text } from 'react-native';

import AuthLayout from '../../components/layout/auth-layout';
import Login from './forms/login';
import SignIn from './forms/sign-up';
import Welcome from './welcome';

const Auth: FC = () => {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  const handleLoginPage = () => {
    setIsWelcome(false);
    setIsSignUp(false);
    setIsLogin(true);
  };

  const handleSignUpPage = () => {
    setIsWelcome(false);
    setIsLogin(false);
    setIsSignUp(true);
  };

  return (
    <AuthLayout variant={isLogin ? 'white' : 'red'}>
      {isWelcome && (
        <Welcome
          onPressLogin={handleLoginPage}
          onPressSignUp={handleSignUpPage}
        />
      )}
      {isSignUp && <SignIn onPressLogin={handleLoginPage} />}
      {isLogin && <Login onPressSignUp={handleSignUpPage} />}
    </AuthLayout>
  );
};

export default Auth;
