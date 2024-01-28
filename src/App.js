import './App.css';
import { Route, Routes } from "react-router-dom";
import { React } from "react";
import Homepage from "./pages/main/main";
import DetailPage from './pages/detailPAge/detail';
function App() {
  return(
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    {/* <Route exact path='/aboutUs' element={<AboutUs></AboutUs>}/> */}
    <Route exact path="/main/flats{id}"   element={<DetailPage/>}/>
    </Routes>
  </div>
  )
}

export default App;
