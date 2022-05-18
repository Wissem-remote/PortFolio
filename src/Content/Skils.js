import React from 'react'
import { NavBar } from '../navBar'
import { motion } from "framer-motion"


export const Skils=()=> {
    const variants = {
        end: { opacity: 0,scale: 0.5, x: 400, },
        hidden: { opacity: 0,scale: 0.5, y: 400, },
        visible: { opacity: 1,scale: 1,y:0  },
        }
    return <>
        <NavBar />
    <div className="container">
        <div className="row ">
        
                <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ type: "tween", duration: 1 }}
                exit="end"
                className="col-lg-6 d-flex align-items-center m9">
                
                <div >
                <h2 className="t2 mb-2">Competence <span className="blue">Professionnel</span><i className='bx bx-rocket'></i></h2>

                                <div className="row ">
                                <Box value="HTML">
                                <i className='bx bxl-html5 bx-tada  ' style={{fontSize:'95px'}}></i>
                                </Box>
                                
                                <Box value="Bootstrap">
                                <i className='bx bxl-bootstrap bx-tada'  style={{fontSize:'95px'}} ></i>

                                </Box>
                                <Box value="Javascript">
                                <i className='bx bxl-javascript bx-tada' style={{fontSize:'95px'}} ></i>
                                </Box>

                                <Box value="React">
                                <i className='bx bxl-react bx-spin' style={{fontSize:'95px'}} ></i>
                                </Box>
                                <Box value="Nextjs">
                                <i className='bx bxs-up-arrow bx-tada ' style={{fontSize:'95px'}}></i>
                                </Box>
                                <Box value="Nodejs">
                                <i className='bx bxl-nodejs bx-tada' style={{fontSize:'95px'}} ></i>
                                
                                </Box>
                                <Box value="UseQuery">
                                <i className='bx bxl-react bx-tada' style={{fontSize:'95px'}} ></i>
                                </Box>
                                <Box value="Tailwind">
                                <i className='bx bxl-tailwind-css bx-spin' style={{fontSize:'95px'}} ></i>
                                
                                </Box>
                                <Box value="GraphCms">
                                <i className='bx bxs-data bx-tada' style={{fontSize:'95px'}} ></i>
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
                className="col-lg-6 d-flex align-items-center">
                        <img className="p2" src="/img/skills.png" alt="web"/>
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
