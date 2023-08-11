import React, { useContext } from 'react'
import { Route, Navigate, Routes,useLocation } from 'react-router-dom';
import Description from './components/Page1/Description';
import PartsSelection from './components/Page2/PartsSelection';
import Assembly from './components/Page3/Assembly';
import FinalView from './components/Page4/FinalView';
import Loading from './components/Loading';
import { UserContext } from './context/Context';
import { AnimatePresence } from 'framer-motion';

const Routers = () => {
    const location = useLocation();
    const { selectedParts } = useContext(UserContext);
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element={<Description />} />
                <Route path='/select-parts' element={<PartsSelection />} />
                <Route path="/assembly" element={selectedParts.length ? <Assembly /> : <Navigate replace to='/select-parts' />} />
                <Route path="/final-view" element={<FinalView />} />
                <Route path="/loading" element={<Loading />} />
            </Routes>
        </AnimatePresence>
       
    )
}

export default Routers
