import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import { ThemeProvider } from 'theme-ui'
import theme from './theme'

import Homepage from './pages/Homepage';
import Create from './pages/Create';
import Event from './pages/Event';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage/>}>
            </Route>
            <Route path="/create" element={<Create/>}>
            </Route>
            <Route path="/event" element={<Event/>}>
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
