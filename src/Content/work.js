import { motion } from 'framer-motion'
import React from 'react'
import { NavBar } from '../navBar'

export const Work=()=> {
    const variants = {
        end: { opacity: 0, y: 40, },
        hidden: { opacity: 0, y: 40, },
        visible: { opacity: 1,scale: 1,y:0  },
        }
        
    return <>
    <NavBar/>
   
      
     
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ type: "tween", duration: 1 }}
                exit="hidden"
                className="col-lg-7 m-auto d-flex  m8" >
                    
                    <div className="container">
                        <h2 className="t2 mb-4 mt-4  text-center">Mes <span className="blue">Projets</span><i className='bx bx-rocket'></i></h2>
                            <div className="row ">
                

                
                            {/* Disney */}
                            <a className="text-decoration-none col-12 col-md-12 col-lg-6 mb-4" href="https://disney-clone-gold.vercel.app/">
                            <motion.div
                            transition={{ type: "tween", duration: 1 }}
                            whileHover={{ scale: 1.1 }}
                            className="card w" >
                            <img src="/img/dysney.png" className="card-img-top imgs  " alt="Web-site"/>
                            
                        

                            <div className="card-body">
                                <p className="card-text text-center ps ">- Disney  -</p>
                                <p className="card-text text-center pss">- Next.js Tailwindcss -</p>
                            </div>
                            </motion.div>
                            </a>

                            {/* Candy Crush */}
                            <a className="text-decoration-none  col-12 col-md-12 col-lg-6 mb-4" href="https://candy-crush-rosy.vercel.app/">
                            <motion.div
                            transition={{ type: "tween", duration: 1 }}
                            whileHover={{ scale: 1.1 }}
                            className="card w" >
                            <img src="/img/candy.png" className="card-img-top imgs  " alt="Web-site"/>
                            
                        

                            <div className="card-body">
                                <p className="card-text text-center ps ">- Candy-Crush  -</p>
                                <p className="card-text text-center pss">- React.js Tailwindcss -</p>
                            </div>
                            </motion.div>
                            </a>

                                {/* Geek */}
                            <a className="text-decoration-none  col-12 col-md-12 col-lg-6 mb-4" href="https://admiring-nobel-ef6c78.netlify.app/">
                            <motion.div
                            transition={{ type: "tween", duration: 1 }}
                            whileHover={{ scale: 1.1 }}
                            className="card w" >
                        
                            <img src="/img/geek.png"  className="card-img-top img " alt="Web-site"/>
                            
                        

                            <div className="card-body">
                                <p className="card-text text-center ps">- Geek -</p>
                                <p className=" card-text text-center pss">- React NodeJs -</p>
                            </div>
                            </motion.div>
                            </a>
                    
                        </div>
                    </div>
             </motion.div> 
        
    </>
}