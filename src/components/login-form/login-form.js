import React from "react";
//import InputField from "../input-field/input-field";
//import CustomButton from "../button/button";
//import propTypes from "prop-types";
class LoginForm extends React.Component{

    login = (event) => {
        event.preventDefault();  
        console.log("doing login in form");
        const tryingUser = {
            email:this.emailRef.current.value,
            password:this.passwordRef.current.value
        }
        this.props.doLogin(tryingUser);
        event.currentTarget.reset();
    }

    render() {
        return(
            <form className="" onSubmit={this.login}>
                <input ref={this.emailRef} type="email" name="" placeholder="Email" required/>
                <input ref={this.passwordRef} type="password" name="password" placeholder="********" required/>
                <input type="submit" name="loginSubmit"  value="Log in"  id="loginSubmit"/>
            </form>
        )
    }
}

/*const isEmail = function(emailAdress) {
    const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;
    if (!regex.test(emailAdress)) {
      return new Error("introduzca una dirección de correo válida");
    }
  }

  const strongPassword = function(password) {
if(password.length < 8){
     return new Error("su contraseña debe tener al menos ocho caracteres") 
    }
  }

LoginForm.propTypes = {
email: isEmail,
pasword: strongPassword
}*/
export default LoginForm;