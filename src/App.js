import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Show from './components/Show/Show';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BackgroundVideo from "./components/Background/BackgroundVideo"
function App() {
  return (
    <Router>
      <Header />
      <BackgroundVideo/>
      <Show/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
