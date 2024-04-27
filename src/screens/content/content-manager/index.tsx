import BlockButton from '@components/block-button';
import OptionItem from '@components/option-item';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '@routes/routes.types';
import { AddBagSVG, BlocksSVG, ListSVG, PlayBook } from '@svg';
import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

const ContentManager: FC = () => {
  const navigation = useNavigation<StackTypes>();
  return (
    <ScrollView style={styles.container}>
      <OptionItem
        title="Verificar estatísticas"
        Preffix={BlocksSVG}
        onPress={() => {}}
      />
      <View style={styles.buttonsContainer}>
        <BlockButton
          title="Gestão de alunos"
          Icon={PlayBook}
          size="small"
          onPress={() => {
            navigation.navigate('Gestão de alunos');
          }}
        />
        <BlockButton
          title="Gestão de cursos"
          Icon={AddBagSVG}
          size="small"
          onPress={() => {}}
        />
        <BlockButton
          title="Gestão de aulas"
          Icon={ListSVG}
          size="small"
          onPress={() => {}}
        />
        <BlockButton
          title="Button"
          Icon={PlayBook}
          size="big"
          onPress={() => {}}
        />
        <BlockButton
          title="Gestão de alunos"
          Icon={PlayBook}
          size="small"
          onPress={() => {}}
        />
        <BlockButton
          title="Gestão de cursos"
          Icon={AddBagSVG}
          size="small"
          onPress={() => {}}
        />
        <BlockButton
          title="Gestão de aulas"
          Icon={ListSVG}
          size="small"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default ContentManager;
