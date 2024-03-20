import React from "react";
import { Container } from "./styles";
import { TouchableOpacity } from "react-native";
import { Card, ContentHeader, PostArticle } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabParams } from "../../../routes/bottom-tabs";

const ITEMS = [
  {
    id: 1,
    title: "Teologia 1",
    image: {
      url: "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
    },
    authors: [
      {
        name: "José",
      },
    ],
    post: "10/10/2021",
  },
  {
    id: 2,
    title: "Teologia 2",
    image: {
      url: "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
    },
    authors: [
      {
        name: "Maria",
      },
    ],
    post: "10/10/2021",
  },
  {
    id: 3,
    title: "Teologia 3",
    image: {
      url: "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
    },
    authors: [
      {
        name: "João",
      },
    ],
    post: "10/10/2021",
  },
];

const Classes = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();
  return (
    <Container>
      <ContentHeader title="Cursos e Módulos" notIsGoBack />
      <Card item={ITEMS[0]} />
      {ITEMS.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate("Conteúdo", {
              screen: "Turma",
              params: {
                author: item.authors[0].name,
                category: item.post,
                image: item.image.url,
                title: item.title,
              },
            })
          }
        >
          <PostArticle
            key={item.id}
            title={item.title}
            category={item.post}
            image={item.image.url}
            author={item.authors[0].name}
          />
        </TouchableOpacity>
      ))}
    </Container>
  );
};

export default Classes;
