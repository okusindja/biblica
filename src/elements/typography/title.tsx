import { View, Text, TextProps } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { styles } from './styles';
import { scale } from 'react-native-size-matters';
import { TitleProps } from './typography.types';

const Title: FC<PropsWithChildren<TextProps & TitleProps>> = ({
  children,
  bold,
  themeColor,
  size,
  align,
  maxWidth,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.common,
        {
          fontSize:
            size === 's' ? scale(14) : size === 'l' ? scale(18) : scale(14),
          color:
            themeColor === 'red'
              ? '#E21F2C'
              : themeColor === 'white'
                ? '#fff'
                : '#7A7A7A',
          fontFamily: bold ? 'Poppins_600SemiBold' : 'Poppins_400Regular',
          textAlign: align,
          maxWidth: maxWidth,
        },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Title;
