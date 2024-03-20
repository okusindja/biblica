import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';
import { Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';

import { LogoSVG } from '../../components/svg';
import StyledBackground from '../../components/svg/styled-background';
import { AuthLayoutProps } from './layout.types';
import { styles } from './styles';

const AuthLayout: FC<PropsWithChildren<AuthLayoutProps>> = ({
  variant,
  children,
}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <StyledBackground
          variant={variant}
          maxWidth={scale(width)}
          maxHeight={scale(height * 1.5)}
        />
      </View>
      <View style={styles.logo}>
        <LogoSVG
          maxWidth={scale(60)}
          maxHeight={scale(108)}
          secondary={variant === 'red' ? true : false}
        />
      </View>
      {children}
    </View>
  );
};

export default AuthLayout;
