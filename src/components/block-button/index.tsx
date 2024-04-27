import { Typography } from '@elements';
import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { scale } from 'react-native-size-matters';

import { BlockButtonProps } from './block-button.types';
import { styles } from './styles';

const BlockButton: FC<BlockButtonProps> = ({
  Icon,
  size,
  title,
  variant,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: variant === 'secondary' ? '#000000' : '#E21F2C',
          width: size === 'big' ? '100%' : 'auto',
          flexBasis: size === 'small' ? '25%' : 'auto',
        },
      ]}
    >
      <Icon maxWidth={scale(32)} maxHeight={scale(32)} color="white" />
      <Typography variant="paragraph" themeColor="white" align="center">
        {title}
      </Typography>
    </Pressable>
  );
};

export default BlockButton;
