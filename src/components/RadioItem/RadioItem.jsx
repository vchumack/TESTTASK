import React from 'react';
// import { useForm } from 'react-hook-form';
import style from './RadioItem.module.scss';

export const RadioItem = ({ name, id, register }) => {
	// const { register } = useForm({
	// 	mode: 'onBlur',
	// });

	return (
		<li>
			<label>
				<input
					type="radio"
					name="position_id"
					value={id}
					className={style.radioInput}
					{...register('position_id', {
						required: 'The field is required',
					})}
				/>
				{name}
			</label>
		</li>
	);
};
