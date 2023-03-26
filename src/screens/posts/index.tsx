import React from 'react';
import { Card, PostArticle, Skeleton } from '../../components';
import { CardContainer, Container, Title } from './styles'

import Input from '../../elements/input';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../../graphql/queries';
import { FlatList, RefreshControl, Text } from 'react-native';
import { useRefresh } from "../../utils/useRefresh";

const Posts = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_POSTS, {
    notifyOnNetworkStatusChange: true,
  });

  const { refreshing, onRefresh } = useRefresh(refetch);

  const total = data?.posts.length;

  if (loading) return <Skeleton form="banner-post" />;

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Input
        placeholder="Procurar postagem por autor ou titulo"
        mode="text"
        value=""
        mb="20px"
      />
      <CardContainer>
        <Card item={data?.posts[0]} />
      </CardContainer>
      <Title>Últimas postagens</Title>
      <FlatList
        scrollEnabled={false}
        data={data?.posts.slice(1, total)}
        renderItem={({ item }) => (
          <PostArticle
            image={item.image.url}
            title={item.title}
            author={item.authors[0].name}
            category={item.post}
          />
        )}
      />
    </Container>
  );
};

export default Posts;