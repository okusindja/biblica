import { Dimensions, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const width = Dimensions.get('window').width - scale(40);

export const styles = StyleSheet.create({
  buttomTextWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(10),
    justifyContent: 'center',
    width: width,
  },
  buttomWrapper: {
    alignItems: 'center',
    gap: scale(10),
    padding: scale(20),
    width: width,
  },
  button: {
    alignItems: 'center',
    borderRadius: scale(50),
    flexDirection: 'row',
    gap: scale(10),
    justifyContent: 'center',
    marginVertical: scale(10),
    padding: scale(15),
    width: width,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
    fontSize: scale(12),
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
    fontSize: scale(11),
  },
});
