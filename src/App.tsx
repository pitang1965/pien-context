import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from '@mantine/core';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useLocalStorage } from '@mantine/hooks';

import { createContext, Dispatch, SetStateAction } from 'react';

export const initialState = {
  faceSize: 96,
  eyeSize: 1.0,
  mouthSize: 1.0,
  cheekSize: 1.0,
};

export const ConfigContext = createContext<{
  faceSize: number;
  eyeSize: number;
  mouthSize: number;
  cheekSize: number;
  setFaceSize: Dispatch<SetStateAction<number>>;
  setEyeSize: Dispatch<SetStateAction<number>>;
  setMouthSize: Dispatch<SetStateAction<number>>;
  setCheekSize: Dispatch<SetStateAction<number>>;
}>({
  faceSize: initialState.faceSize,
  eyeSize: initialState.eyeSize,
  mouthSize: initialState.mouthSize,
  cheekSize: initialState.cheekSize,
  setFaceSize: () => {
    throw Error('Not initialized');
  },
  setEyeSize: () => {
    throw Error('Not initialized');
  },
  setMouthSize: () => {
    throw Error('Not initialized');
  },
  setCheekSize: () => {
    throw Error('Not initialized');
  },
});

function MyGlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
          fontFamily:
            'YuGhothic -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        },
        'body,  a': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          textDecoration: 'none',
        },
        body: {
          overflowY: 'scroll',
        },
      })}
    />
  );
}

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorSchem = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const [faceSize, setFaceSize] = useState<number>(initialState.faceSize);
  const [eyeSize, setEyeSize] = useState<number>(initialState.eyeSize);
  const [mouthSize, setMouthSize] = useState<number>(initialState.mouthSize);
  const [cheekSize, setCheekSize] = useState<number>(initialState.cheekSize);

  return (
    <ConfigContext.Provider
      value={{
        faceSize,
        eyeSize,
        mouthSize: mouthSize,
        cheekSize,
        setFaceSize,
        setEyeSize,
        setMouthSize: setMouthSize,
        setCheekSize,
      }}
    >
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorSchem}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <MyGlobalStyles />
          <Router>
            <Routes>
              <Route path='/about' element={<AboutPage />} />
              <Route path='/' element={<HomePage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Router>
        </MantineProvider>
      </ColorSchemeProvider>
    </ConfigContext.Provider>
  );
}
