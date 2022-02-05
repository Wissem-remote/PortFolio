import { motion } from 'framer-motion'
import React from 'react'
import { NavBar } from '../navBar'

export const Work=()=> {
    const variants = {
        end: { opacity: 0,scale: 0.5, x: 400, },
        hidden: { opacity: 0,scale: 0.5, y:400, },
        visible: { opacity: 1,scale: 1,y:0  },
        }
        
    return <>
    <NavBar/>
    <div className="container">
        <div className="row ">
            
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ type: "tween", duration: 1 }}
                exit="hidden"
                className="col-lg-6 d-flex align-items-center  m8" >
                     <div >
                <h2 className="t2 mb-2">Mes <span className="blue">Prototype</span><i className='bx bx-rocket'></i></h2>
                    
                    <motion.div
                    transition={{ type: "tween", duration: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="card " style={{width: '18rem'}}>
                    <a href="https://admiring-nobel-ef6c78.netlify.app/">
                    <img src="/img/hero.png" className="card-img-top img mt-2 " alt="Web-site"/>
                    </a>
                

                    <div className="card-body">
                        <p className="card-text text-center ps">- Mon Aplication Web -</p>
                        <p className="card-text text-center pss">- MongoDB Express -</p>
                        <p className=" card-text text-center pss">- React NodeJs -</p>
                    </div>
                    </motion.div>
                    </div>
                    
            </motion.div> 
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ type: "tween", duration: 1 }}
                whileHover={{ scale: 1.1 }}
                exit="end"
                className="col-lg-6 d-flex align-items-center">
                     <img className="p2" src="/img/work.png" alt="web"/>
                </motion.div>
      
        </div>
    </div>
    </>
}