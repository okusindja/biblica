import React, { useState } from "react";
import { Card, PostArticle, Skeleton } from "../../components";
import { CardContainer, Container, Title } from "./styles";

import Input from "../../elements/input";
import { useQuery } from "@apollo/client";
import { FlatList, RefreshControl, Text } from "react-native";
import { useRefresh } from "../../hooks";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { GET_ALL_POSTS } from "../../graphql";

const Posts = () => {
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { data, refetch } = useQuery(GET_ALL_POSTS, {
    notifyOnNetworkStatusChange: true,
  });

  const { refreshing, onRefresh } = useRefresh(refetch);

  const total = data?.posts.length;

  if (loading) return <Skeleton form="banner-post" />;

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text onPress={handleSignOut}>Logout</Text>
      <Input
        value=""
        mb="20px"
        mode="text"
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
