import React, { useState }  from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

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
        <form>
            <div>
                <input type="text" 
                        placeholder="What's your name?"
                        onChange={handleNameInput} />
            </div>

            <div>
                <Link to="translator">
                    <button onClick={handleLogin} >Press to confirm!</button>
                </Link>
            </div>
        </form>
    )
};

export default RegisterForm;