import { View, Text, TextProps } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { HeadingProps } from './typography.types';
import { styles } from './styles';
import { scale } from 'react-native-size-matters';

const Heading: FC<PropsWithChildren<TextProps & HeadingProps>> = ({
  themeColor,
  size,
  bold,
  children,
  align,
  width,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.common,
        {
          fontSize:
            size === 's' ? scale(14) : size === 'l' ? scale(21) : scale(16),
          color:
            themeColor === 'red'
              ? '#E21F2C'
              : themeColor === 'white'
                ? '#fff'
                : '#7A7A7A',
          fontFamily: bold ? 'Poppins_600SemiBold' : 'Poppins_400Regular',
          textAlign: align,
          width: width,
        },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Heading;
