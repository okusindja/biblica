import { Dimensions, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const width = Dimensions.get('window').width - scale(40);

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: scale(50),
    padding: scale(15),
    width: width,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins_500Medium',
  },
  titleWrapper: {
    width: width - scale(20),
    alignItems: 'center',
    marginBottom: scale(20),
  },
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: scale(15),
    padding: scale(20),
  },
  input: {
    borderRadius: scale(50),
    fontFamily: 'Poppins_500Medium',
    fontSize: scale(12),
    height: scale(45),
    marginVertical: scale(10),
    padding: scale(10),
    width: width,
  },
  textButton: {
    color: '#646464',
    fontFamily: 'Poppins_500Medium',
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: scale(20),
    textAlign: 'center',
  },
});
