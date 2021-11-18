import React, {FC} from 'react';

import {mdaq} from './custom/MDaqTheme';
import {IThemeProvider, ITheme} from '../types/Theme';

export const ThemeContext = React.createContext({
  theme: mdaq,
  setTheme: () => {},
});

export const ThemeProvider: FC = ({
  children,
  theme,
  setTheme = () => {},
}: IThemeProvider) => {
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme(): ITheme {
  const {theme} = React.useContext(ThemeContext);
  return theme;
}
