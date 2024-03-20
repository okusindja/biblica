import { Dimensions, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  background: {
    height: scale(height),
    position: 'absolute',
    top: scale(-height / 3),
    width: scale(width),
  },

  container: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    top: scale(100),
  },
});
