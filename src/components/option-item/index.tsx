import React, { FC } from 'react';
import { Pressable, Text } from 'react-native';
import { scale } from 'react-native-size-matters';

import { RightArrowSVG } from '../svg';
import { OptionItemProps } from './option-item.types';
import { styles } from './styles';

const OptionItem: FC<OptionItemProps> = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <RightArrowSVG
        maxWidth={scale(21)}
        maxHeight={scale(21)}
        color="#AFAFAF"
      />
    </Pressable>
  );
};

export default OptionItem;
