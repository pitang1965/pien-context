import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Header as MantineHeader,
  useMantineColorScheme,
  Text,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from '../../atoms/uiMode';

type Props = {
  opened: boolean;
  toggleOpenState: () => void;
};

export const Header: FC<Props> = (props) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <MantineHeader height={70} p='md'>
      <Container>
        <Group position='apart'>
          {isMobileUi && (
            <Burger
              opened={props.opened}
              onClick={() => props.toggleOpenState()}
              size='sm'
              title='バーガーメニュー'
              mr='xl'
            />
          )}
          <Link to='/'>
            <Text className={styles.title}>ぴえん文字</Text>
          </Link>
          <Group position='right' spacing='xs'>
            {!isMobileUi && (
              <div className={styles.menu}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
              </div>
            )}
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
