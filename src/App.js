import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Jatekok from './pages/Jatekok';
import LightOnApp from './pages/LightOnApp';
import NoPage from './pages/NoPage';
import TictacToeApp from './pages/TictacToeApp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jatekok />} />
          <Route path="tictactoe" element={<TictacToeApp />} />
          <Route path="lighton" element={<LightOnApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
