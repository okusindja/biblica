import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderColor: '#E9E9E9',
    borderRadius: scale(10),
    borderWidth: scale(1),
    flexDirection: 'row',
    gap: scale(12),
    padding: scale(12),
  },
  icon: {
    marginLeft: 'auto',
  },
  text: {
    color: '#AFAFAF',
    fontFamily: 'Poppins_500Medium',
    fontSize: scale(12),
  },
});
