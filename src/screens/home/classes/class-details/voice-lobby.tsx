import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { ExitSVG, MuteSVG, UnmuteSVG } from "../../../../components/svg";
import { Row } from "../../../../design-system/global-styles";

interface Props {
  toggleColor: boolean;
  setToggleColor: (value: boolean) => void;
}

const VoiceLobby = ({ setToggleColor, toggleColor }: Props) => {
  const [isInChannel, setIsInChannel] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: "Manel", isMuted: false },
    { id: 2, name: "Professor José", isMuted: true },
    { id: 3, name: "Anastácio", isMuted: false },
    { id: 4, name: "Irina", isMuted: true },
  ]);

  const handleJoinLeaveChannel = () => {
    setIsInChannel(!isInChannel);
    setToggleColor(!toggleColor);
    if (!isInChannel) {
      // Resetar o mute ao entrar
      setIsMuted(false);
    }
  };

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <View style={{}}>
      {isInChannel ? (
        <>
          <Row align="space-between" mh="10px">
            <Text style={{ fontSize: 16 }}>Usuários na sala:</Text>
            <TouchableOpacity onPress={handleJoinLeaveChannel}>
              {isInChannel ? (
                <Row gap="6px">
                  <Text style={{ fontSize: 16 }}>Sair da sala</Text>
                  <ExitSVG maxHeight={22} maxWidth={22} />
                </Row>
              ) : (
                <Text style={{ fontSize: 16 }}>Entrar</Text>
              )}
            </TouchableOpacity>
          </Row>
          {users.map((user) => (
            <Row align="space-between" mh="4px" hasLine>
              <Text key={user.id}>{user.name}</Text>
              {user.isMuted ? (
                <MuteSVG maxHeight={30} maxWidth={30} />
              ) : (
                <UnmuteSVG maxHeight={30} maxWidth={30} />
              )}
            </Row>
          ))}
          {/* Inclui o usuário atual se ele estiver no canal */}
          <Row align="space-between" mh="4px">
            <Text>Você</Text>
            {isMuted ? (
              <TouchableOpacity onPress={handleMuteUnmute}>
                <MuteSVG maxHeight={30} maxWidth={30} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleMuteUnmute}>
                <UnmuteSVG maxHeight={30} maxWidth={30} />
              </TouchableOpacity>
            )}
          </Row>
        </>
      ) : (
        <TouchableOpacity
          style={{ backgroundColor: "#E21F2C", padding: 20, borderRadius: 5 }}
          onPress={handleJoinLeaveChannel}
        >
          <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>
            Entrar na sala
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VoiceLobby;
