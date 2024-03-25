import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  Text,
  View,
} from 'react-native';
import { scale } from 'react-native-size-matters';

import {
  ClosedEyeSVG,
  EyeSVG,
  PasswordSVG,
  RightArrowSVG,
  UserSecuredSVG,
} from '../../../components/svg';

import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { AuthPagesProps } from '../auth.types';
import { styles as authStyles } from '../styles';
import { styles } from './styles';
import { Input, Typography } from '../../../elements';
import useAuth from '../../../hooks/use-auth';

const SignUp: FC<Omit<AuthPagesProps, 'onPressSignUp'>> = ({
  onPressLogin,
}) => {
  const {
    createUser,
    weakPasswordError,
    emailInUseError,
    missingPasswordError,
    loading,
    resetErrors,
    invalidEmailError,
  } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [loadingSignUp, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  const handleCreateUser = async () => {
    setLoading(loading);
    if (password === confirmPassword) {
      createUser(email, password);
    } else {
      setConfirmPasswordError(true);
    }
    setLoading(loading);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Typography variant="heading" themeColor="white" size="l">
          Criar Conta
        </Typography>
      </View>
      <KeyboardAvoidingView
        style={{ alignItems: 'center', gap: scale(5) }}
        behavior="padding"
      >
        <Input
          value={email}
          variant="red"
          inputErrorMessage={
            invalidEmailError
              ? 'Escreva um email válido'
              : emailInUseError
                ? 'Este email já encontra-se em uso'
                : ''
          }
          placeholder="Email"
          autoCapitalize="none"
          Prefix={UserSecuredSVG}
          onFocus={() => {
            resetErrors();
          }}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          variant="red"
          value={password}
          placeholder="Senha"
          Prefix={PasswordSVG}
          autoCapitalize="none"
          secureTextEntry={!visiblePassword}
          onChangeText={(text) => setPassword(text)}
          onFocus={() => {
            resetErrors();
          }}
          inputErrorMessage={
            missingPasswordError
              ? 'A sua senha é obrigatória'
              : weakPasswordError
                ? 'A sua senha deve ter no mínimo 6 caracteres'
                : ''
          }
        />
        <Input
          variant="red"
          inputErrorMessage={
            confirmPasswordError
              ? 'A sua senha deve ser devidamente confirmada'
              : ''
          }
          Prefix={PasswordSVG}
          autoCapitalize="none"
          value={confirmPassword}
          placeholder="Confirmar senha"
          secureTextEntry={!visiblePassword}
          onFocus={() => setConfirmPasswordError(false)}
          Suffix={visiblePassword ? EyeSVG : ClosedEyeSVG}
          onChangeText={(text) => setConfirmPassword(text)}
          onPressSuffix={() => setVisiblePassword(!visiblePassword)}
        />

        <Pressable
          onPress={handleCreateUser}
          style={[styles.button, { backgroundColor: 'black' }]}
        >
          {loadingSignUp ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>Criar conta</Text>
          )}
        </Pressable>
        <Pressable style={authStyles.buttomTextWrapper} onPress={onPressLogin}>
          <Text style={styles.buttonText}>Já tenho uma conta. Fazer Login</Text>
          <RightArrowSVG
            maxWidth={scale(24)}
            maxHeight={scale(24)}
            color="white"
          />
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
