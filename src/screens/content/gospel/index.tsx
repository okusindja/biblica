import { useQuery } from '@apollo/client';
import React from 'react';

import { ContentHeader, Skeleton } from '../../../components';
import { GET_ALL_MATERIALS } from '../../../graphql';
import { Container, ContentText } from './styles';

const Gospel = () => {
  const { loading, data } = useQuery(GET_ALL_MATERIALS);

  if (loading) return <Skeleton form="banner-text" />;

  return (
    <Container>
      <ContentHeader title={data?.materials[0].title} />
      <ContentText>{data?.materials[0].content.text}</ContentText>
    </Container>
  );
};

export default Gospel;
