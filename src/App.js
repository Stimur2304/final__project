import './App.css';
import { Route, Routes } from "react-router-dom";
import { React } from "react";
import Homepage from "./pages/main/main";
import DetailedPage from './pages/DetailedPage/DetailedPage';
import LogInPage from './pages/LogIn/LogIn';
import AboutUS from './pages/main/aboutUS/aboutUS';

function App() {
  return(
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    <Route exact path="/:id"   element={<DetailedPage/>}/>
    <Route exact path="/logIn"   element={<LogInPage/>}/>
    <Route exact path="aboutUs" element={<AboutUS/>}/>
    </Routes>
  </div>
  )
}

export default App;
