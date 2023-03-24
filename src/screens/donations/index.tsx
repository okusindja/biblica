import React, { useState } from 'react';
import { Container } from './styles';
import {Picker} from '@react-native-picker/picker';

const Donations = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('option1');
  return (
    <Container>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Option1" value="option1" />
        <Picker.Item label="Option2" value="option2" />
      </Picker>
    </Container>
  );
};

export default Donations;