import { Dimensions, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const width = Dimensions.get('window').width - scale(40);

export const styles = StyleSheet.create({
  buttomTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(10),
    width: width,
  },
  buttomWrapper: {
    alignItems: 'center',
    gap: scale(10),
    padding: scale(20),
    width: width,
  },
  button: {
    borderRadius: scale(50),
    marginVertical: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(15),
    gap: scale(10),
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
