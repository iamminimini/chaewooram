'use client';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isDarkThemeState } from '@/recoil/header/atom';
import DarkModeToggle from '@/components/common/DarkModeToggle';
import { GlobalStyle } from '@/styles/GlobalStyles';
import { darkTheme, lightTheme } from '@/styles/theme';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const muiLight = createTheme({ palette: { mode: 'light' } });
const muiDark = createTheme({ palette: { mode: 'dark' } });

export default function Provider({ children }) {
  const [isDark, setIsDark] = useRecoilState(isDarkThemeState); // 전역 다크모드

  // 기존: 로컬스토리지 useEffect -> recoil 연동
  useEffect(() => {
    const stored = localStorage.getItem('theme-dark');
    if (stored !== null) {
      setIsDark(stored === 'true');
    } else {
      setIsDark(window?.matchMedia('(prefers-color-scheme: dark)').matches ?? true);
    }
  }, [setIsDark]);

  useEffect(() => {
    localStorage.setItem('theme-dark', String(isDark));
  }, [isDark]);

  return (
    <MuiThemeProvider theme={isDark ? muiDark : muiLight}>
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <div style={{ position: 'fixed', bottom: 10, right: 20, zIndex: 10000 }}>
          <DarkModeToggle isDark={isDark} toggleDarkMode={() => setIsDark((v) => !v)} />
        </div>
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}
