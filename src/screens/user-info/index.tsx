import { useMutation, useQuery } from '@apollo/client';
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
import { CREATE_STUDENT, GET_STUDENT_BY_AUTH_ID } from '../../graphql';
import { styles } from '../auth/forms/styles';
import { Button, DateInput, Input, Typography } from '../../elements';
import { AuthLayout } from '../../components/layout';
import ProfileHeader from '../more/profile/profile-header';
import { scale } from 'react-native-size-matters';

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

  const {
    data,
    loading: loadingStudent,
    error: errorStudent,
  } = useQuery(GET_STUDENT_BY_AUTH_ID, {
    fetchPolicy: 'cache-and-network',
    variables: {
      authId: authId,
    },
  });

  const [createStudent, { loading, error }] = useMutation(CREATE_STUDENT, {
    variables: {
      name: name,
      birthdate: convertedDate,
      yearsBeingChristian: numericValue,
      denomination: denomination,
      authId: authId,
    },
  });

  if (loadingStudent) return <ActivityIndicator />;
  if (errorStudent) return <Text>{errorStudent.message}</Text>;

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
      const result = await createStudent();
      navigation.navigate('Início');
      // Handle successful mutation result
      console.log('Mutation result:', result);
    } catch (error) {
      // Handle mutation error
      console.error('Mutation error:', error);
    }
  };
  return (
    <>
      <AuthLayout variant={'white'}>
        <View style={{ top: scale(-50) }}>
          <ProfileHeader hasEditButton={false} />
        </View>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Typography variant="title" align="left" width="100%">
              Editar informações pessoais
            </Typography>
          </View>
          <Input
            variant="white"
            style={styles.input}
            placeholder="Nome"
            value={data.student?.name ? data.student?.name : name}
            onChangeText={(text) => setName(text)}
            autoCapitalize="none"
          />
          {!data.student?.birthdate && (
            <DateInput
              value={birthDate}
              onChange={() => handleDateChange}
              title="Data de nascimento:"
            />
          )}
          <Input
            variant="white"
            style={styles.input}
            autoCapitalize="none"
            placeholder="Denominação"
            value={
              data.student?.denomination
                ? data.student?.denomination
                : denomination
            }
            onChangeText={(text) => setDenomination(text)}
          />
          <Input
            variant="white"
            style={styles.input}
            autoCapitalize="none"
            inputMode="numeric"
            keyboardType="numeric"
            placeholder="Anos como Cristão"
            value={
              data.student?.yearsBeingChristian
                ? data.student?.yearsBeingChristian + ' anos como cristão'
                : yearsBeingChristian
            }
            onChangeText={(text) => setYearsBeingChristian(text)}
          />
          {error && <Text>{error.message}</Text>}
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button onPress={handleMutation} variant="primary" title="Salvar" />
          )}
        </View>
      </AuthLayout>
    </>
  );
};

export default UserInfo;
