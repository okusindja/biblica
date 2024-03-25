import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import OptionItem from '../../components/option-item';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { MoreScreenData } from './more.data';
import { styles } from './styles';
import useAuth from '../../hooks/use-auth';

const More = () => {
  const { logout } = useAuth();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  if (loading) return <Text>A carregar...</Text>;

  return (
    <View style={styles.container}>
      {MoreScreenData.map((item, index) => (
        <OptionItem
          key={index}
          onPress={() =>
            item === 'Terminar sessão' ? logout() : navigation.navigate(item)
          }
          title={item}
        />
      ))}
    </View>
  );
};

export default More;
