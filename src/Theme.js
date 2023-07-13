import { createTheme } from "@mui/material";


const Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3f51b5'
        },
    },
    typography: {
        fontFamily: ['Open Sans', 'sans-serif'].join(',')
    }
    }
);

export default Theme;