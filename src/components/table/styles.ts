import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    width: width,
  },
  dataContainer: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(16),
    textAlign: 'center',
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(16),
  },
});
