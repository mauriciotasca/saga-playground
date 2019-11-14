import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonRequested, fetchReposRequested } from './actions';

function App() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.peopleReducer);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {state.loading ? <div className="loader" /> : <div className="loader-empty"/>}
                <div>
                    <button
                        onClick={() => {
                            const personId = 1;
                            dispatch(fetchPersonRequested(personId));
                        }}
                    >
                        Fetch Person
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            const name = 'Skywalker';
                            dispatch(fetchReposRequested(name));
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
