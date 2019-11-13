import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <div>
                    <button
                        onClick={() => {
                            const personId = 1;
                            dispatch({ type: 'PERSON_FETCH_REQUESTED', payload: { personId } });
                        }}
                    >
                        Fetch Person
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            const name = 'Skywalker';
                            dispatch({ type: 'PEOPLE_FETCH_REQUESTED', payload: { name } });
                        }}
                    >
                        Fetch People
                    </button>
                </div>

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
