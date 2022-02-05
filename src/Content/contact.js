import React, { useState } from 'react'
import { NavBar } from '../navBar'
import { motion } from "framer-motion"
import emailjs from 'emailjs-com';
import {useToggle} from '../hook/toogle'
import { Modal } from '../hook/modal'
import { useNavigate } from 'react-router-dom';

export const Contact=()=> {
    const navigation=useNavigate()
    const [lodding,setLodding]=useState(false)
    const [add,setAdd]=useToggle(false)
    const variants = {
        end: { opacity: 0,scale: 0.5, x: 400, },
        hidden: { opacity: 0,scale: 0.5, y:-400, },
        visible: { opacity: 1,scale: 1,y:0  },
        }
       
        const onClick=(e)=>{
            e.preventDefault()
            const value =Object.fromEntries(new FormData(e.target))
            emailjs.send("service_gzwqu0t", "template_dytoey5", value, "user_Q6xTN3DJd6AoRLdHBeMdt")
            .then((res)=>{
                console.log('sucess',res)
                setLodding(!lodding)
            }, (err)=>{
                console.log('error', err)
            })
            setAdd()
        }
    return <>
    <NavBar/>
    <div className="container">
    <motion.h2 
    initial="hidden"
    whileHover={{ scale: 1.1, y: -10 }}
    animate="visible"
    variants={variants}
    transition={{ type: "tween", duration: 1 }}
    exit="end"
    className="blue text-center mt-5 t1 c1"> Contact </motion.h2>
    
        <div className="row  m4">
        
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ type: "tween", duration: 1 }}
                exit="end" 
                className="col-8 m-auto mb-auto ">
                    <form onSubmit={onClick}>
        <div className=" mb-3">
            <input type="text" className="form-control" name="name" placeholder="Name" required/>
            
        </div>
        <div className="mb-3">
            <input type="email" className="form-control" name="email" placeholder="name@example.com" required/>
            
        </div>
        <div className="mb-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Leave a Message here" required></textarea>

        </div>
        <div className="d-flex justify-content-center">
            <motion.button type="submit" transition={{ type: "tween", duration: 0.5 }} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1,y: -10 }} className="btn btn-primary col-5 " > Envoyer </motion.button>
            {add&&<Modal onClose={setAdd}> Votre message est Envoyer
                <hr/>
                <button className={lodding?"btn btn-primary ":"btn btn-primary disabled"} onClick={()=>{ (()=> { setAdd(); navigation("/")})()}}>{lodding?"Fermer":
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}</button>
                </Modal>}
        </div>
        </form>
       
            </motion.div>
        <div className="col-8 n1 ">
            <p>
                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à 
                titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer 
                le faux-texte dès 
               

            </p>
        </div>
        </div>
    </div>
        
    </>
}
