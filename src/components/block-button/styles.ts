import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: scale(8),
    flexBasis: '25%',
    flexGrow: 1,
    gap: scale(18),
    justifyContent: 'center',
    paddingHorizontal: scale(12),
    paddingVertical: scale(20),
  },
});
