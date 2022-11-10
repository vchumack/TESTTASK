import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/Button/Button';
import style from './Registration.module.scss';

// const initialValues = {
// 	name: '',
// 	email: '',
// 	number: '',
// };

export const Registration = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	});

	const onSubmit = data => {
		console.log(data);
		reset();
	};

	return (
		<section className={style.section}>
			<div className={style.container}>
				<h2 className={style.title}>Working with POST request</h2>

				<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
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
							<li>
								<label>
									<input
										type="radio"
										name="position"
										value={1}
										className={style.radioInput}
										{...register('radio', {
											required: 'The field is required',
										})}
									/>Frontend developer
								</label>
							</li>
							<li>
								<label>
									<input
										type="radio"
										name="position"
										value={2}
										className={style.radioInput}
										{...register('radio', {
											required: 'The field is required',
										})}
									/>Backend developer
								</label>
							</li>
							<li>
								<label>
									<input
										type="radio"
										name="position"
										value={3}
										className={style.radioInput}
										{...register('radio', {
											required: 'The field is required',
										})}
									/>Designer
								</label>
							</li>
						</ul>
					</div>

					<div className={style.fileBox}>
						<label>
							Upload
							<input
								type="file"
								name="file"
								placeholder="Upload your photo"
								{...register('file', {
									required: 'The field is required',
								})}
							/>
						</label>
					</div>
					<div className={style.errorBox}>
						{errors?.file && (
							<p className={style.errorText}>
								{errors?.file?.message || 'Error text'}
							</p>
						)}
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
