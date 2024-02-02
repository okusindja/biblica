import React, { FC } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { WelcomeSlideProps } from "./welcome-slide.types";
import { LogoSVG } from "../../components/svg";

const WelcomeSlide: FC<WelcomeSlideProps> = ({ onDismiss }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Text style={styles.description}>
        Here's a quick guide to get you started.
      </Text>
      <LogoSVG maxWidth={200} maxHeight={200} secondary />
      {/* Add more content as needed */}
      <Button title="Get Started" onPress={onDismiss} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#E21F2C",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default WelcomeSlide;
