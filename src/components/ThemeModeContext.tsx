import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";

const ThemeModeContext = createContext({
  toggleThemeMode: () => {}
});

export const useThemeModeToggle = () => useContext(ThemeModeContext);

const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem("theme") || "light") as PaletteMode
  );

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  useEffect(() => localStorage.setItem("theme", mode), [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
