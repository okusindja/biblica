import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Header, Title } from './styles';

interface Props {
  title: string;
  notIsGoBack?: boolean;
}

const ContentHeader = ({ title, notIsGoBack }: Props) => {
  const navigation = useNavigation();
  return (
    <Header>
      {!notIsGoBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={45}
            color="#E21F2C"
          />
        </TouchableOpacity>
      )}
      <Title>{title}</Title>
    </Header>
  );
};

export default ContentHeader;