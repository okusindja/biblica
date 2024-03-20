import { Dimensions, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const width = Dimensions.get('window').width - scale(40);

export const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    borderRadius: scale(50),
    flexDirection: 'row',
    height: scale(45),
    marginBottom: scale(10),
    paddingHorizontal: scale(20),
    width: width,
  },
  inputMessage: {
    fontFamily: 'Poppins_500Medium',
    fontSize: scale(11),
    paddingLeft: scale(10),
    textAlign: 'left',
    width: width,
  },
  inputText: {
    flex: 1,
    fontFamily: 'Poppins_500Medium',
    fontSize: scale(12),
    height: `${scale(100)}%`,
    paddingLeft: scale(7),
  },
  inputTextNormal: {
    color: '#000',
  },
  inputTextRed: {
    color: '#fff',
  },
  inputTextWhite: {
    color: '#000',
  },
  normal: {
    backgroundColor: '#f0f0f0',
    borderRadius: 7,
    padding: 15,
  },
  onRedBackGround: {
    backgroundColor: '#B13939',
    color: '#fff',
  },
  onWhiteBackGround: {
    backgroundColor: '#fff',
    color: '#000',
  },
});
