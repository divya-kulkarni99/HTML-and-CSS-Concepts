import {useState} from 'react';
import './Register.css';

function Register(){
    function onSubmit(event){
        setIsNameInvalid(!name);
        setIsEmailInvalid(!email);
        event.preventDefault();

    }

    const [name,setName] = useState('');
    const [isNameInvalid, setIsNameInvalid] = useState(false);
    const [email,setEmail] = useState('');
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const nameErrClass = isNameInvalid ? "register-name__invalid" : "";
    const emailErrClass = isEmailInvalid ? "register-email__invalid" : "";

    return(
        <>
       <h2>
        Register to meet your pet 
       </h2>
        <form onSubmit={onSubmit} className="register">
            <div className="register-field">
                <label className="register-label register-name__label" htmlFor="name">Name</label>
                <span className="register-required">* Required</span>
                <input
                className={`register-name ${nameErrClass}`}
                value={name}
                onInput={
                    event =>{
                        setName(event.target.value);
                    }
                }
                name="name"
                id="name"
                />
                <span className="register-error register-name__error">{isNameInvalid && "This field is required"}</span>

            </div>
            <div className="register-field">
                <label className="register-label register-email__label" htmlFor="email">Email</label>
                <span className="register-required">* Required</span>
                <input
                className={`register-email ${emailErrClass}`}
                value={email}
                onInput={
                    event =>{
                        setEmail(event.target.value);
                    }
                }
                name="email"
                id="email"
                />
                <span className="register-error register-email__error">{isEmailInvalid && "This field is required"}</span>

            </div>
            <button type="submit" className="register-submit">Register</button>
        </form>
        </>
    );
}

export default Register;