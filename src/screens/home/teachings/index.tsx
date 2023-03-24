import React from 'react';
import { Container } from './styles'
import { FlatList, Text } from 'react-native'
import { PostArticle, Skeleton } from '../../../components';
import { useQuery } from '@apollo/client';
import { GET_ALL_MATERIALS } from '../../../graphql/queries';


const Teachings = () => {
  const {loading, data} = useQuery(GET_ALL_MATERIALS);

  if(loading) return <Skeleton form='posts'/>

  return (
    <Container>
      <FlatList
        data={data?.materials}
        renderItem={({item}) => (
          <PostArticle
            image={item.cover.url}
            title={item.title}
            author={item.author.name}
            category={item.category[0]}
          />
        )}/>
    </Container>
  );
};

export default Teachings;