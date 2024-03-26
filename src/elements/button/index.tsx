import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import { RightArrowSVG } from '../../components/svg';
import { scale } from 'react-native-size-matters';
import { styles } from './styles';
import { ButtonProps } from './button.types';
import Typography from '../typography';

const Button: FC<ButtonProps> = ({
  Preffix,
  Suffix,
  onPress,
  title,
  themeColor,
  variant,
}) => {
  return (
    <>
      {variant === 'primary' ? (
        <Pressable
          style={[styles.button, { backgroundColor: '#000' }]}
          onPress={onPress}
        >
          {Preffix && (
            <Preffix maxWidth={scale(24)} maxHeight={scale(24)} color="white" />
          )}
          <Text style={styles.textButton}>{title}</Text>
          {Suffix && (
            <Suffix maxWidth={scale(24)} maxHeight={scale(24)} color="white" />
          )}
        </Pressable>
      ) : variant === 'secondary' ? (
        <Pressable
          onPress={onPress}
          style={[styles.button, { backgroundColor: '#E21F2C' }]}
        >
          {Preffix && (
            <Preffix maxWidth={scale(24)} maxHeight={scale(24)} color="white" />
          )}
          <Text style={styles.buttonText}>{title}</Text>
          {Suffix && (
            <Suffix maxWidth={scale(24)} maxHeight={scale(24)} color="white" />
          )}
        </Pressable>
      ) : variant === 'text' ? (
        <Pressable style={styles.buttomTextWrapper} onPress={onPress}>
          {Preffix && (
            <Preffix
              maxWidth={scale(24)}
              maxHeight={scale(24)}
              color={
                themeColor === 'red'
                  ? '#E21F2C'
                  : themeColor === 'white'
                    ? '#fff'
                    : '#7A7A7A'
              }
            />
          )}
          <Typography variant="paragraph" themeColor={themeColor}>
            {title}
          </Typography>
          {Suffix && (
            <Suffix
              maxWidth={scale(24)}
              maxHeight={scale(24)}
              color={
                themeColor === 'red'
                  ? '#E21F2C'
                  : themeColor === 'white'
                    ? '#fff'
                    : '#7A7A7A'
              }
            />
          )}
        </Pressable>
      ) : null}
    </>
  );
};

export default Button;
