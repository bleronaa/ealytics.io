import React,{useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About/About';
import Accounting from './pages/Accounting/AccountingSolutions';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import EnterPrise from './pages/EnterPrise/EnterpriseSolutions';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Bookkeeping from './pages/Accounting/Bookkeeping';
import FPa from './pages/Accounting/FPa';
import CFO from './pages/Accounting/Cfoservices';
import Financial from './pages/Accounting/Financial';
import AnaplanSolutions from './pages/EnterPrise/Anaplan'
import OneStreamSolutions from './pages/EnterPrise/Onestream';
import SAP from './pages/EnterPrise/SAP';
import OracleNetSuite from './pages/EnterPrise/OracleNetSuit';
import Footer from './components/Footer';



const App = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/accounting' element={<Accounting />}/>
            <Route path='/bookkeeping' element={<Bookkeeping />} />
            <Route path='/fpa' element={<FPa />} />
            <Route path='/CFO' element={<CFO />} />
            <Route path='/financial' element={<Financial />} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/enterprise' element={<EnterPrise />}/>
            <Route path='/anaplan' element={<AnaplanSolutions />} />
            <Route path='/sap' element={<SAP/>}/>
            <Route path='/oracleNetSuite' element={<OracleNetSuite/>}/>
            <Route path='/onestream' element={<OneStreamSolutions />} />

            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
        
    );
}

export default App;