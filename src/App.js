import React from 'react';
import SortingPlayerPage from './pages/SortingPlayerPage';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const navBarConfig = [
    {
        href: '/',
        text: 'Home',
        component: null,
    },
    {
        href: '/player',
        text: 'Sorting player',
        component: null,
    },
];

function App() {
    return (
        <Router>
            <div className="h-screen w-screen">
                <NavBar navConfig={navBarConfig} />
                <SortingPlayerPage />
            </div>
        </Router>
    );
}

export default App;
