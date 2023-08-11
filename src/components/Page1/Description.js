import React from 'react'
import { Link } from 'react-router-dom'
import house from '../../assets/house.jpg';
import './styles1.css';
import { motion } from 'framer-motion';

const Description = () => {
    return (
        <motion.div className="page1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h3>Let's Build our Home</h3>
            <div className='animation'>
                <div className="page1-img">
                    <img src={house} alt="Rotating" className="rotating-image" />
                </div>
                <Link to="/select-parts">
                    <button className='start'>START</button>
                </Link>
            </div>
            
        </motion.div>
    )
}

export default Description
