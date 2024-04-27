import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { RightArrowSVG } from '../svg';
import { OptionItemProps } from './option-item.types';
import { styles } from './styles';

const OptionItem: FC<OptionItemProps> = ({ onPress, title, Preffix }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {Preffix && (
        <Preffix maxHeight={scale(21)} maxWidth={scale(21)} color="#AFAFAF" />
      )}
      <Text style={styles.text}>{title}</Text>
      <View style={styles.icon}>
        <RightArrowSVG
          maxWidth={scale(21)}
          maxHeight={scale(21)}
          color="#AFAFAF"
        />
      </View>
    </Pressable>
  );
};

export default OptionItem;
