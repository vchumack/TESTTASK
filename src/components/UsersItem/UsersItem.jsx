import React from 'react';


export const UsersItem = ({ name, email, phone, position, photo }) => {
	return (
		<li >
			<img src={photo} alt={name} />
			<p>{name}</p>
			<p>{position}</p>
			<p>{email}</p>
			<p>{phone}</p>
		</li>
	);
};
