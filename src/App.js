import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Show from './components/Show/Show';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
