import { FC } from "react";
import { TextInput, TextInputProps } from "@mantine/core";
import classes from "./floating-label-input.module.css";

interface FloatingLabelInputProps extends TextInputProps {}
export const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
  label,
  placeholder,
  required,
  value,
  onChange,
  ...rest
}) => {
  return (
    <TextInput
      required={required}
      label={label}
      placeholder={placeholder}
      classNames={classes}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
