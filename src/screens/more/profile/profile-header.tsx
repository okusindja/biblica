import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import { scale } from 'react-native-size-matters';
import { CaretLeftSVG, PencilSVG } from '../../../components/svg';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routes/routes.types';

const ProfileHeader: FC = () => {
  const navigationToGoBack = useNavigation();
  const navigation = useNavigation<StackTypes>();
  return (
    <View style={styles.headerButtons}>
      {navigation.canGoBack() && (
        <Pressable onPress={() => navigationToGoBack.goBack()}>
          <CaretLeftSVG
            maxWidth={scale(18)}
            maxHeight={scale(18)}
            color="white"
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          />
        </Pressable>
      )}
      <Pressable onPress={() => navigation.navigate('Informações')}>
        <PencilSVG
          maxWidth={scale(18)}
          maxHeight={scale(18)}
          color="white"
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        />
      </Pressable>
    </View>
  );
};

export default ProfileHeader;
