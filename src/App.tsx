import React, { useState } from 'react';
import './App.css';
import NavBarApp from './components/ui-components/header/';
import AppRouter from './components/containers/appRouter';
import { BrowserRouter as Router } from "react-router-dom"

export const MoviesContext: any = React.createContext({ movies: [] })

function App() {

    const [globalState, setGlobalState] = useState({ movies: [] });

    return (
        <Router>
            <MoviesContext.Provider value={[globalState, setGlobalState]}>
                <div className="container">
                    <NavBarApp />
                    <AppRouter />
                </div>
            </MoviesContext.Provider>
        </Router>


    );
}

export default App;
