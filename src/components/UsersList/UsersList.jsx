import { Button } from 'components/Button/Button';
import { UsersItem } from 'components/UsersItem/UsersItem';

// import React, { useEffect, useState } from 'react';
import style from './UsersList.module.scss';

export const UsersList = ({users, onChangePage, isVisibleShowMoreBtn}) => {


	return (
		<section className={style.section}>
			<div className={style.container}>
				<h2 className={style.title}>Working with GET request</h2>
				<ul className={style.list}>
					{users.length > 0 &&
						users.map(({ id, name, email, phone, position, photo }) => (
                     <UsersItem key={id} name={name} email={email} phone={phone} position={position} photo={ photo} />
						))}
				</ul>
            <div className={style.box}>
               {isVisibleShowMoreBtn &&
               <Button px={18.5} onClick={() => onChangePage(prev => prev + 1)}>
					Show more
				</Button>
            }
            </div>
			</div>
		</section>
	);
};
