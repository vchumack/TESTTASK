import React from 'react';
import style from './UsersItem.module.scss';

export const UsersItem = ({ name, email, phone, position, photo }) => {
	return (
		<li className={style.item}>
			<img src={photo} alt={name} className={style.img} />
			<p className={style.name}>{name}</p>
			<div className={style.box}> 
				<p className={style.description}>{position}</p>
				<p className={style.description}>{email}</p>
				<p className={style.description}>{phone}</p>
			</div>
		</li>
	);
};
