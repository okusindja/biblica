import React from 'react';
import { InputElement } from './styles'
import { InputModeOptions } from 'react-native/Libraries/Components/TextInput/TextInput';

interface Props {
    placeholder: string;
    mode: InputModeOptions | undefined;
    value: string;
    mb?: string;
}

const Input = ({placeholder, mode, value, mb}: Props) => {
  return (
    <InputElement placeholder={placeholder} inputMode={mode} value={value} mb={mb} />
  );
};

export default Input;