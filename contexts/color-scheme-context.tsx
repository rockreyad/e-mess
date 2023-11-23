// ColorSchemeContext.jsx file
import { createContext } from "react";

interface ColorSchemeContextProps {
  colorScheme: string;
  onChange: (colorScheme: string) => void;
  setColorScheme: (colorScheme: string) => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextProps>({
  colorScheme: "light",
  onChange: () => {},
  setColorScheme: () => {},
});

export default ColorSchemeContext;
