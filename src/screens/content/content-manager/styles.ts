import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: scale(8),
    marginTop: scale(18),
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: scale(18),
  },
});
