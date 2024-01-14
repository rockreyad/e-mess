import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageViewer } from "./components/ImageViewer";
import { Button } from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { CircleButton } from "./components/CircleButton";
import { IconButton } from "./components/IconButton";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSetselectedImage] = useState<string | null>(null);
  const [showAppOptions, setshowAppOptions] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSetselectedImage(result.assets[0].uri);
      setshowAppOptions(true);
    } else {
      alert("No image selected");
    }
  };

  const onReset = () => {
    setSetselectedImage(null);
    setshowAppOptions(false);
  };

  const onAddSticker = () => {
    alert("Add sticker");
  };

  const onSaveImage = async () => {
    alert("Save image");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer source={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Retake" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImage} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button label="Choose a photo" onPress={pickImage} />
          <Button
            label="Use this photo"
            onPress={() => setshowAppOptions(true)}
          />
        </View>
      )}
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
});
