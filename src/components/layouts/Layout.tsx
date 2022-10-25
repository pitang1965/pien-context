import React, { FC, ReactNode, useState } from 'react';
import { AppShell } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

type Props = {
  children: ReactNode;
  content: string;
};

export const Layout: FC<Props> = (prpps) => {
  const [opened, setOpened] = useState<boolean>(false);

  function toggleOpenState(): void {
    setOpened((prev) => !prev);
  }

  return (
    <AppShell
      padding='md'
      header={<Header opened={opened} toggleOpenState={toggleOpenState} />}
      footer={<Footer />}
      navbarOffsetBreakpoint='sm'
      navbar={<Navbar opened={opened} toggleOpenState={toggleOpenState} />}
    >
      {prpps.children}
    </AppShell>
  );
};
