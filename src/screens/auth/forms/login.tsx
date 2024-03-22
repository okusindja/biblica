import { signInWithEmailAndPassword } from 'firebase/auth';
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

const Login: FC<Omit<AuthPagesProps, 'onPressLogin'>> = ({ onPressSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const user = FIREBASE_AUTH.currentUser;

  console.log(user);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: '#4A4A4A' }]}>Entrar</Text>
      <KeyboardAvoidingView
        style={{ alignItems: 'center', gap: scale(5) }}
        behavior="padding"
      >
        <Input
          value={email}
          variant="white"
          placeholder="Email"
          autoCapitalize="none"
          Prefix={UserSecuredSVG}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          variant="white"
          value={password}
          placeholder="Senha"
          Prefix={PasswordSVG}
          autoCapitalize="none"
          secureTextEntry={!visiblePassword}
          onChangeText={(text) => setPassword(text)}
          Suffix={visiblePassword ? EyeSVG : ClosedEyeSVG}
          onPressSuffix={() => setVisiblePassword(!visiblePassword)}
        />
        <Text style={styles.textButton}>Esqueci-me da minha senha</Text>

        {loading ? (
          <ActivityIndicator />
        ) : (
          <Pressable
            onPress={handleLogin}
            style={[styles.button, { backgroundColor: '#E21F2C' }]}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        )}
        <Pressable style={authStyles.buttomTextWrapper} onPress={onPressSignUp}>
          <Text style={styles.textButton}>
            Ainda não tenho uma conta. Criar conta
          </Text>
          <RightArrowSVG
            maxWidth={scale(24)}
            maxHeight={scale(24)}
            color="#646464"
          />
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
