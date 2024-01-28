import './App.css';
import { Route, Routes } from "react-router-dom";
import { React } from "react";
import Homepage from "./pages/main/main";
import DetailedPage from './pages/DetailedPage/DetailedPage';
function App() {
  return(
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    <Route exact path="/:id"   element={<DetailedPage/>}/>
    
    </Routes>
  </div>
  )
}

export default App;
