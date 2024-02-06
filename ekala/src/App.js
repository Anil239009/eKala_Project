import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme';
import HomePage from './customer/pages/Homepage/HomePage';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <HomePage/>
    </ThemeProvider>
  );
}

export default App;
