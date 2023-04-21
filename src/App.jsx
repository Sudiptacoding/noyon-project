import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Navbar from './Components/Navbar/Navbar';
import Logingform from './Components/Logingform/Logingform';
import About from './Components/About/About';
import UplodData from './Components/UplodData/UplodData';
import Privetrouts from './Components/Privetrouts/Privetrouts';
import Admin from './Components/Admin/Admin';
import Airdrop from './Components/Airdrop/Airdrop';
import Cont from './Components/Cont/Cont';
import Support from './Components/Support/Support';
import Verify from './Components/Verify/Verify';
import Up from './Components/Up/Up';
import { useEffect } from 'react';

export const userContext = createContext()

const App = () => {
  const [login, setLogin] = useState()
  const [users, setUsers] = useState({
    isSignin: false,
    emailValid: ''
  })

  useEffect(() => {
    const sign = localStorage.getItem('isdignin');
    setLogin(sign);
    const newSign = { ...users }
    newSign.isSignin = sign;
    setUsers(newSign)
  }, [])
  console.log(login)
  return (
    <div>
      <userContext.Provider value={[users, setUsers]}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contract' element={<Logingform></Logingform>}></Route>

            <Route path='/airdrop' element={<Privetrouts isSignin={login}><Verify></Verify></Privetrouts>}></Route>
            <Route path='/suport' element={<Support></Support>}></Route>
            <Route path='/con' element={<Cont></Cont>}></Route>
            <Route path='/admin' element={<Admin></Admin>}></Route>
            <Route path='/verification' element={<Privetrouts isSignin={login}><Up></Up></Privetrouts>}></Route>
            <Route path='*' element={<Error></Error>}></Route>
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
};

export default App;