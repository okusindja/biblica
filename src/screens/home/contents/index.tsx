import React from "react";
import { Container } from "./styles";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { ContentHeader } from "../../../components";
import { useRoute } from "@react-navigation/native";
import { CaretDownSVG, PlaySVG } from "../../../components/svg";
import { Row } from "../../../design-system/global-styles";

const Contents = () => {
  const route = useRoute();
  return (
    <Container>
      <ContentHeader title={route.params.title} />
      <View
        style={{
          backgroundColor: "black",
          flexDirection: "row",
          height: 300,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <PlaySVG maxHeight={90} maxWidth={90} />
      </View>
      <Row align="space-between" mh="20px">
        <Text>Conteúdo de apoio</Text>
        <CaretDownSVG maxHeight={30} maxWidth={30} />
      </Row>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        minus enim iure eum reprehenderit ut sequi, dolores voluptatem, eligendi
        error eos laudantium quo suscipit nostrum. Voluptates sunt temporibus
        autem fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate minus enim iure eum reprehenderit ut sequi, dolores
        voluptatem, eligendi error eos laudantium quo suscipit nostrum.
        Voluptates sunt temporibus autem fuga. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Cupiditate minus enim iure eum
        reprehenderit ut sequi, dolores voluptatem, eligendi error eos
        laudantium quo suscipit nostrum. Voluptates sunt temporibus autem fuga.
      </Text>
    </Container>
  );
};

export default Contents;
