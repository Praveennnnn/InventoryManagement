import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>home</h1>}></Route>
        <Route path="/about" element={<h1>about</h1>}></Route>
        <Route path="/contact" element={<h1>contact</h1>}></Route>


      </Routes>
    </Router>
  )
}

export default App
