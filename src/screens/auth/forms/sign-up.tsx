import { useMutation } from '@apollo/client';
import { Typography } from '@elements';
import { CREATE_STUDENT } from '@graphql';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { LogoSVG } from '@svg';
import React, { FC, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import useAuth from '../../../hooks/use-auth';
import { AuthPagesProps } from '../auth.types';
import SignUpFirstStep from './sign-up-first-step';
import SignUpSecondStep from './sign-up-second-step';
import { styles } from './styles';

const SignUp: FC<Omit<AuthPagesProps, 'onPressSignUp'>> = ({
  onPressLogin,
}) => {
  const {
    loading,
    createUser,
    resetErrors,
    emailInUseError,
    weakPasswordError,
    invalidEmailError,
    missingPasswordError,
  } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingSignUp, setLoading] = useState(false);
  const [secondStep, setSecondStep] = useState(false);
  const [denomination, setDenomination] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthDate, setBirthDate] = useState<Date>(new Date());
  const [yearsBeingChristian, setYearsBeingChristian] = useState('0');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const convertedDate = birthDate.toISOString();

  const numericValue = parseInt(yearsBeingChristian, 10);

  const [createStudent, { loading: loadingCreation, error }] = useMutation(
    CREATE_STUDENT,
    {
      variables: {
        name: name,
        email: email,
        birthdate: convertedDate,
        denomination: denomination,
        yearsBeingChristian: numericValue,
      },
    }
  );

  const handleCreateUser = async () => {
    setLoading(loading);
    if (password === confirmPassword) {
      createUser(email, password);
    } else {
      setConfirmPasswordError(true);
    }
    setLoading(loading);
  };

  const handleMutation = async () => {
    try {
      const result = await createStudent();
      console.log('Mutation result:', result);
    } catch (error) {
      console.error('Mutation error:', error);
    }
  };

  const handleSubmission = async () => {
    await handleMutation();
    await handleCreateUser();
  };

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || birthDate;
    setBirthDate(currentDate);
    console.log('Date:', currentDate);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{ marginBottom: `${verticalScale(secondStep ? 20 : 15)}%` }}>
        <LogoSVG
          secondary
          maxWidth={scale(60)}
          maxHeight={verticalScale(108)}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Typography variant="heading" themeColor="white" size="m">
          {!secondStep
            ? '1 - Informações pessoais'
            : '2 - Criar dados para Login)'}
        </Typography>
      </View>
      {!secondStep ? (
        <SignUpFirstStep
          name={name}
          error={error}
          setName={setName}
          birthDate={birthDate}
          loading={loadingCreation}
          onPressLogin={onPressLogin}
          denomination={denomination}
          onChageDate={handleDateChange}
          setDenomination={setDenomination}
          onPressNextStep={() => setSecondStep(true)}
          yearsBeingChristian={yearsBeingChristian + ''}
          setYearsBeingChristian={setYearsBeingChristian}
          isDisabled={!name || !denomination || !yearsBeingChristian}
        />
      ) : (
        <SignUpSecondStep
          email={email}
          password={password}
          setEmail={setEmail}
          resetErrors={resetErrors}
          setPassword={setPassword}
          onPressLogin={onPressLogin}
          loadingSignUp={loadingSignUp}
          handleSubmit={handleSubmission}
          confirmPassword={confirmPassword}
          emailInUseError={emailInUseError}
          invalidEmailError={invalidEmailError}
          weakPasswordError={weakPasswordError}
          setConfirmPassword={setConfirmPassword}
          confirmPasswordError={confirmPasswordError}
          missingPasswordError={missingPasswordError}
          setConfirmPasswordError={setConfirmPasswordError}
          isDisabled={!email || !password || !confirmPassword}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default SignUp;
