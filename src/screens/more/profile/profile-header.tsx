import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { CaretLeftSVG, PencilSVG } from '../../../components/svg';
import { StackTypes } from '../../../routes/routes.types';
import { ProfileHeaderProps } from './profile.types';
import { styles } from './styles';

const ProfileHeader: FC<ProfileHeaderProps> = ({
  hasBackButton = true,
  hasEditButton = true,
}) => {
  const navigationToGoBack = useNavigation();
  const navigation = useNavigation<StackTypes>();
  return (
    <View style={styles.headerButtons}>
      {navigation.canGoBack() && hasBackButton && (
        <Pressable
          style={{ marginRight: 'auto' }}
          onPress={() => navigationToGoBack.goBack()}
        >
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
      {hasEditButton && (
        <Pressable
          style={{ marginLeft: 'auto' }}
          onPress={() => navigation.navigate('Informações')}
        >
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
      )}
    </View>
  );
};

export default ProfileHeader;
