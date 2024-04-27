import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

import { theme } from '../../design-system/theme';

export const styles = StyleSheet.create({
  // selectedTabText: {
  //   color: theme.colors.primary,
  // },
  tabContent: {
    marginTop: scale(10),
  },
  tabOption: {
    alignItems: 'center',
    borderColor: theme.colors.smoke,
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
    flex: 1,
    justifyContent: 'center',
  },
  tabsOptionsContainer: {
    flexDirection: 'row',
    height: scale(40),
    marginTop: scale(10),
    paddingVertical: scale(4),
  },
});
