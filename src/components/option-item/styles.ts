import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    borderColor: '#E9E9E9',
    borderRadius: scale(10),
    borderWidth: scale(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(12),
  },
  text: {
    color: '#AFAFAF',
    fontFamily: 'Poppins_500Medium',
    fontSize: scale(12),
  },
});
