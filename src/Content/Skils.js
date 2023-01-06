import React from 'react'
import { NavBar } from '../navBar'
import { motion } from "framer-motion"


export const Skils=()=> {
    const variants = {
        end: { opacity: 0, y: 40, },
        hidden: { opacity: 0, y: 40, },
        visible: { opacity: 1,y:0  },
        }
    return <>
        <NavBar />
    <div className="container mt-5" >
        <div className="row d-flex justify-content-center">
        
                <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ type: "tween", duration: 1 }}
                exit="end"
                className="col-12 col-md-12 col-lg-6 d-flex align-items-center m9">
                
                <div className="col-12 col-md-12 col-lg-12 " >
                <h2 className="text-center t2 mb-2">Competence <span className="blue">Professionnel</span><i className='bx bx-rocket'></i></h2>

                                <div className="row d-flex justify-content-center">
                                <Box value="HTML/CSS">
                                <i className='bx bxl-html5' style={{fontSize:'95px'}}></i>
                                </Box>
                                
                                <Box value="Javascript">
                                <i className='bx bxl-javascript'  style={{fontSize:'95px'}} ></i>

                                </Box>
                                <Box value="Php">
                                <i className='bx bxl-php' style={{fontSize:'95px'}} ></i>
                                </Box>

                                <Box value="React">
                                <i className='bx bxl-react' style={{fontSize:'95px'}} ></i>
                                </Box>
                                <Box value="Symfony">
                                <i className='bx bxl-php bx-tada' style={{fontSize:'95px'}}></i>
                                </Box>
                                <Box value="MySql">
                                <i className='bx bxs-data' style={{fontSize:'95px'}} ></i>
                                
                                </Box>
                                <Box value="Bootstrap">
                                <i className='bx bxl-bootstrap' style={{fontSize:'95px'}} ></i>
                                </Box>
                                <Box value="Tailwind">
                                <i className='bx bxl-tailwind-css bx-spin' style={{fontSize:'95px'}} ></i>
                                
                                </Box>
                                <Box value="Stripe">
                                <i className='bx bxl-stripe bx-tada' style={{fontSize:'95px'}} ></i>
                                </Box>
                                
                                </div>
                        
                </div>
                
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ type: "tween", duration: 1 }}
                whileHover={{ scale: 1.1 }}
                exit="end"
                className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <img className="p2" src="/img/skills.jpg" alt="web"/>
                </motion.div>
    </div>
    </div>
    </>
}

const Box=({children,value})=>{
    return <>
    <motion.div 
    initial={{scale:0.9}}
     whileHover={{ scale: 1.1, y: -10 }}
     transition={{ type: "tween", duration: 0.5 }}
    className="b1 col-3  me-2 m7 ">
        <div className="text-center">{children}</div>
        <p className="text-center t3" >{value}</p>
    </motion.div>
    </>
}
