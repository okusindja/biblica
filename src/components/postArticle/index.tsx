import React from 'react';
import { AntDesign, Ionicons  } from "@expo/vector-icons";
import { styles } from './styles';
import { Typography } from '../../elements';
import { scale } from 'react-native-size-matters';
import { Image, View } from 'react-native';

interface Props {
  title: string;
  image?:
    | {
        url: string;
      }
    | string;
  author?: any;
  category?: string;
}

const PostArticle = ({ title, image, author, category }: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.postImage} source={{ uri: `${image}` }} />
        <View style={styles.postText}>
          <View style={styles.titleWrapper}>
            <Typography
              numberOfLines={2}
              maxWidth="80%"
              variant="paragraph"
              bold
            >
              {title}
            </Typography>
            <Ionicons
              name="ellipsis-horizontal"
              size={scale(20)}
              color="#afafaf"
            />
          </View>
          <View style={styles.postFooter}>
            <View style={styles.postFooterContent}>
              <Ionicons
                name="ios-person-circle-outline"
                size={scale(16)}
                color={'#9c9c9c'}
              />
              <Typography variant="legend">{author}</Typography>
            </View>
            <View style={styles.postFooterContent}>
              <AntDesign name="calendar" size={scale(12)} color={'#9c9c9c'} />
              <Typography variant="legend">{category}</Typography>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line} />
    </>
  );
};

export default PostArticle;