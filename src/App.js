import { HashRouter, Route, Routes } from 'react-router-dom';
import Game from './Views/Game';

function App() {
  return (
    <HashRouter>
          <Routes>
            <Route path="/" element={<Game/>} />
          </Routes>
    </HashRouter>
  );
}

export default App;