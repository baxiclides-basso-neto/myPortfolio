import './App.css'
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import { ProjectDisplayOne } from './pages/projectdisplay/ProjectDisplay';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplayOne />} /> 
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
