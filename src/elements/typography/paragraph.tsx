import { View, Text, TextProps } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { styles } from './styles';
import { ParagraphProps } from './typography.types';
import { scale } from 'react-native-size-matters';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Paragraph: FC<PropsWithChildren<ParagraphProps & TextProps>> = ({
  bold,
  size,
  themeColor,
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
            size === 's' ? scale(10) : size === 'l' ? scale(13) : scale(11),
          color:
            themeColor === 'red'
              ? '#E21F2C'
              : themeColor === 'white'
                ? '#fff'
                : '#7A7A7A',
          fontFamily: bold ? 'Poppins_600SemiBold' : 'Poppins_500Medium',
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

export default Paragraph;
