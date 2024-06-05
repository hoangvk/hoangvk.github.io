import Navbar from './components/dep/Navbar'
import Footer from './components/dep/Footer'
import Home from './pages/Home'
import Interest from './pages/Interest'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// import Resume from './components/Resume'
function App() {
  return (
    <body className="App" lang="en">
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="description" content="Personal Website - Hoang Vu"/>
      <title>Personal Website</title>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/interest" exact element={<Interest/>}/>
        </Routes>
        <Footer/>
      </Router>
    </body>
  )
}

export default App;
