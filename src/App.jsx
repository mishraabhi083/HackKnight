// packages
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
// local
import Header from './components/Header'
import NavBar from './components/NavigationBar'
import Footer from './components/Footer'
import ParticipantsList from './components/ParticipantsList'
import RegistrationForm from './components/RegistrationForm'
import About from './components/AboutSection'
import Home from './components/HomePage'
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header/>
      <NavBar/>
        <Routes>
          {/* <Route path="*"/> */}
          <Route path="/" element={<Home/>} />          
          <Route path="participants" index element={<ParticipantsList/>} />          
          <Route path="register" element={<RegistrationForm/>} />          
          <Route path="about" element={<About/>} />                  
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
