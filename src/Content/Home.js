import React from 'react'
import { motion } from "framer-motion"
import { NavBar } from '../navBar'
import { Link } from 'react-router-dom'

export const Home=()=> {
    const variants = {
        hidden: { opacity: 0,y:40 },
        visible: { opacity: 1,scale: 1,x:0,y:0  },
        }
        const variant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1,scale: 1, x:0, y:0 },
        }
        
    return <>
     <NavBar />
    <div className="container">
        <div className="row  ">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ type: "tween", duration: 1 }}
                exit="hidden"

                
                className="col-lg-6 col-12  d-flex align-items-center">
                <div >
                <h2 className="t1">Hello,</h2>
                <h2 className="t1">Je m'appelle <span className="blue">Wissem</span></h2>
                <h2 className="t1">Développeur Full Stack</h2>
                <Link to="/contact">
                <motion.button transition={{ type: "tween", duration: 0.5 }} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1,y: -10 }} className="btn btn-primary btn-lg mt-5 col-5"> Contact</motion.button>
                </Link>
                </div>
            
            </motion.div>
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ type: "tween", duration: 1 }}
                //whileHover={{ scale: 1.1 }}
                exit="hidden"
                className="col-lg-6 col-12">
                <img className="p1" src="/img/web.png" alt="web"/>
            </motion.div>

            <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variant}
                transition={{ type: "tween", duration: 1 }} 
                className="col-lg-3 col-12 t2">
            
          
            <ul className="list-inline">
                <motion.li  transition={{ type: "tween", duration: 0.5 }} whileHover={{ scale: 1.1, y: -10 }} className="list-inline-item"><a href="https://github.com/Wissem-remote" ><i className="bi bi-github" style={{fontSize: '3rem'}}></i></a></motion.li>
                <motion.li transition={{ type: "tween", duration: 0.5 }} whileHover={{ scale: 1.1, y: -10 }} className="list-inline-item">  <a href="https://www.linkedin.com/in/wissem-rezki-3b4889231/"><i className="bi bi-linkedin" style={{fontSize: '3rem'}}></i></a></motion.li>
                <motion.li transition={{ type: "tween", duration: 0.5 }} whileHover={{ scale: 1.1, y: -10 }} className="list-inline-item">  <a href="https://media.graphassets.com/Et8hb8MiTg24cl0vcrBY"><i className="bx bxs-file-plus " style={{fontSize: '3rem'}}></i></a></motion.li>
            </ul>
            </motion.div>
        </div>
    </div>
    </>
}
