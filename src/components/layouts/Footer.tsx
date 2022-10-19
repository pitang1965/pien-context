import React from 'react';
import { Center, Footer as MantineFooter, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <MantineFooter height={60} p='md'>
      <Center>
        <Text
          variant='link'
          component='a'
          href='https://linktr.ee/pitang1965'
          color='dimmed'
        >
          &copy; 2022 @pitang1965
        </Text>
      </Center>
    </MantineFooter>
  );
};
