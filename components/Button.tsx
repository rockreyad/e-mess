import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  label: string;
  onPress?: () => void;
}
export const Button: FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 60,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 18,
  },
  button: {
    borderRadius: 18,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});
