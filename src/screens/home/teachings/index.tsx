import React from 'react';
import { Container } from './styles'
import { FlatList, Text } from 'react-native'
import { PostArticle, Skeleton } from '../../../components';
import { useQuery } from '@apollo/client';
import { GET_ALL_MATERIALS } from '../../../graphql/queries';
import { useRefresh } from "../../../utils/useRefresh";
import { RefreshControl } from "react-native";


const Teachings = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_MATERIALS, {
    notifyOnNetworkStatusChange: true,
  });

  const { refreshing, onRefresh } = useRefresh(refetch);

  if(loading) return <Skeleton form='posts'/>

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FlatList
        scrollEnabled={false}
        data={data?.materials}
        renderItem={({ item }) => (
          <PostArticle
            image={item.cover.url}
            title={item.title}
            author={item.author.name}
            category={item.category[0]}
          />
        )}
      />
    </Container>
  );
};

export default Teachings;