import { RootStackParamList } from '../routes/root.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
declare module 'react-native-vector-icons/MaterialCommunityIcons';
declare module '@expo-google-fonts/unifrakturcook';