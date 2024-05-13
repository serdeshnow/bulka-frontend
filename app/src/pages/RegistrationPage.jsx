import '../styles/RegistrationPage.css'
import reg_img from '../assets/img/reg_img.png'
import {useState } from 'react'



export const RegistrationPage = () => {
  const [phoneNum, SetPhone] = useState("");
  const [password, SetPassword] = useState("");
  const [rep_password, RepeatPassword] = useState("");

  const handlePhoneNum = (e) => {
    SetPhone(e.target.value);
  }

  const handlePassword = (e) => {
    SetPassword(e.target.value);
  }

  const handleRepPassword = (e) => {
    RepeatPassword(e.target.value);
  }

  return (
    <div className="page_wrapper">
      <div className='reg_fields'>
        <h1 className='reg_title'>Регистрация</h1>
        <input value={phoneNum} onChange={(e) => handlePhoneNum(e)} type="tel" placeholder='Ваш номер телефона' className='input_field'/>
        <input value={password} onChange={(e) => handlePassword(e)} type="password" placeholder='Ваш пароль' className='input_field'/>
        <input value={rep_password} onChange={(e) => handleRepPassword(e)} type="password" placeholder='Повторите пароль' className='input_field'/>
        <button className='reg_btn'>зарегистрироваться</button>
        <h1 className='reg_txt'>Уже зарегистрированы? Войти</h1>
      </div>
      <img src={reg_img} className='reg_img'/>
    </div>
  );
};
