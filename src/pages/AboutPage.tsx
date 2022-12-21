import React from 'react';
import { Layout } from '@components/layouts/Layout';
import { Container, Text, Title } from '@mantine/core';

export const AboutPage = () => {
  return (
    <Layout content='About'>
      <Container>
        <Title>About</Title>
        <Text>状態管理にReactのContext APIを使用したぴえんです。</Text>
      </Container>
    </Layout>
  );
};
