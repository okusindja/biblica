import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpg';
import banner4 from '../../../assets/banner4.jpg';
import banner5 from '../../../assets/banner5.jpg';
import turmas from '../../../assets/turmas.jpeg';
import { Banner } from '../../components';
import { StackTypes } from '../../routes/routes.types';
import { Container } from './styles';

const Home = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Turmas');
        }}
      >
        <Banner size="L" title="Turmas" img={turmas} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Evangelho');
        }}
      >
        <Banner size="L" title="Evangelho" img={banner1} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Ensinos');
        }}
      >
        <Banner size="L" title="Ensinos" img={banner2} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Planos de meditação');
        }}
      >
        <Banner size="L" title="Planos de meditação" img={banner3} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Planos de oração');
        }}
      >
        <Banner size="L" title="Planos de oração" img={banner4} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Solicitar aconselhamento');
        }}
      >
        <Banner size="L" title="Solicitar aconselhamento" img={banner5} />
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
