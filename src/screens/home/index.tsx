import React from 'react';
import { Container } from './styles'
import { Banner } from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { BottomTabParams } from '../../routes/bottom-tabs';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<BottomTabParams>>();
  const img1 = require('../../../assets/banner1.jpg');
  const img2 = require('../../../assets/banner2.jpg');
  const img3 = require('../../../assets/banner3.jpg');
  const img4 = require('../../../assets/banner4.jpg');
  const img5 = require('../../../assets/banner5.jpg');
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Conteúdo", { screen: "Evangelho" });
        }}
      >
        <Banner size="L" title="Evangelho" img={img1} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Conteúdo", { screen: "Ensinos" });
        }}
      >
        <Banner size="L" title="Ensinos" img={img2} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Conteúdo", { screen: "Planos de meditação" });
        }}
      >
        <Banner size="L" title="Planos de meditação" img={img3} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Conteúdo", { screen: "Planos de oração" });
        }}
      >
        <Banner size="L" title="Planos de oração" img={img4} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Conteúdo", {
            screen: "Solicitar aconselhamento",
          });
        }}
      >
        <Banner size="L" title="Solicitar aconselhamento" img={img5} />
      </TouchableOpacity>
    </Container>
  );
};

export default Home;