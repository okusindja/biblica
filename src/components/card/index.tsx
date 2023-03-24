import React from 'react';
import { Container, Info, Overlay, PostFooterContent, Title } from './styles'
import { Ionicons, AntDesign } from "@expo/vector-icons";


interface Props {
  item: any;
}

const Card = ({item}: Props) => {
  return (
    <Container source={{ uri: `${item.image.url}` }}>
      <Overlay/>
        <Title numberOfLines={2}>{item.title}</Title>
        <PostFooterContent>
        <Ionicons name="ios-person-circle" size={22} color="white" />
          <Info>{item?.authors[0].name}</Info>
          <AntDesign  name='calendar' size={15} color={'white'} />
          <Info>{item?.post}</Info>
        </PostFooterContent>
    </Container>
  );
};

export default Card;