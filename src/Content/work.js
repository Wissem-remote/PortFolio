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
   
      
     
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ type: "tween", duration: 1 }}
                exit="hidden"
                className="col-lg-7 m-auto d-flex  m8" >
                      
                      <div className="container">
                      <h2 className="t2 mb-4 mt-4">Mes <span className="blue">Projets</span><i className='bx bx-rocket'></i></h2>
                      <div className="row ">
                  
                      <a className="text-decoration-none  col-5 mb-4" href="https://admiring-nobel-ef6c78.netlify.app/">
                    <motion.div
                    transition={{ type: "tween", duration: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="card w" >
                  
                    <img src="/img/hero.png" className="card-img-top img mt-2 " alt="Web-site"/>
                    
                

                    <div className="card-body">
                        <p className="card-text text-center ps">- Geek -</p>
                        <p className="card-text text-center pss">- MongoDB Express -</p>
                        <p className=" card-text text-center pss">- React NodeJs -</p>
                    </div>
                    </motion.div>
                    </a>

                    <div className="col-1"></div>
                    
                    <a className="text-decoration-none  col-5 mb-4" href="https://disney-clone-gold.vercel.app/">
                    <motion.div
                    transition={{ type: "tween", duration: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="card w" >
                   
                    <img src="/img/disney.png" className="card-img-top imgs mt-2 " alt="Web-site"/>
                    
                

                    <div className="card-body">
                        <p className="card-text text-center ps ">- Disney  -</p>
                        <p className="card-text text-center pss">- Next.js GraphCms -</p>
                        <p className=" card-text text-center pss">- GraphQl Tailwindcss -</p>
                    </div>
                    </motion.div>
                    </a>

                    <a className="text-decoration-none  col-5 mb-4" href="https://candy-crush-rosy.vercel.app/">
                    <motion.div
                    transition={{ type: "tween", duration: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="card w" >
                   
                    <img src="/img/candy.png" className="card-img-top imgs mt-2 " alt="Web-site"/>
                    
                

                    <div className="card-body">
                        <p className="card-text text-center ps ">- Candy-Crush  -</p>
                        <p className="card-text text-center pss">- React.js Tailwindcss -</p>
                        <p className="card-text text-center pss">- Only Pc -</p>
                    </div>
                    </motion.div>
                    </a>
                    </div>
                    </div>
            </motion.div> 
       
      
       
    
    </>
}