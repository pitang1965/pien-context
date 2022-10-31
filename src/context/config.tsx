import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

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

export const ConfigProvider: FC<{ children: ReactNode }> = ({ children }) => {
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
      {children}
    </ConfigContext.Provider>
  );
};
