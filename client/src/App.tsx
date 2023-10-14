import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Information from './pages/Information'



function App() {

  return (
    <>
       <Router>
            <div className="body">
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/information"element={<Information/>}/>
                </Routes>
            </div>
        

        </Router>
        
    </>
  )
}

export default App
