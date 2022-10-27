import React from 'react';
import { Layout } from '@components/layouts/Layout';
import { Container, Title } from '@mantine/core';
import { Preview } from '@components/Preview';
import { Config } from '@components/Config';

export const HomePage = () => {
  return (
    <Layout content='Home'>
      <Container>
        <Title>Home</Title>
        <Preview />
        <Config />
      </Container>
    </Layout>
  );
};
