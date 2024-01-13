import { FC } from "react";
import { Image, ImageProps, StyleSheet } from "react-native";

interface ImageViewerProps {
  source: ImageProps["source"];
  selectedImage: string | null;
}
export const ImageViewer: FC<ImageViewerProps> = ({
  source,
  selectedImage,
}) => {
  const imageSource = selectedImage ? { uri: selectedImage } : source;

  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
