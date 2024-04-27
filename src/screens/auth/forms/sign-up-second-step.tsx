import { Button, Input } from '@elements';
import {
  ClosedEyeSVG,
  EyeSVG,
  PasswordSVG,
  RightArrowSVG,
  UserSecuredSVG,
} from '@svg';
import React, { FC, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { SignUpSecondStepProps } from './forms.types';

const SignUpSecondStep: FC<SignUpSecondStepProps> = ({
  email,
  password,
  setEmail,
  isDisabled,
  setPassword,
  resetErrors,
  onPressLogin,
  handleSubmit,
  loadingSignUp,
  confirmPassword,
  emailInUseError,
  setConfirmPassword,
  invalidEmailError,
  weakPasswordError,
  confirmPasswordError,
  missingPasswordError,
  setConfirmPasswordError,
}) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <View>
      <Input
        value={email}
        variant="red"
        inputMode="email"
        placeholder="Email"
        autoCapitalize="none"
        Prefix={UserSecuredSVG}
        title="Email electrónico"
        inputErrorMessage={
          invalidEmailError
            ? 'Escreva um email válido'
            : emailInUseError
              ? 'Este email já encontra-se em uso'
              : ''
        }
        onFocus={() => {
          resetErrors();
        }}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        variant="red"
        title="Senha"
        value={password}
        inputMode="text"
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
        variant="primary"
        onPress={handleSubmit}
        isDisabled={isDisabled}
        title={
          loadingSignUp ? (
            <ActivityIndicator />
          ) : !isDisabled ? (
            'Inscrever-se'
          ) : (
            'Preencha os campos'
          )
        }
      />

      <Button
        variant="text"
        themeColor="white"
        Suffix={RightArrowSVG}
        onPress={onPressLogin}
        title="Já tenho uma conta. Fazer Login"
      />
    </View>
  );
};

export default SignUpSecondStep;
