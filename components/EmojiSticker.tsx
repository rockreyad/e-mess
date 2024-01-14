import React, { FC } from "react";
import { Image, ImageProps, View } from "react-native";

interface EmojiStickerProps {
  stickerSource: ImageProps["source"];
  imageSize: number;
}
export const EmojiSticker: FC<EmojiStickerProps> = ({
  stickerSource,
  imageSize,
}) => {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};
