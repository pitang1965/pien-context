import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Burger, MediaQuery, Navbar as MantineNavbar } from '@mantine/core';

type Props = {
  opened: boolean;
  toggleOpenState: () => void;
};

export const Navbar: FC<Props> = (props) => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const inactiveStyle = {
    textDecoration: 'none',
  };

  return (
    <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
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
        <MantineNavbar.Section>
          <NavLink
            to='/about'
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            About
          </NavLink>
        </MantineNavbar.Section>
      </MantineNavbar>
    </MediaQuery>
  );
};
