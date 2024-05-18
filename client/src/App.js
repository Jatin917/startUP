import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './components/Home/home';
import Hostel from './components/HostelPage/Hostel';
import { useEffect } from 'react';
import {getHostelsData} from './services/api';
import { useDispatch } from 'react-redux';
import { setCurrentCity } from './features/currentCityOrHostel';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          {/* <Route exact path='/city/:id' element={<Hostel/>}/> */}
          <Route exact path='/hostel' element={<Hostel/>}/>
        </Routes>
    </div>
  );
}

export default App;
