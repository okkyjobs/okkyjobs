// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App3_1 from './router/App3_1.js';
import App2 from './router/App2.js';
import App3_11 from './router/App3_11.js';
import App4 from './router/App4.js';
import App5 from './router/App5.js';
import App6 from './router/App6.js';
import App7 from './router/App7.js';
import App8 from './router/App8.js';
import App4_1 from './router/App4_1.js';
import App8_1 from './router/App8_1.js';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  // const [hello, setHello] = useState('')

    // useEffect(() => {
    //     axios.get('/api/test')
    //     .then(response => setHello(response.data))
    //     .catch(error => console.log(error))
    // }, []);
  return (
  
    <div>
        <BrowserRouter>
    <Routes>
    <Route path='/Okky3_1' element={<App3_1/>}/>
    <Route path='/Okky2' element={<App2/>}/>
    <Route path='/Okky3_11' element={<App3_11/>}/>
    <Route path='/Okky4' element={<App4/>}/>
    <Route path='/Okky5' element={<App5/>}/>
    <Route path='/Okky6' element={<App6/>}/>
    <Route path='/Okky7' element={<App7/>}/>
    <Route path='/Okky8' element={<App8/>}/>
    <Route path='/Okky4_1' element={<App4_1/>}/>
    <Route path='/Okky8_1' element={<App8_1/>}/>
    
    </Routes>
    </BrowserRouter>
 
      
    </div>
    
  );
}

export default App;

// function Okky3_1(){
//   return <h1>Okky3-1</h1>
// }

// function Okky3_2(){
//   return <h1>Okky3_2</h1>
// }

// function Okky4(){
//   return <h1>Okky4</h1>
// }