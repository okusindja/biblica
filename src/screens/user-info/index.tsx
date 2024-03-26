import { useMutation, useQuery } from '@apollo/client';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { FC, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { AuthLayout } from '../../components/layout';
import { Button, DateInput, Input, Typography } from '../../elements';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { CREATE_STUDENT, GET_STUDENT_BY_AUTH_ID } from '../../graphql';
import { styles } from '../auth/forms/styles';
import ProfileHeader from '../more/profile/profile-header';

const UserInfo: FC = () => {
  // const navigation = useNavigation();
  const authId = FIREBASE_AUTH.currentUser!.uid;
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
  const student = data.student;
  const [name, setName] = useState(student?.name ? student?.name : '');
  const [birthDate, setBirthDate] = useState<Date>(
    new Date() || student?.birthdate
  );
  const [denomination, setDenomination] = useState(
    student?.denomination ? student?.denomination : ''
  );
  const [yearsBeingChristian, setYearsBeingChristian] = useState(
    student?.yearsBeingChristian ? student?.yearsBeingChristian : ''
  );
  // const [photo, setPhoto] = useState('');
  // const [canSaveChanges, setCanSaveChanges] = useState(false);

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

  // useEffect(() => {
  //   if (
  //     (name != '' || name != student.name) &&
  //     (denomination != '' || denomination != student.denomination) &&
  //     (yearsBeingChristian != '' ||
  //       yearsBeingChristian != student.yearsBeingChristian)
  //   ) {
  //     setCanSaveChanges(true);
  //     console.log('Can save changes');
  //   }
  // }, [name, denomination, yearsBeingChristian]);

  // const handleCannotSaveChanges = () => {
  //   console.log('Cannot save changes');
  // };

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

  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setPhoto(result.assets[0].uri);
  //   }
  // };

  const handleMutation = async () => {
    try {
      const result = await createStudent();
      // navigation.navigate('Início');
      // Handle successful mutation result
      console.log('Mutation result:', result);
    } catch (error) {
      // Handle mutation error
      console.error('Mutation error:', error);
    }
  };

  return (
    <>
      <AuthLayout variant={'red'}>
        <View style={{ top: scale(-50) }}>
          <ProfileHeader hasEditButton={false} />
        </View>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Typography
              variant="title"
              align="left"
              width="100%"
              themeColor="white"
            >
              Editar informações pessoais
            </Typography>
            <Typography
              variant="paragraph"
              align="left"
              width="100%"
              themeColor="white"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores in qui doloremque? Aliquam culpa harum minima id,
              voluptates commodi corrupti ducimus soluta voluptate nobis ut
              animi. Itaque incidunt suscipit maxime!
            </Typography>
          </View>
          <Input
            variant="red"
            title="Nome"
            inputMode="text"
            placeholder="Nome"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            autoCapitalize="none"
          />
          {!student?.birthdate && (
            <DateInput
              value={birthDate}
              onChange={() => handleDateChange}
              title="Data de nascimento:"
            />
          )}
          <Input
            variant="red"
            inputMode="text"
            title="Denominação"
            autoCapitalize="none"
            placeholder="Denominação"
            value={denomination}
            onChangeText={(text) => setDenomination(text)}
          />
          <Input
            variant="red"
            title="Anos como Cristão"
            autoCapitalize="none"
            inputMode="numeric"
            keyboardType="numeric"
            placeholder="Anos como Cristão"
            value={yearsBeingChristian + ''}
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
