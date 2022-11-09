import React from 'react';
import style from './Header.module.scss';
import { ReactComponent as Logo } from '../../img/Logo.svg';
import { Button } from 'components/Button/Button';

export const Header = () => {
	return (
		<header className={style.header}>
         <div className={style.container}>
            <div className={style.box}>
				<a href="/">
					<Logo />
				</a>
				<nav className={style.nav}>
					<Button px={29}>Users</Button>
					<Button px={22.5}>Sign up</Button>
				</nav>
				</div>
			</div>
		</header>
	);
};
