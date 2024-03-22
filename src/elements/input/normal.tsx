import React, { FC } from 'react';
import { Pressable, Text, TextInput, TextInputProps, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { ErrorSVG } from '../../components/svg';
import { InputProps } from './input.types';
import { styles } from './styles';

const Input: FC<TextInputProps & InputProps> = ({
  variant,
  Prefix,
  Suffix,
  inputErrorMessage,
  onPressSuffix,
  ...props
}) => {
  return (
    <>
      {inputErrorMessage && (
        <Text
          style={[
            styles.inputMessage,
            { color: variant === 'red' ? '#fff' : '#E21F2C' },
          ]}
        >
          {inputErrorMessage}
        </Text>
      )}
      <View
        style={[
          styles.input,
          variant === 'red'
            ? styles.onRedBackGround
            : variant === 'white'
              ? styles.onWhiteBackGround
              : styles.normal,
        ]}
      >
        {Prefix && (
          <Prefix
            maxHeight={scale(21)}
            maxWidth={scale(21)}
            color={
              variant === 'red'
                ? '#D89C9C'
                : variant === 'white'
                  ? '#949494'
                  : '#787878'
            }
          />
        )}
        <TextInput
          style={[
            styles.inputText,
            variant === 'red'
              ? styles.inputTextRed
              : variant === 'white'
                ? styles.inputTextWhite
                : styles.inputTextNormal,
          ]}
          placeholderTextColor={
            variant === 'red'
              ? '#D89C9C'
              : variant === 'white'
                ? '#B7B7B7'
                : '#787878'
          }
          cursorColor={variant === 'red' ? '#fff' : '#000'}
          {...props}
        />
        {Suffix ? (
          <Pressable onPress={onPressSuffix}>
            <Suffix
              maxHeight={scale(21)}
              maxWidth={scale(21)}
              color={
                variant === 'red'
                  ? '#D89C9C'
                  : variant === 'white'
                    ? '#949494'
                    : '#787878'
              }
            />
          </Pressable>
        ) : inputErrorMessage ? (
          <ErrorSVG
            maxHeight={scale(21)}
            maxWidth={scale(21)}
            color={
              variant === 'red'
                ? '#fff'
                : variant === 'white'
                  ? '#E21F2C'
                  : '#E21F2C'
            }
          />
        ) : null}
      </View>
    </>
  );
};

export default Input;
