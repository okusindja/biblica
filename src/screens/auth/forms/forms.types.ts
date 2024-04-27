import { ApolloError } from '@apollo/client';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

export interface SignUpSecondStepProps {
  email: string;
  password: string;
  isDisabled: boolean;
  confirmPassword: string;
  loadingSignUp: boolean;
  resetErrors: () => void;
  onPressLogin: () => void;
  handleSubmit: () => void;
  emailInUseError: boolean;
  weakPasswordError: boolean;
  invalidEmailError: boolean;
  confirmPasswordError: boolean;
  missingPasswordError: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setConfirmPasswordError: (confirmPasswordError: boolean) => void;
}

export interface SignUpFirstStepProps {
  name: string;
  birthDate: Date;
  loading: boolean;
  isDisabled: boolean;
  denomination: string;
  onChageDate: (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => void;
  onPressLogin: () => void;
  yearsBeingChristian: string;
  onPressNextStep: () => void;
  error: ApolloError | undefined;
  setName: (name: string) => void;
  setDenomination: (denomination: string) => void;
  setYearsBeingChristian: (yearsBeingChristian: string) => void;
}
