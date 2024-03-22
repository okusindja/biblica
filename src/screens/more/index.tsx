import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import OptionItem from '../../components/option-item';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { MoreScreenData } from './more.data';
import { styles } from './styles';

const More = () => {
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Text>A carregar...</Text>;

  return (
    <View style={styles.container}>
      {MoreScreenData.map((item, index) => (
        <OptionItem
          key={index}
          onPress={() =>
            item === 'Terminar sessão'
              ? handleSignOut()
              : navigation.navigate(item)
          }
          title={item}
        />
      ))}
    </View>
  );
};

export default More;
