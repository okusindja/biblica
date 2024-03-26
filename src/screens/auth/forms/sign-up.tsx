import { Button, Input, Typography } from '@elements';
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  ClosedEyeSVG,
  EyeSVG,
  LogoSVG,
  PasswordSVG,
  RightArrowSVG,
  UserSecuredSVG,
} from '@svg';
import { useFonts } from 'expo-font';
import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import useAuth from '../../../hooks/use-auth';
import { AuthPagesProps } from '../auth.types';
import { styles } from './styles';

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
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logo}>
        <LogoSVG
          maxWidth={scale(60)}
          maxHeight={verticalScale(108)}
          secondary
        />
      </View>
      <View style={styles.titleWrapper}>
        <Typography variant="heading" themeColor="white" size="l">
          Criar Conta
        </Typography>
      </View>
      <Input
        value={email}
        inputMode="email"
        variant="red"
        title="Email electrónico"
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
        inputMode="text"
        title="Senha"
        placeholder="Senha"
        Prefix={PasswordSVG}
        autoCapitalize="none"
        secureTextEntry={true}
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
        title="Confirmar senha"
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
      <Button
        title={loadingSignUp ? <ActivityIndicator /> : 'Criar Conta'}
        onPress={handleCreateUser}
        variant="primary"
      />

      <Button
        title="Já tenho uma conta. Fazer Login"
        themeColor="white"
        onPress={onPressLogin}
        variant="text"
        Suffix={RightArrowSVG}
      />
    </KeyboardAvoidingView>
  );
};

export default SignUp;
