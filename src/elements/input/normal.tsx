import React, { FC } from 'react';
import { Pressable, TextInput, TextInputProps, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { ErrorSVG } from '../../components/svg';
import Typography from '../typography';
import { InputProps } from './input.types';
import { styles } from './styles';

const Input: FC<TextInputProps & InputProps> = ({
  variant,
  Prefix,
  Suffix,
  title,
  inputErrorMessage,
  onPressSuffix,
  ...props
}) => {
  return (
    <>
      {title && (
        <Typography
          variant="legend"
          style={[
            styles.inputMessage,
            {
              color:
                variant === 'red'
                  ? '#fff'
                  : variant === 'white' && !inputErrorMessage
                    ? '#7A7A7A'
                    : '#E21F2C',
            },
          ]}
        >
          {title}
          {inputErrorMessage && ': ' + inputErrorMessage}
        </Typography>
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
