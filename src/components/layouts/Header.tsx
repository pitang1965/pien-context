import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Header as MantineHeader,
  MediaQuery,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

type Props = {
  opened: boolean;
  toggleOpenState: () => void;
};

export const Header: FC<Props> = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <MantineHeader height={70} p='md'>
      <Container>
        <Group position='apart'>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Burger
              opened={props.opened}
              onClick={() => props.toggleOpenState()}
              size='sm'
              title='バーガーメニュー'
              mr='xl'
            />
          </MediaQuery>
          <Link to='/'>
            <Text className={styles.title}>ぴえん文字</Text>
          </Link>
          <Group position='right' spacing='xs'>
            <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
              <Group className={styles.menu}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
              </Group>
            </MediaQuery>
            <ActionIcon
              variant='outline'
              sx={{ borderColor: '#C1C2C5' }}
              onClick={() => toggleColorScheme()}
              title='ダークモードをトグル'
            >
              {dark ? (
                <IconSun size={18} color='yellow' />
              ) : (
                <IconMoonStars size={18} color='#25262B' />
              )}
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </MantineHeader>
  );
};
