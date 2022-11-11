import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/Button/Button';
import style from './Registration.module.scss';
import axios from 'axios';
import { RadioItem } from 'components/RadioItem/RadioItem';


export const Registration = ({ getFormValue }) => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
		getValues,
	} = useForm({
		mode: 'onBlur',
	});
	const [positions, setPositions] = useState(null);

	useEffect(() => {
		axios
			.get('positions')
			.then(({ data }) => setPositions(data.positions));
	}, []);

	const onSubmit = data => {
		const newData = { ...data, photo: getValues('photo')[0] };
		getFormValue(newData);
		reset();
	};

	return (
		<section className={style.section}>
			<div className={style.container}>
				<h2 className={style.title}>Working with POST request</h2>

				<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
					<div>
						<div className={style.fieldBox}>
							<label className={style.label}>
								<input
									className={style.input}
									type="text"
									name="name"
									placeholder="Your name"
									{...register('name', {
										required: 'The field is required',
										minLength: {
											value: 2,
											message: 'Minimum 2 characters',
										},
										maxLength: {
											value: 60,
											message: 'Maximum 60 charactersв',
										},
									})}
								/>
								<div className={style.errorBox}>
									{errors?.name && (
										<p className={style.errorText}>
											{errors?.name?.message || 'Error text'}
										</p>
									)}
								</div>
							</label>

							<label className={style.label}>
								<input
									className={style.input}
									type="text"
									name="email"
									placeholder="Email"
									{...register('email', {
										required: 'The field is required',
										minLength: {
											value: 2,
											message: 'Minimum 2 characters',
										},
										maxLength: {
											value: 100,
											message: 'Maximum 100 characters',
										},
										pattern: {
											value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
											message: 'invalid email address',
										},
									})}
								/>
								<div className={style.errorBox}>
									{errors?.email && (
										<p className={style.errorText}>
											{errors?.email?.message || 'Error text'}
										</p>
									)}
								</div>
							</label>

							<label className={style.label}>
								<input
									className={style.input}
									style={
										errors?.phone
											? { outline: '2px solid #CB3D40' }
											: { outline: 'none' }
									}
									type="tel"
									name="phone"
									placeholder="Phone"
									{...register('phone', {
										required: 'The field is required',
										pattern: {
											value: /^\+?3?8?(0[5-9][0-9]\d{7})$/,
											message: 'invalid phone number',
										},
									})}
								/>
								<p className={style.labelPhone}>+38 (XXX) XXX - XX - XX</p>
								<div className={style.errorBox}>
									{errors?.phone && (
										<p className={style.errorText}>
											{errors?.phone?.message || 'Error text'}
										</p>
									)}
								</div>
							</label>
						</div>

						<div className={style.radioBox}>
							<p className={style.radioTitle}>Select your position</p>
							<ul className={style.radioList}>
								{positions &&
									positions.map(({ id, name }) => (
										<RadioItem
											key={id}
											id={id}
											name={name}
											register={register}
										/>
									))}
							</ul>
						</div>

						<div className={style.fileBox}>
							<label className={style.fileLabel}>
								Upload
								<input
									className={style.fileInput}
									type="file"
									name="photo"
									placeholder="Upload your photo"
									{...register('photo')}
									// ref={register}
								/>
								<div className={style.errorBox}>
									{errors?.file && (
										<p className={style.errorText}>
											{errors?.file?.message || 'Error text'}
										</p>
									)}
								</div>
							</label>
						</div>
					</div>

					<div className={style.btnBox}>
						<Button disabled={!isValid} px={29}>
							Sign up
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
};
