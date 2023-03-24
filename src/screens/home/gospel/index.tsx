import React from 'react';
import { Text } from 'react-native'
import { Container, ContentText } from './styles'
import { ContentHeader, Skeleton } from '../../../components';
import { useQuery } from '@apollo/client';
import { GET_ALL_MATERIALS } from '../../../graphql/queries';

const Gospel = () => {
  const {loading, data} = useQuery(GET_ALL_MATERIALS);
  
  if(loading) return <Skeleton form='banner-text' />

  return (
    <Container>
      <ContentHeader title={data?.materials[0].title} />
      <ContentText>{data?.materials[0].content.text}</ContentText>
    </Container>
  );
};

export default Gospel;