import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Root from './components/Root';
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root/>}></Route>
        <Route path="/admin/dashboard" element={<h1>contact</h1>}></Route>
        <Route path="/employee/dashboard" element={<h1>contact</h1>}></Route>
        <Route path="/pages/login" element={<Login/>}></Route>



      </Routes>
    </Router>
  )
}

export default App
