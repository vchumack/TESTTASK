import { Button } from 'components/Button/Button';
import React from 'react';
import style from './Hero.module.scss';

export const Hero = () => {
	return (
		<section >
         <div className={`${style.container } ${style.hero}`}>
				<div className={style.textBox}>
					<h1 className={style.title}>
						Test assignment for front-end developer
					</h1>
					<p className={style.text}>
						What defines a good front-end developer is one that has skilled
						knowledge of HTML, CSS, JS with a vast understanding of User design
						thinking as they'll be building web interfaces with accessibility in
						mind. They should also be excited to learn, as the world of
                  Front-End Development keeps evolving.
                  
					</p>
				</div>
				<div className={style.box}>
					<Button px={22.5}>Sign up</Button>
				</div>
			</div>
		</section>
	);
};
