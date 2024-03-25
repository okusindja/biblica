import { Text, TextProps } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { styles } from './styles';
import { scale } from 'react-native-size-matters';
import { LegendProps } from './typography.types';

const Legend: FC<PropsWithChildren<TextProps & LegendProps>> = ({
  bold,
  themeColor,
  size,
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
          fontSize: scale(10),
          color:
            themeColor === 'red'
              ? '#E21F2C'
              : themeColor === 'white'
                ? '#fff'
                : '#a3a3a3',
          fontFamily: bold ? 'Poppins_500Medium' : 'Poppins_400Regular',
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

export default Legend;
