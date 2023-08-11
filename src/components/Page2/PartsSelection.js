import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./styles2.css"
import nextIcon from '../../assets/next.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { UserContext } from '../../context/Context';
import { motion } from 'framer-motion';
import home from '../../assets/house.png';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};


const PartsSelection = () => {
    const { partsData, selectedParts, togglePartSelection, setAssembledParts, setSelectedParts } = useContext(UserContext);
    useEffect(() => {
        setAssembledParts([]);
        setSelectedParts([]);
    }, [setAssembledParts, setSelectedParts]);
    return (
        <motion.div className="page2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='page2-header'>
                <h1>Select the parts for your house</h1>
                <Link to='/'>
                    <button>
                        <img src={home} alt='home-icon' />
                        Home
                    </button>
                </Link>
            </div>
            <label className='select-all'>
                <input type='checkbox' onChange={() => togglePartSelection("all")} />
                Select All
            </label>
            <Carousel responsive={responsive} showDots={true}
                customTransition="all .5"
                transitionDuration={500} >
                {partsData.map((part) => (
                    <div key={part.id} className='box'>
                        <div className="card">
                            <div className='card-front'>
                                <img src={part.image} alt={part.name} />
                            </div>
                            <div className='card-back'>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedParts.includes(part.id)}
                                        onChange={() => togglePartSelection(part.id)}
                                    />
                                    {part.name}
                                </label>
                            </div>

                        </div>
                    </div>

                ))}
            </Carousel>
            <Link to="/assembly">
                <button className='btn'>
                    Next
                    <img src={nextIcon} alt='icon' />
                </button>
            </Link>
        </motion.div>
    );
};

export default PartsSelection;

