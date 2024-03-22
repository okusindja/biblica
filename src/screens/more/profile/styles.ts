import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  curiosities: {
    alignItems: 'center',
    borderRadius: scale(10),
    columnGap: scale(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: scale(10),
    padding: scale(14),
    width: `${scale(80)}%`,
  },
  curiosityEdge: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(5),
    justifyContent: 'center',
  },
  curiosityMiddle: {
    alignItems: 'center',
    borderColor: '#E1E1E1',
    borderLeftWidth: scale(1),
    borderRightWidth: scale(1),
    flexDirection: 'row',
    gap: scale(5),
    justifyContent: 'center',
    paddingHorizontal: scale(10),
  },
  curiosityText: {
    alignSelf: 'center',
    color: '#999999',
    fontFamily: 'Poppins_500Medium',
    fontSize: scale(10),
    verticalAlign: 'middle',
  },
  header: {
    alignItems: 'center',
    height: scale(320),
    justifyContent: 'center',
    width: '100%',
    zIndex: 1,
  },
  name: {
    color: '#7A7A7A',
    fontFamily: 'Poppins_400Regular',
    fontSize: scale(18),
    marginTop: scale(10),
  },
  photo: {
    backgroundColor: '#F3F3F3',
    borderColor: '#fff',
    borderRadius: scale(100),
    borderWidth: scale(3),
    height: scale(120),
    width: scale(120),
  },
  personalPhoto: {
    borderRadius: scale(50),
    height: scale(60),
    width: scale(60),
  },
  person: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(20),
    gap: scale(10),
  },
  section: {
    backgroundColor: '#F5F5F5',
    borderRadius: scale(10),
    marginBottom: scale(30),
    marginTop: scale(10),
    width: '100%',
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    alignItems: 'center',
    top: scale(-26),
    zIndex: 1,
    width: '100%',
  },
  paddedSection: {
    paddingHorizontal: scale(20),
  },
  wrappingRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  sectionTitle: {
    color: '#646464',
    fontFamily: 'Poppins_500Medium',
    fontSize: scale(14),
  },
});
