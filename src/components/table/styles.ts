import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dataContainer: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    padding: scale(16),
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
