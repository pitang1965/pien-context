import React from 'react';
import { Layout } from '@components/layouts/Layout';
import { Container, Title } from '@mantine/core';

export const NotFoundPage = () => {
  return (
    <Layout content='About'>
      <Container>
        <Title>ページがありません。</Title>
      </Container>
    </Layout>
  );
};
