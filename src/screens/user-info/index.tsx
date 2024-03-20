import { useMutation } from '@apollo/client';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { CREATE_STUDENT } from '../../graphql';
import { styles } from '../auth/forms/styles';

const UserInfo: FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState<Date>(new Date());
  const [denomination, setDenomination] = useState('');
  const [yearsBeingChristian, setYearsBeingChristian] = useState('');
  const [photo, setPhoto] = useState('');
  const authId = FIREBASE_AUTH.currentUser!.uid;

  const convertedDate = birthDate.toISOString();

  const numericValue = parseInt(yearsBeingChristian, 10);

  const [createStudent, { loading, error }] = useMutation(CREATE_STUDENT, {
    variables: {
      name: name,
      birthdate: convertedDate,
      yearsBeingChristian: numericValue,
      denomination: denomination,
      authId: authId,
    },
  });

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || birthDate;
    setBirthDate(currentDate);
    console.log('Date:', currentDate);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleMutation = async () => {
    try {
      // const result = await createStudent();
      navigation.navigate('Início');
      // Handle successful mutation result
      // console.log('Mutation result:', result);
    } catch (error) {
      // Handle mutation error
      console.error('Mutation error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Informações importantes para nós</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
        autoCapitalize="none"
      />
      {/* <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Data de Nascimento"
        value={birthDate}
        onChangeText={(text) => setBirthDate(text)}
      /> */}
      <RNDateTimePicker
        display="calendar"
        value={birthDate}
        onChange={handleDateChange}
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Denominação"
        value={denomination}
        onChangeText={(text) => setDenomination(text)}
      />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        inputMode="numeric"
        keyboardType="numeric"
        placeholder="Anos como Cristão"
        value={yearsBeingChristian}
        onChangeText={(text) => setYearsBeingChristian(text)}
      />

      {error && <Text>{error.message}</Text>}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Pressable onPress={handleMutation} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
      )}
    </View>
  );
};

export default UserInfo;
