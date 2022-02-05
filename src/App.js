import React from 'react';
import { Home } from './Content/Home';
import { Skils } from './Content/Skils';
import { AnimatePresence } from "framer-motion"
import {Routes,Route,useLocation} from "react-router-dom";
import { Contact } from './Content/contact';
import { Work } from './Content/work';


function App() {
  const location=useLocation()
  return <>
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skils />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
    </AnimatePresence>

  </>
}

export default App;
