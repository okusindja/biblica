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
  bottomInformations: {
    gap: scale(20),
    marginTop: 'auto',
    paddingBottom: scale(20),
    width: '100%',
  },
  buttomTextWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(10),
    marginTop: scale(10),
  },
  buttomWrapper: {
    alignItems: 'center',
    gap: scale(10),
    padding: scale(20),
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: scale(50),
    padding: scale(15),
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
    fontSize: scale(12),
  },
  carouselItem: {
    height: scale(150),
    justifyContent: 'center',
    padding: scale(20),
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  description: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
    fontSize: scale(12),
    width: `${scale(60)}%`,
  },
  logo: {
    top: scale(100),
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
    fontSize: scale(11),
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: scale(20),
    fontWeight: 'bold',
    marginBottom: scale(14),
    width: `${scale(60)}%`,
  },
});
