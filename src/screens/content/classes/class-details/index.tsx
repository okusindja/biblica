import React, { useState } from "react";
import { Container } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Banner,
  Card,
  ContentHeader,
  PostArticle,
} from "../../../../components";
import { CaretDownSVG } from "../../../../components/svg";
import { Row } from "../../../../design-system/global-styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabParams } from "../../../../routes/bottom-tabs";
import VoiceLobby from "./voice-lobby";

const AULAS = [
  {
    id: 1,
    title: "Aula 1",
    image:
      "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
  },
  {
    id: 2,
    title: "Aula 2",
    image:
      "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
  },
  {
    id: 3,
    title: "Aula 3",
    image:
      "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
  },
  {
    id: 4,
    title: "Aula 4",
    image:
      "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
  },
  {
    id: 5,
    title: "Aula 5",
    image:
      "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
  },
  {
    id: 6,
    title: "Aula 6",
    image:
      "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
  },
  {
    id: 7,
    title: "Aula 7",
    image:
      "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
  },
  {
    id: 8,
    title: "Aula 8",
    image:
      "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
  },
  {
    id: 9,
    title: "Aula 9",
    image:
      "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
  },
  {
    id: 10,
    title: "Aula 10",
    image:
      "https://www.credocourses.com/wp-content/uploads/2022/10/IT-Credo-Academy.png",
  },
  {
    id: 11,
    title: "AVALIAÇÃO FINAL",
    image:
      "https://www.pngall.com/wp-content/uploads/14/Mario-Star-PNG-Photos.png",
  },
];

const ClassDetails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();
  const route = useRoute();
  const [color, setColor] = useState(false);
  return (
    <Container>
      <ContentHeader title={route.params?.title} notIsGoBack />
      <Banner img={{ uri: route.params?.image }} size="L" title="" />
      <Row align="center" gap="10px">
        <Text>Professor: {route.params?.author}</Text>
        <Text style={{ fontSize: 28 }}> | </Text>
        <Text>{route.params?.category}</Text>
        <Text style={{ fontSize: 28 }}> | </Text>
        <Text>{route.params?.category}</Text>
      </Row>
      <Text style={{ marginVertical: 20, textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores esse
        fuga aut, quod tempora illo nobis pariatur! Accusamus eos numquam
        debitis ipsum. Ipsa nam tempore hic ut consectetur dolor? Molestias?
      </Text>
      <Row align="space-between" mh="20px" hasLine>
        <Text style={{ fontSize: 22 }}>Sala de aulas</Text>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 50,
            backgroundColor: color ? "green" : "#E21F2C",
          }}
        />
      </Row>

      <VoiceLobby setToggleColor={setColor} toggleColor={color} />
      <Row align="space-between" mh="20px">
        <Text>Aulas ({AULAS.length})</Text>
        <CaretDownSVG maxHeight={30} maxWidth={30} />
      </Row>
      <View style={{}}>
        {AULAS.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Conteúdo", {
                // If last index is equal to index, then "Avaliação" else "Aula"
                screen: index === AULAS.length - 1 ? "Avaliação" : "Aula",
                params: { image: item.image, title: item.title },
              })
            }
          >
            <PostArticle
              key={item.id}
              title={item.title}
              image={item.image}
              author={route.params?.author}
              category={route.params?.category}
            />
          </TouchableOpacity>
        ))}
      </View>
    </Container>
  );
};

export default ClassDetails;
