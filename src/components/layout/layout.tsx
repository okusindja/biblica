import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.layout}>{children}</View>;
};

export default Layout;
