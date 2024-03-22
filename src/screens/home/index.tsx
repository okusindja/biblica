import { useQuery } from '@apollo/client';
import React from 'react';
import { FlatList, RefreshControl, Text } from 'react-native';

import { Card, PostArticle, Skeleton } from '../../components';

import { GET_ALL_POSTS } from '../../graphql';
import { useRefresh } from '../../hooks';
import { CardContainer, Container, Title } from './styles';
import { SearchSVG } from '../../components/svg';
import { Input } from '../../elements';

const Posts = () => {
  const { data, refetch, loading } = useQuery(GET_ALL_POSTS, {
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
        variant="white"
        inputMode="text"
        Prefix={SearchSVG}
        placeholder="Procurar postagem por autor ou titulo"
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
            title={item.title}
            category={item.post}
            image={item.image.url}
            author={item.authors[0].name}
          />
        )}
      />
    </Container>
  );
};

export default Posts;
