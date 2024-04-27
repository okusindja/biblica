import {
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import React, { FC, PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { TextProps } from 'react-native';

import Heading from './heading';
import Legend from './legend';
import Paragraph from './paragraph';
import Title from './title';
import { CommonTypographyProps, TypographyProps } from './typography.types';

const Typography: FC<
  PropsWithChildren<TypographyProps & TextProps & CommonTypographyProps>
> = ({ variant, children, bold, size, themeColor, align, width, ...props }) => {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_200ExtraLight,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Carregando a cruz...</Text>;
  }

  return (
    <>
      {variant === 'legend' ? (
        <Legend
          {...props}
          bold={bold}
          size={size}
          align={align}
          width={width}
          themeColor={themeColor}
        >
          {children}
        </Legend>
      ) : variant === 'title' ? (
        <Title
          {...props}
          bold={bold}
          size={size}
          align={align}
          width={width}
          themeColor={themeColor}
        >
          {children}
        </Title>
      ) : variant === 'paragraph' ? (
        <Paragraph
          {...props}
          bold={bold}
          size={size}
          align={align}
          width={width}
          themeColor={themeColor}
        >
          {children}
        </Paragraph>
      ) : variant === 'heading' ? (
        <Heading
          {...props}
          bold={bold}
          size={size}
          align={align}
          width={width}
          themeColor={themeColor}
        >
          {children}
        </Heading>
      ) : null}
    </>
  );
};

export default Typography;
