import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    gap: scale(10),
    padding: scale(20),
  },
});
