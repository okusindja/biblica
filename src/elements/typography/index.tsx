import { View, Text } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { useFonts } from 'expo-font';
import {
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_200ExtraLight,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import { CommonTypographyProps, TypographyProps } from './typography.types';
import Legend from './legend';
import Title from './title';
import Paragraph from './paragraph';
import Heading from './heading';
import { TextProps } from 'react-native';

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
          children={children}
          themeColor={themeColor}
        />
      ) : variant === 'title' ? (
        <Title
          {...props}
          bold={bold}
          size={size}
          align={align}
          width={width}
          children={children}
          themeColor={themeColor}
        />
      ) : variant === 'paragraph' ? (
        <Paragraph
          {...props}
          bold={bold}
          size={size}
          align={align}
          width={width}
          children={children}
          themeColor={themeColor}
        />
      ) : variant === 'heading' ? (
        <Heading
          {...props}
          bold={bold}
          size={size}
          align={align}
          width={width}
          children={children}
          themeColor={themeColor}
        />
      ) : null}
    </>
  );
};

export default Typography;
