import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './Profile.css';

const Profile = () => {

    const username = localStorage.getItem('username');

    function handleLogout() {
        localStorage.clear();
    };

    function handleClearHistory() {
        localStorage.removeItem('history');
        history = '';
        window.location.reload();
    };

    let history = localStorage.getItem('history');

    return (
        <div>
            <div id="usernameContainer">
                <h1>{username}</h1>
            </div>
            <button id="clearTranslations" onClick={handleClearHistory} >Clear history</button>
            <Link to="/">
                <button id="signOut" onClick={handleLogout} >Sign out</button>
            </Link>
            <div>
                <h3 id="history">Translation History: </h3>
                <div id="historyContainer">
                    {history}
                </div>
            </div>
            <div id="whiteBlock3"></div>
        </div>
    );
};

export default Profile;