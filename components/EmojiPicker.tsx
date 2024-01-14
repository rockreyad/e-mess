import { MaterialIcons } from "@expo/vector-icons";
import React, { FC, PropsWithChildren } from "react";
import {
  Modal,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface EmojiPickerProps extends PropsWithChildren {
  isVisible: boolean;
  onClose: PressableProps["onPress"];
}
export const EmojiPicker: FC<EmojiPickerProps> = ({
  isVisible,
  children,
  onClose,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a stciker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={24} color="white" />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});
