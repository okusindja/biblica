import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import { RightArrowSVG } from '../../components/svg';
import { scale } from 'react-native-size-matters';
import { styles } from './styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({
  Preffix,
  Suffix,
  onPress,
  title,
  variant,
}) => {
  return (
    <>
      {variant === 'primary' ? (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.textButton}>{title}</Text>
        </Pressable>
      ) : variant === 'secondary' ? (
        <Pressable
          onPress={onPress}
          style={[styles.button, { backgroundColor: '#E21F2C' }]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
      ) : variant === 'text' ? (
        <Pressable style={styles.buttomTextWrapper} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
          {Suffix && (
            <Suffix maxWidth={scale(24)} maxHeight={scale(24)} color="white" />
          )}
        </Pressable>
      ) : null}
    </>
  );
};

export default Button;
