import React from 'react';
import { Slider, Stack } from '@mantine/core';
import { initialState, useConfigDispatch } from '@context/config';

export const Config = () => {
  const { setFaceSize, setEyeSize, setMouthSize, setCheekSize } =
    useConfigDispatch();

  return (
    <Stack spacing='xl'>
      <Slider
        min={96}
        max={512}
        step={1.0}
        marks={[
          { value: 100, label: '100' },
          { value: 200, label: '200' },
          { value: 300, label: '300' },
          { value: 400, label: '400' },
          { value: 500, label: '500' },
        ]}
        defaultValue={initialState.faceSize}
        onChange={setFaceSize}
      />
      <Slider
        min={0.7}
        max={1.0}
        step={0.02}
        marks={[
          { value: 0.7, label: '70%' },
          { value: 0.8, label: '80%' },
          { value: 0.9, label: '90%' },
          { value: 1.0, label: '100%' },
        ]}
        defaultValue={initialState.eyeSize}
        onChange={setEyeSize}
        label={(value) => `${value.toFixed(2)}`}
      />
      <Slider
        min={0.6}
        max={1.2}
        step={0.02}
        marks={[
          { value: 0.6, label: '60%' },
          { value: 0.7, label: '70%' },
          { value: 0.8, label: '80%' },
          { value: 0.9, label: '90%' },
          { value: 1.0, label: '100%' },
          { value: 1.1, label: '110%' },
          { value: 1.2, label: '120%' },
        ]}
        defaultValue={initialState.mouthSize}
        onChange={setMouthSize}
        label={(value) => `${value.toFixed(2)}`}
      />
      <Slider
        min={0.7}
        max={1.3}
        step={0.02}
        marks={[
          { value: 0.7, label: '70%' },
          { value: 0.8, label: '80%' },
          { value: 0.9, label: '90%' },
          { value: 1.0, label: '100%' },
          { value: 1.1, label: '110%' },
          { value: 1.2, label: '120%' },
          { value: 1.3, label: '130%' },
        ]}
        defaultValue={initialState.cheekSize}
        onChange={setCheekSize}
        label={(value) => `${value.toFixed(2)}`}
      />
    </Stack>
  );
};
