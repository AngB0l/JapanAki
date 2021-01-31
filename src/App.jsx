import './App.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import Routes from './Routes';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>
    );
}

export default App;
