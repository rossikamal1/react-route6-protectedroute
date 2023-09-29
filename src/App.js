import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Firstpage from './pages/Firstpage'
import Secondpage from './pages/Secondpage'
import Privateroutes from './utils/Privateroutes'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route element={<Privateroutes />}>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<Secondpage/>} path="/Secondpage"/>

            </Route>
            <Route element={<Firstpage/>} path="/Firstpage"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;