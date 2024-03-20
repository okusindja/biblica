import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { RightArrowSVG } from '../../components/svg';
import { AuthPagesProps } from './auth.types';
import Slider from './slider';
import { styles } from './styles';

const Welcome: FC<AuthPagesProps> = ({ onPressLogin, onPressSignUp }) => {
  return (
    <View style={styles.bottomInformations}>
      <Slider />
      <View style={styles.buttomWrapper}>
        <Pressable style={styles.button} onPress={onPressSignUp}>
          <Text style={styles.textButton}>Criar uma conta</Text>
        </Pressable>
        <Pressable style={styles.buttomTextWrapper} onPress={onPressLogin}>
          <Text style={styles.buttonText}>Já tenho uma conta. Fazer Login</Text>
          <RightArrowSVG
            maxWidth={scale(24)}
            maxHeight={scale(24)}
            color="white"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Welcome;
