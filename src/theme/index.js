import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const options = {
    typography: {
        fontFamily: [
            'Hind Siliguri',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
};

const theme = createMuiTheme(options);

export default theme;
