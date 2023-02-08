import './App.css';
import { Route, Routes } from "react-router-dom"
import Navigation from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import AllStocks from './pages/AllStocks';
import Pages from './pages/Pages';
import Headers from './components/Header';




function App() {
  return (
    <div className="App">
      <Headers />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<AllStocks />} />
        <Route path="/stocks/:symbol" element={<Pages />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;