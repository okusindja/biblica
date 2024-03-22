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

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Oi</Text>
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
        <Text style={styles.name}>Juan Brasilian</Text>
        <View style={styles.curiosities}>
          <View style={styles.curiosityEdge}>
            <ChurchSVG
              maxWidth={scale(12)}
              maxHeight={scale(12)}
              color="#999999"
            />
            <Text style={styles.curiosityText}>Metodista</Text>
          </View>
          <View style={styles.curiosityMiddle}>
            <CrossSVG
              maxWidth={scale(12)}
              maxHeight={scale(12)}
              color="#999999"
            />
            <Text style={styles.curiosityText}>Crente a 7 anos</Text>
          </View>
          <View style={styles.curiosityEdge}>
            <HeartSVG
              maxWidth={scale(12)}
              maxHeight={scale(12)}
              color="#999999"
            />
            <Text style={styles.curiosityText}>Jesus é TUDO</Text>
          </View>
        </View>
      </LinearGradient>
      <Layout>
        <Text style={styles.sectionTitle}>Histórico de notas:</Text>
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
        <Text style={styles.sectionTitle}>Items salvos:</Text>
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
        <Text style={styles.sectionTitle}>Meus professores:</Text>
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
