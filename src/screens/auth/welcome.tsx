import useAuth from '@hooks/use-auth';
import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { SlideInDown, SlideOutUp } from 'react-native-reanimated';
import { scale, verticalScale } from 'react-native-size-matters';

import { LogoSVG, RightArrowSVG } from '../../components/svg';
import { AuthPagesProps } from './auth.types';
import Slider from './slider';
import { styles } from './styles';

const Welcome: FC<AuthPagesProps> = ({ onPressLogin, onPressSignUp }) => {
  const { token } = useAuth();
  console.log('Token welcome', token);
  console.log('Typeof null', typeof token?.toString());
  return (
    <>
      <Animated.View
        style={styles.logo}
        entering={SlideInDown}
        exiting={SlideOutUp}
      >
        <LogoSVG
          maxWidth={scale(60)}
          maxHeight={verticalScale(108)}
          secondary
        />
      </Animated.View>
      <View style={styles.bottomInformations}>
        <Slider />
        <View style={styles.buttomWrapper}>
          <Pressable style={styles.button} onPress={onPressSignUp}>
            <Text style={styles.textButton}>Criar uma conta</Text>
          </Pressable>
          <Pressable style={styles.buttomTextWrapper} onPress={onPressLogin}>
            <Text style={styles.buttonText}>
              Já tenho uma conta. Fazer Login
            </Text>
            <RightArrowSVG
              maxWidth={scale(24)}
              maxHeight={scale(24)}
              color="white"
            />
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Welcome;
