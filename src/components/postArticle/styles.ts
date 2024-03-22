import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: scale(105),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  postImage: {
    width: scale(75),
    height: scale(75),
    overflow: 'hidden',
    marginRight: scale(15),
    borderRadius: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  postText: {
    flex: 1,
    height: scale(75),
    justifyContent: 'space-between',
  },
  titleWrapper: {
    flex: 1,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'gray',
    maxWidth: '70%',
    fontSize: 14,
    fontWeight: 'bold',
  },
  postFooter: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    gap: 20,
  },
  postFooterContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  postFooterText: {
    color: '#afafaf',
    fontSize: 12,
    marginLeft: 5,
  },
});
