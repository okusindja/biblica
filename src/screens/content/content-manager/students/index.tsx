import { Tabs } from '@components';
import { Typography } from '@elements';
import React from 'react';
import { ScrollView, View } from 'react-native';

import { STUDENTS_TABS_DATA } from './students.data';
import { styles } from './styles';

const StudentsManager = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Typography variant="title" bold>
          Alunos
        </Typography>
        <Tabs
          content={STUDENTS_TABS_DATA.content}
          text={STUDENTS_TABS_DATA.text}
        />
      </View>
    </ScrollView>
  );
};

export default StudentsManager;
