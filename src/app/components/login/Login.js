import React from "react";
import ButtonLogIn from "./feature/ButtonLogIn";
import ButtonSingIn from "./feature/ButtonSingIn";
import InputEmail from "./feature/InputEmail";
import InputPassword from "./feature/InputPassword";
import InputCheckBox from "./feature/InputCheckBox";
import './css/Login.css';

const Login = () =>{
    return (
        <div className="Body">
            <div className="card">
                <div className="ui form " >
                    <h1 className="field">Sing in</h1>
                    <form>
                        <InputEmail className="field"/>
                        <br/>
                        <InputPassword className="field"/>
                        <br/>
                        <ButtonLogIn className="field"/>
                        <br/><br/>
                        <InputCheckBox className="field"/>
                        <br/><br/>
                        <ButtonSingIn className="field"/>
                    </form>
                </div>
            </div>
        </div>       
    );
};

export default Login;
