import { Button, DateInput, Input } from '@elements';
import { RightArrowSVG } from '@svg';
import React, { FC } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { SignUpFirstStepProps } from './forms.types';

const SignUpFirstStep: FC<SignUpFirstStepProps> = ({
  name,
  error,
  loading,
  setName,
  birthDate,
  isDisabled,
  onChageDate,
  onPressLogin,
  denomination,
  setDenomination,
  onPressNextStep,
  yearsBeingChristian,
  setYearsBeingChristian,
}) => {
  return (
    <View>
      <Input
        title="Nome"
        value={name}
        variant="red"
        inputMode="text"
        placeholder="Nome"
        onChangeText={(text) => {
          setName(text);
        }}
        autoCapitalize="words"
      />
      <DateInput
        variant="red"
        value={birthDate}
        onChange={onChageDate}
        title="Data de nascimento:"
      />
      <Input
        variant="red"
        inputMode="text"
        title="Denominação"
        value={denomination}
        autoCapitalize="none"
        placeholder="Denominação"
        onChangeText={(text) => setDenomination(text)}
      />
      <Input
        variant="red"
        inputMode="numeric"
        autoCapitalize="none"
        keyboardType="numeric"
        title="Anos como Cristão"
        value={yearsBeingChristian}
        placeholder="Anos como Cristão"
        onChangeText={(text) => setYearsBeingChristian(text)}
      />
      {error && <Text>{error.message}</Text>}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button
          variant="primary"
          isDisabled={isDisabled}
          onPress={onPressNextStep}
          title={isDisabled ? 'Preencha todos os campos' : 'Avançar'}
        />
      )}
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

export default SignUpFirstStep;
