import React from 'react';
import {
  Container,
  Info,
  Overlay,
  PostFooterContent,
  styles,
  Title,
} from './styles';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Typography } from '../../elements';
import { ImageBackground, View } from 'react-native';
import { scale } from 'react-native-size-matters';

interface Props {
  item: any;
  name?: string;
  description?: string;
}

const Card = ({ item, name, description }: Props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: `${item?.image?.url}` }}
    >
      <View style={styles.overlay} />
      <View style={styles.titleWrapper}>
        <Typography
          size="m"
          variant="title"
          numberOfLines={2}
          themeColor="white"
          align="center"
        >
          {item?.title}
        </Typography>
      </View>
      <View style={styles.postFooterContent}>
        <View style={styles.info}>
          <Ionicons name="ios-person-circle" size={22} color="white" />
          <Typography variant="paragraph" themeColor="white">
            {item?.authors[0].name || name}
          </Typography>
        </View>
        <View style={styles.info}>
          <AntDesign name="calendar" size={15} color={'white'} />
          <Typography variant="paragraph" themeColor="white">
            {item?.post || description}
          </Typography>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Card;