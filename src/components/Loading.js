import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../context/Context';
import { motion } from 'framer-motion';
const Loading = () => {
    const navigate = useNavigate();
    const { assembledParts }=useContext(UserContext);
    return (
        <>
            <motion.div className='main_div'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className='center_div'>
                    <div className='rotate'></div>
                    <h1>Loading</h1>
                </div>
            </motion.div>
            {
                setTimeout(() => {
                    if (assembledParts.length) {
                        navigate('/final-view')
                    } else {
                        alert("Nothing is assembled");
                        navigate('/assembly');
                    }
                    }, 2000)
            }
        </>
    )
}

export default Loading
