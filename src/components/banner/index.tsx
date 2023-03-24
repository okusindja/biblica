import React from 'react';
import { Container, Overlay, Title } from './styles'
import { ImageSourcePropType } from 'react-native/Libraries/Image/Image';

interface Props {
  size: string;
  title: string;
  img: ImageSourcePropType;
}

const Banner = ({size, title, img}: Props) => {
  return (
    <Container size={size} source={img} resizeMode='cover'>
      <Title>{title}</Title>
      <Overlay />
    </Container>
  );
};

export default Banner;