import React, { useState }  from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './Register.css';

const RegisterForm = () => {
    
    const [username, setUsername] = useState('');
    const handleNameInput = event => {
        setUsername(event.target.value);
    };

    function handleLogin() {
        console.log(username);
        localStorage.setItem('username', username);
    };

    return (
        <form id="translator">
            <div>
                <div className="keyboard">🖮</div>
                <input type="text" 
                        placeholder="What's your name?"
                        onChange={handleNameInput}
                        id="nameInput" />
            </div>

            <div>
                <Link to="translator">
                    <button onClick={handleLogin} className="circleButton" >🡲</button>
                </Link>
            </div>

            <div id="purpleStripe"></div>
        </form>
    )
};


const Register = () => {
    return (
        <div>
            <header>
                <p>Lost in Translation</p>
            </header>

            <div>
                <div id="robotContainer">
                    <img src="Logo.png" 
                        alt="happy robot" 
                        id="robot" />
                </div>
                <h2 className="title">Lost in Translation</h2>
                <h3>Get started</h3>
                <RegisterForm />
            </div>
            <div id="whiteBlock"></div>
        </div>
    )
}

export default Register;