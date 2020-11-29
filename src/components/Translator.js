import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './Translator.css';

const Translator = () => {
    const [englishWord, setEnglishWord] = useState('');
    const handleTextChange = event => { 
        setEnglishWord(event.target.value);
    };

    const [displayWord, setDisplayWord] = useState(englishWord);
    function handleDisplayWord() {
        setDisplayWord(englishWord);
    };    

    // This limits the input to the English alphabet, blank space, and backspace
    const handleOnKeyDown = (event) => {
        if (((event.keyCode <= 64) || (event.keyCode >= 91)) && ((event.keyCode !== 32) && (event.keyCode !== 8))) {
          event.preventDefault()
        }
    };

    function addToHistory() {
        let history = [];
        if (englishWord.length > 0) {

            if (localStorage.getItem('history') == null) {
                
                history.push(englishWord)
                localStorage.setItem('history', JSON.stringify(history));
            
            } else {

                history = JSON.parse(localStorage.getItem('history'));

                if (history.includes(englishWord) === false) {
                    if (history.legth >= 10) {

                        history.shift();
                        history.push(englishWord);

                    } else {
                        history.push(englishWord);
                    }
                    localStorage.setItem('history', JSON.stringify(history));
                }
            }
        }
    };
    
    function handleTranslation() {
        handleDisplayWord();
        addToHistory();
    };

    const username = localStorage.getItem('username');

    return (
        <div>
            <header>
                <div id="smallRobotContainer">
                    <img src="Logo.png" 
                        alt="happy robot"
                        id="smallRobot"
                        height="40px"
                        width="40px" />
                    </div>
                    <p id="titleSmall">Lost in Translation</p>
                <Link to="profile">
                    <div id="username">
                        {username}
                    </div>
                </Link>
            </header>

            <div>
                <div id="keyboard2">🖮</div>
                <input  onKeyDown={handleOnKeyDown}
                        onChange={handleTextChange} 
                        type="text" 
                        placeholder="Hello"
                        name="englishWord" 
                        id="englishWord" 
                        maxLength="40" />
                <button onClick={handleTranslation} id="circleButton2">🡲</button>
                <br />

                <div id="whiteBlock2">
                    <div id="purpleStripe2"></div>
                </div>

                <div id="translationBox">
                    <div id="padding">
                        {displayWord.split('').map((character) =>
                            <div className={"letter"}>
                                <img src={"/individial_signs/'" + character + "'.png"} alt={"ASL for " + character} height="40px" width="40px" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Translator;