import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  buttonsWrapper: {
    flexDirection: 'row',
    gap: scale(12),
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: scale(18),
  },
  contentWrapper: {},
  filterWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(18),
  },
});
