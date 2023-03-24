import React, { useEffect, useState } from 'react';
import { AuthorPhoto, Container, Photo, Player, PreacherName, PreachingSubject } from './styles'
import { Text } from 'react-native';
import { AntDesign, Ionicons  } from "@expo/vector-icons";

const PreachPlace = () => {
  const [isLive, setLive] = useState(true);
  const [isOnTime, setOnTime] = useState(true);
  return (
    <Container>
        {
          isOnTime ? 
          (<>
          <AuthorPhoto style={{
          shadowColor: 'black',
          shadowOpacity: 0.10,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
          elevation: 10,
        }}>
            <Photo source={require('../../../assets/face.jpg')} />
          </AuthorPhoto>
          <PreacherName>Johanne Doe</PreacherName>
          <PreachingSubject>O amor de Deus</PreachingSubject>
          <Player>
            <Ionicons name={isLive ? 'play' : 'square'} color='#fff' size={60} 
            onPress={() => setLive(!isLive)} />
          </Player>
          
          </>) : 
          (<>
            <Text>Sem pregação no momento</Text>
          </>)
        }
        
    </Container>
  );
};

export default PreachPlace;