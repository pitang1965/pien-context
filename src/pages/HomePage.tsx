import React from 'react';
import { Layout } from '@components/layouts/Layout';
import { Container, Title } from '@mantine/core';

export const HomePage = () => {
  return (
    <Layout content='Home'>
      <Container>
        <Title>Home</Title>
      </Container>
    </Layout>
  );
};
