import { Dimensions, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  background: {
    height: verticalScale(height),
    position: 'absolute',
    top: verticalScale(-height / 3),
    width: scale(width),
  },

  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  layout: {
    backgroundColor: '#fff',
    padding: scale(20),
    width: '100%',
  },
  logo: {
    marginTop: `${verticalScale(20)}%`,
  },
});
