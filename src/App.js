import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project from './pages/Project';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import Resume from './components/Resume'
function App() {
  return (
    <body className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/project" exact element={<Project/>}/>
        </Routes>
        <Footer/>
      </Router>
    </body>
  )
}

export default App;
