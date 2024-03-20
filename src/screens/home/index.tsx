import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Banner } from '../../components';
import { BottomTabParams } from '../../routes/bottom-tabs';
import { StackTypes } from '../../routes/routes.types';
import { Container } from './styles';

const Home = () => {
  const navigation = useNavigation<StackTypes>();
  const img0 = require('../../../assets/turmas.jpeg');
  const img1 = require('../../../assets/banner1.jpg');
  const img2 = require('../../../assets/banner2.jpg');
  const img3 = require('../../../assets/banner3.jpg');
  const img4 = require('../../../assets/banner4.jpg');
  const img5 = require('../../../assets/banner5.jpg');
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Turmas');
        }}
      >
        <Banner size="L" title="Turmas" img={img0} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Conteúdo', { screen: 'Evangelho' });
        }}
      >
        <Banner size="L" title="Evangelho" img={img1} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Conteúdo', { screen: 'Ensinos' });
        }}
      >
        <Banner size="L" title="Ensinos" img={img2} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Conteúdo', { screen: 'Planos de meditação' });
        }}
      >
        <Banner size="L" title="Planos de meditação" img={img3} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Conteúdo', { screen: 'Planos de oração' });
        }}
      >
        <Banner size="L" title="Planos de oração" img={img4} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Conteúdo', {
            screen: 'Solicitar aconselhamento',
          });
        }}
      >
        <Banner size="L" title="Solicitar aconselhamento" img={img5} />
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
