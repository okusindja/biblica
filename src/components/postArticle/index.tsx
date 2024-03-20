import React from 'react';
import { AntDesign, Ionicons  } from "@expo/vector-icons";
import { Container, Line, PostImage, PostText, PostFooter, Title, PostFooterText, PostFooterContent, TitleWrapper } from './styles'

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

const PostArticle = ({title, image, author, category}: Props) => {
  return (
    <>
      <Container>
        <PostImage source={{ uri: `${image}` }} />
        <PostText>
          <TitleWrapper>
            <Title numberOfLines={2}>{title}</Title>
            <Ionicons name="ellipsis-horizontal" size={24} color="#afafaf" />
          </TitleWrapper>
          <PostFooter>
            <PostFooterContent>
              <Ionicons
                name="ios-person-circle-outline"
                size={20}
                color={"#9c9c9c"}
              />
              <PostFooterText>{author}</PostFooterText>
            </PostFooterContent>
            <PostFooterContent>
              <AntDesign name="calendar" size={15} color={"#9c9c9c"} />
              <PostFooterText>{category}</PostFooterText>
            </PostFooterContent>
          </PostFooter>
        </PostText>
      </Container>
      <Line />
    </>
  );
};

export default PostArticle;