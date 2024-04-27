import { Button, Input, Typography } from '@elements';
import useAuth from '@hooks/use-auth';
import {
  ClosedEyeSVG,
  EyeSVG,
  LogoSVG,
  PasswordSVG,
  RightArrowSVG,
  UserSecuredSVG,
} from '@svg';
import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { AuthPagesProps } from '../auth.types';
import { styles } from './styles';

const Login: FC<Omit<AuthPagesProps, 'onPressLogin'>> = ({ onPressSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingLogin, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const {
    token,
    login,
    loading,
    invalidEmailError,
    wrongPasswordError,
    resetErrors,
  } = useAuth();

  const handleLogin = async () => {
    setLoading(loading);
    await login(email, password);
    setLoading(loading);
  };

  console.log('Token Login', token);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logo}>
        <LogoSVG maxWidth={scale(60)} maxHeight={verticalScale(108)} />
      </View>
      <View style={styles.titleWrapper}>
        <Typography variant="heading" size="l">
          Entrar
        </Typography>
      </View>
      <Input
        value={email}
        variant="white"
        inputMode="email"
        autoCapitalize="none"
        onFocus={resetErrors}
        Prefix={UserSecuredSVG}
        title="Email electrónico"
        placeholder="exemplo@gmail.com"
        onChangeText={(text) => setEmail(text)}
        inputErrorMessage={invalidEmailError ? 'Email inválido' : ''}
      />
      <Input
        title="Senha"
        variant="white"
        inputMode="text"
        value={password}
        placeholder="Senha"
        onFocus={resetErrors}
        Prefix={PasswordSVG}
        autoCapitalize="none"
        secureTextEntry={!visiblePassword}
        onChangeText={(text) => setPassword(text)}
        Suffix={visiblePassword ? EyeSVG : ClosedEyeSVG}
        onPressSuffix={() => setVisiblePassword(!visiblePassword)}
        inputErrorMessage={wrongPasswordError ? 'Senha incorreta' : ''}
      />
      <Text style={styles.textButton}>Esqueci-me da minha senha</Text>
      <Button
        title={loadingLogin ? <ActivityIndicator /> : 'Entrar'}
        variant="secondary"
        onPress={handleLogin}
      />
      <View style={{ marginBottom: scale(20) }}>
        <Button
          title="Ainda não tenho uma conta. Criar conta"
          onPress={onPressSignUp}
          variant="text"
          Suffix={RightArrowSVG}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
