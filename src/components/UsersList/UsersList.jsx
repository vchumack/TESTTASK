import { Button } from 'components/Button/Button';
import { UsersItem } from 'components/UsersItem/UsersItem';

import React, { useEffect, useState } from 'react';
import style from './UsersList.module.scss';

export const UsersList = () => {
	const [users, setUsers] = useState([]);
   const [page, setPage] = useState(1);
   const [isVisibleShowMoreBtn, setIsVisibleShowMoreBtn] = useState(true);

	useEffect(() => {
		fetch(
			`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
		)
         .then(res => res.json())
         .then((data) => {
            setUsers(prev => [...prev, ...data.users]);
            console.log(data);
            if (page === data.total_pages) {
               setIsVisibleShowMoreBtn(false);
            }
         })
			.catch(err => console.log(err));
	}, [page]);

	return (
		<section className={style.section}>
			<div className={style.container}>
				<h2 className={style.title}>Working with GET request</h2>
				<ul>
					{users.length > 0 &&
						users.map(({ id, name, email, phone, position, photo }) => (
                     <UsersItem key={id} name={name} email={email} phone={phone} position={position} photo={ photo} />
						))}
				</ul>
            {isVisibleShowMoreBtn &&
               <Button px={18.5} onClick={() => setPage(prev => prev + 1)}>
					Show more
				</Button>
            }
			</div>
		</section>
	);
};
