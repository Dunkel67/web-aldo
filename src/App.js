import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './Views/Game';
import Test from './Views/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test/>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </Router>
  );
}

export default App;