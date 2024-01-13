import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageViewer } from "./components/ImageViewer";
import { Button } from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSetselectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSetselectedImage(result.assets[0].uri);
    } else {
      alert("No image selected");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer source={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" onPress={pickImage} />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    gap: 16,
  },
});
