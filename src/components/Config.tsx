import { Slider, Stack } from '@mantine/core';
import React from 'react';

export const Config = () => {
  return (
    <Stack>
      <Slider min={96} max={512} step={1.0} defaultValue={96} />
      <Slider
        min={0.7}
        max={1.0}
        step={0.02}
        defaultValue={1.0}
        label={(value) => `${value.toFixed(2)}`}
      />
      <Slider
        min={0.6}
        max={1.2}
        step={0.02}
        defaultValue={1.0}
        label={(value) => `${value.toFixed(2)}`}
      />
      <Slider
        min={0.7}
        max={1.3}
        step={0.02}
        defaultValue={1.0}
        label={(value) => `${value.toFixed(2)}`}
      />
    </Stack>
  );
};
