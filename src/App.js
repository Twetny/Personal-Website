import { ThemeProvider } from '@emotion/react';
import './App.css';
import NavBar from './components/NavBar';
import Theme from './Theme';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div className="App">
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
