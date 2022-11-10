import React from 'react';
import style from './Button.module.scss';

export const Button = ({ children, disabled=false, px = 0, onClick}) => {
   return <button className={style.button} style={{ paddingLeft: px, paddingRight: px}} disabled = {disabled} onClick={onClick} type='submit'> { children }</button >;
};
