import React, { useRef } from 'react'

import user_icon from "../../Assets/user_icon.png"
import email_icon from "../../Assets/email_icon.png"
import password_icon from "../../Assets/password_icon.png"

import "./LoginSignup.css"



const LoginSignup = () => {
    const inputEmailRef = useRef();
    const inputPassRef = useRef();

    function clickEvent(event){
        event.preventDefault();
        console.log(inputPassRef.current.value);
        if(inputPassRef.current.value && inputPassRef.current.value.length < 6){
            alert("Ваш пароль слишком короткий, пожалуйста введите пароль от 6 символов и выше");
        }
        else if(inputPassRef.current.value === inputEmailRef.current.value){
            alert("Пароль не может совпадать с почтой, пожалуйста, введите другое значение");
        }
        else if(!inputPassRef.current.value){
            alert("Пожалуйста, введите пароль");
        }
        else if(!inputEmailRef.current.value){
            alert("Пожалуйста, введите почту");
        }
        else{
            alert("Поздравляю! Вы вошли");
        }
        
    }

    return (
        <div className="container">
            <div className='header'>
                <div className='text'>Форма логина</div>
                <div className='underline'></div>
                <div className="inputs">
                    <div className='input'>
                        <img src={email_icon} className="img" alt="" />
                        <input type="text" ref={inputEmailRef} placeholder = "Email" id = "emailInput"/>
                    </div>
                    <div className='input'>
                        <img src={password_icon} className="img" alt="" />
                        <input type="password" ref={inputPassRef} placeholder = "Пароль" id = "passwordInput"/>
                    </div>
                </div>
                <div className="submit-container">
                    <div className="submit" onClick={clickEvent}>Войти</div>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup;