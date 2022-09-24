import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Burger, Navbar as MantineNavbar } from '@mantine/core';
import { useAtom } from 'jotai';
import { isMobileUiAtom } from '../../atoms/uiMode';

type Props = {
  opened: boolean;
  toggleOpenState: () => void;
};

export const Navbar: FC<Props> = (props) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);

  const activeStyle = {
    textDecoration: 'underline',
  };

  const inactiveStyle = {
    textDecoration: 'none',
  };

  return isMobileUi ? (
    <MantineNavbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!props.opened}
      width={{ sm: 200, lg: 300 }}
      className={styles.navbar}
    >
      <Burger
        opened={props.opened}
        onClick={() => props.toggleOpenState()}
        size='sm'
        title='バーガーメニュー'
        mr='xl'
        className={styles.burger}
      />
      <MantineNavbar.Section mt='md'>
        <NavLink
          to='/'
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Home
        </NavLink>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <NavLink
          to='/about'
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          About
        </NavLink>
      </MantineNavbar.Section>
    </MantineNavbar>
  ) : null;
};
