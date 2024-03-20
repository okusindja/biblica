import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { scale } from 'react-native-size-matters';

import { styles } from './styles';

interface InformationProps {
  title: string;
  description: string;
}

const INFORMATIONS = [
  {
    title: 'Nunca foi tão fácil perceber a blíblia',
    description: 'Em pouco tempo você será uma pessoa mudada.',
  },
  {
    title: 'Perceba a bíblia dos escritos originais',
    description: '3 dias para aprender hebraico e 2 para grego!',
  },
  {
    title: 'Aprenda com desafios e avaliações',
    description: 'Todas as perguntas serão biblicamente respondidas!',
  },
];

const Slider = () => {
  const { width } = useWindowDimensions();

  return (
    <Carousel
      loop
      autoPlay={true}
      data={INFORMATIONS as InformationProps[]}
      height={scale(150)}
      width={width}
      scrollAnimationDuration={4000}
      renderItem={({ item }) => (
        <View style={styles.carouselItem}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
    />
  );
};

export default Slider;
