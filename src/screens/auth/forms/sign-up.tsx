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
import { Input } from '../../../elements';

const SignUp: FC<Omit<AuthPagesProps, 'onPressSignUp'>> = ({
  onPressLogin,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [missingPasswordError, setMissingPasswordError] = useState(false);
  const [weakPasswordError, setWeakPasswordError] = useState(false);
  const [invalidEmailError, setInvalidEmailError] = useState(false);
  const [emailInUseError, setEmailInUseError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const auth = FIREBASE_AUTH;

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  const handleErrors = (error: FirebaseError) => {
    switch (error.code) {
      case 'auth/missing-password':
        setMissingPasswordError(true);
        setWeakPasswordError(false);
        setInvalidEmailError(false);
        setEmailInUseError(false);
        setConfirmPasswordError(false);
        break;
      case 'auth/weak-password':
        setWeakPasswordError(true);
        setMissingPasswordError(false);
        setInvalidEmailError(false);
        setEmailInUseError(false);
        setConfirmPasswordError(false);
        break;
      case 'auth/invalid-email':
        setInvalidEmailError(true);
        setWeakPasswordError(false);
        setEmailInUseError(false);
        setMissingPasswordError(false);
        setConfirmPasswordError(false);
        break;
      case 'auth/email-already-in-use':
        setEmailInUseError(true);
        setInvalidEmailError(false);
        setWeakPasswordError(false);
        setMissingPasswordError(false);
        setConfirmPasswordError(false);
        break;
      default:
        console.error(error);
    }
  };

  const handleCreateUser = async () => {
    setLoading(true);
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        setConfirmPasswordError(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      handleErrors(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: 'white' }]}>Criar Conta</Text>
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
            setInvalidEmailError(false);
            setEmailInUseError(false);
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
            setConfirmPasswordError(false);
            setWeakPasswordError(false);
            setMissingPasswordError(false);
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
          {loading ? (
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
