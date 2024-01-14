import React, { ComponentProps, FC } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface IconButtonProps {
  icon: ComponentProps<typeof MaterialIcons>["name"];
  label: string;
  onPress?: PressableProps["onPress"];
}
export const IconButton: FC<IconButtonProps> = ({ icon, label, onPress }) => {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="white" />
      <Text style={styles.iconButtonlabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonlabel: {
    color: "#fff",
    marginTop: 8,
  },
});
