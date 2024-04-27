import React, { FC } from 'react';
import { Pressable, Text } from 'react-native';
import { scale } from 'react-native-size-matters';

import Typography from '../typography';
import { ButtonProps } from './button.types';
import { styles } from './styles';

const Button: FC<ButtonProps> = ({
  Icon,
  title,
  Suffix,
  Preffix,
  onPress,
  variant,
  themeColor,
  isDisabled,
}) => {
  return (
    <>
      {variant === 'primary' ? (
        <Pressable
          style={[
            styles.button,
            { backgroundColor: '#000', opacity: isDisabled ? 0.3 : 1 },
          ]}
          onPress={isDisabled ? null : onPress}
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
          onPress={isDisabled ? null : onPress}
          style={[
            styles.button,
            { backgroundColor: '#E21F2C', opacity: isDisabled ? 0.3 : 1 },
          ]}
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
        <Pressable
          style={styles.buttomTextWrapper}
          onPress={isDisabled ? null : onPress}
        >
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
      ) : variant === 'icon' && Icon ? (
        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: '#E21F2C',
              width: scale(40),
              height: scale(40),
              borderRadius: scale(20),
              opacity: isDisabled ? 0.3 : 1,
            },
          ]}
          onPress={isDisabled ? null : onPress}
        >
          <Icon
            maxWidth={scale(24)}
            maxHeight={scale(24)}
            color={themeColor === 'red' ? '#E21F2C' : '#fff'}
          />
        </Pressable>
      ) : variant === 'icon-variant' && Icon ? (
        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: '#000000',
              width: scale(40),
              height: scale(40),
              borderRadius: scale(20),
              opacity: isDisabled ? 0.3 : 1,
            },
          ]}
          onPress={isDisabled ? null : onPress}
        >
          <Icon
            maxWidth={scale(24)}
            maxHeight={scale(24)}
            color={themeColor === 'red' ? '#E21F2C' : '#fff'}
          />
        </Pressable>
      ) : null}
    </>
  );
};

export default Button;
