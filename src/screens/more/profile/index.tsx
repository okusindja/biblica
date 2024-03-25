import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { Layout } from '../../../components/layout';
import {
  CaretLeftSVG,
  ChurchSVG,
  CrossSVG,
  HeartSVG,
  PencilSVG,
  ProfileBgSVG,
} from '../../../components/svg';
import { styles } from './styles';
import { PostArticle } from '../../../components';
import CaretLeft from '../../../components/svg/caret-left';
import ProfileHeader from './profile-header';
import { Typography } from '../../../elements';
import { useQuery } from '@apollo/client';
import { GET_STUDENT_BY_AUTH_ID } from '../../../graphql';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

const Profile = () => {
  const auth = FIREBASE_AUTH.currentUser?.uid;
  const { data, loading, error } = useQuery(GET_STUDENT_BY_AUTH_ID, {
    notifyOnNetworkStatusChange: true,
    variables: {
      authId: auth,
    },
  });

  const student = data.student;

  if (loading) return <Text>Loading...</Text>;
  if (error) console.log(error);

  return (
    <ScrollView style={styles.container}>
      <ProfileBgSVG
        style={{
          top: scale(-35),
          position: 'absolute',
          zIndex: 1,
        }}
        maxHeight={scale(380)}
        maxWidth={scale(366)}
      />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'white']}
        style={styles.header}
      >
        <ProfileHeader />
        <Image
          source={{
            uri: 'https://bookingagentinfo.com/wp-content/uploads/2022/12/Stromae-1.jpg',
          }}
          style={styles.photo}
        />
        <Typography variant="title" size="l">
          {student?.name ? student?.name : 'Sem nome'}
        </Typography>
        <View style={styles.curiosities}>
          <View style={styles.curiosityEdge}>
            <ChurchSVG
              maxWidth={scale(12)}
              maxHeight={scale(12)}
              color="#999999"
            />
            <Typography variant="legend" bold>
              {student?.denomination
                ? student?.denomination
                : 'Sem denominação'}
            </Typography>
          </View>
          <View style={styles.curiosityMiddle}>
            <CrossSVG
              maxWidth={scale(12)}
              maxHeight={scale(12)}
              color="#999999"
            />
            <Typography variant="legend" bold>
              Crente a{' '}
              {student?.yearsBeingChristian ? student?.yearsBeingChristian : 0}{' '}
              anos
            </Typography>
          </View>
          <View style={styles.curiosityEdge}>
            <HeartSVG
              maxWidth={scale(12)}
              maxHeight={scale(12)}
              color="#999999"
            />
            <Typography variant="legend" bold>
              Jesus é TUDO
            </Typography>
          </View>
        </View>
      </LinearGradient>
      <Layout>
        <Typography variant="title">Histórico de notas:</Typography>
        <LinearGradient
          colors={['#F5F5F5', 'white']}
          locations={[0, 1]}
          style={(styles.section, styles.paddedSection)}
        >
          <Text>Nota 1</Text>
          <Text>Nota 2</Text>
          <Text>Nota 3</Text>
          <Text>Nota 4</Text>
          <Text>Nota 5</Text>
          <Text>Nota 6</Text>
          <Text>Nota 7</Text>
          <Text>Nota 8</Text>
          <Text>Nota 9</Text>
          <Text>Nota 10</Text>
        </LinearGradient>
        <Typography variant="title">Items salvos:</Typography>
        <LinearGradient
          colors={['#F5F5F5', 'white']}
          locations={[0, 1]}
          style={[styles.section, styles.paddedSection]}
        >
          <PostArticle
            title="eumesmo"
            author="nathing"
            category="haha"
            image="https://bookingagentinfo.com/wp-content/uploads/2022/12/Stromae-1.jpg"
          />
          <PostArticle
            title="eumesmo"
            author="nathing"
            category="haha"
            image="https://bookingagentinfo.com/wp-content/uploads/2022/12/Stromae-1.jpg"
          />
          <PostArticle
            title="eumesmo"
            author="nathing"
            category="haha"
            image="https://bookingagentinfo.com/wp-content/uploads/2022/12/Stromae-1.jpg"
          />
        </LinearGradient>
        <Typography variant="title">Minhas ligações:</Typography>
        <LinearGradient
          colors={['#F5F5F5', 'white']}
          locations={[0, 1]}
          style={[styles.section, styles.wrappingRow]}
        >
          <View style={styles.person}>
            <Image
              source={{
                uri: 'https://bookingagentinfo.com/wp-content/uploads/2022/12/Stromae-1.jpg',
              }}
              style={styles.personalPhoto}
            />
            <Text>Professor</Text>
          </View>
          <View style={styles.person}>
            <Image
              source={{
                uri: 'https://bookingagentinfo.com/wp-content/uploads/2022/12/Stromae-1.jpg',
              }}
              style={styles.personalPhoto}
            />
            <Text>Professor</Text>
          </View>
          <View style={styles.person}>
            <Image
              source={{
                uri: 'https://bookingagentinfo.com/wp-content/uploads/2022/12/Stromae-1.jpg',
              }}
              style={styles.personalPhoto}
            />
            <Text>Professor</Text>
          </View>
          <View style={styles.person}>
            <Image
              source={{
                uri: 'https://bookingagentinfo.com/wp-content/uploads/2022/12/Stromae-1.jpg',
              }}
              style={styles.personalPhoto}
            />
            <Text>Professor</Text>
          </View>
          <View style={styles.person}>
            <Image
              source={{
                uri: 'https://bookingagentinfo.com/wp-content/uploads/2022/12/Stromae-1.jpg',
              }}
              style={styles.personalPhoto}
            />
            <Text>Professor</Text>
          </View>
        </LinearGradient>
      </Layout>
    </ScrollView>
  );
};

export default Profile;
