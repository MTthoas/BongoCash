import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
       <Router>
            <div className="body">
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </div>
        

        </Router>
        
    </>
  )
}

export default App
