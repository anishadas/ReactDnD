import React, { useContext } from 'react'
import { UserContext } from '../../context/Context'
import './styles4.css';
import previous from '../../assets/previous.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const FinalView = () => {
  const { assembledParts, selectedPartDetails } = useContext(UserContext);


  return (
    <motion.div className='display-zone'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='header'>
        <h2>Your final view </h2>
        <Link to='/assembly'>
          <button>
            <img src={previous} alt="prev" />
            Assemble Again
          </button>
        </Link>

      </div>
      <div className='final'>
        {
          assembledParts?.map(partId => <img src={selectedPartDetails[partId].image} alt={selectedPartDetails[partId].name} className={partId} />)
        }
      </div>
    </motion.div>
  )
}

export default FinalView
