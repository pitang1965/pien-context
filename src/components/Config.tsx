import React, { useContext } from 'react';
import { Slider, Stack } from '@mantine/core';
import { ConfigContext } from '@main/App';

export const Config = () => {
  const {faceSize, setFaceSize, eyeSize, setEyeSize, mouthSize, setMouthSize, cheekSize, setCheekSize } = useContext(ConfigContext);

  return (
    <Stack>
      <Slider
        min={96}
        max={512}
        step={1.0}
        value={faceSize}
        onChange={setFaceSize}
      />
      <Slider
        min={0.7}
        max={1.0}
        step={0.02}
        value={eyeSize}
        onChange={setEyeSize}
        label={(value) => `${value.toFixed(2)}`}
      />
      <Slider
        min={0.6}
        max={1.2}
        step={0.02}
        value={mouthSize}
        onChange={setMouthSize}
        label={(value) => `${value.toFixed(2)}`}
      />
      <Slider
        min={0.7}
        max={1.3}
        step={0.02}
        value={cheekSize}
        onChange={setCheekSize}
        label={(value) => `${value.toFixed(2)}`}
      />
    </Stack>
  );
};
