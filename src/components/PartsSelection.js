import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { UserContext } from '../context/Context';



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const PartsSelection = () => {
    const { partsData,selectedParts,togglePartSelection } = useContext(UserContext);
    

    return (
        <div className="page">
            <h1>Parts Selection</h1>
            <Carousel responsive={responsive} showDots={true}
                customTransition="all .5"
                transitionDuration={500} >
                {partsData.map((part) => (
                    <div key={part.id} className="card">
                        <img src={part.image} alt={part.name} className='product-image' />
                        <label>
                            <input
                                type="checkbox"
                                // checked={selectedParts.includes(part.id)}
                                onChange={() => togglePartSelection(part.id)}
                            />
                            {part.name}
                        </label>
                    </div>
                ))}
            </Carousel>
            <Link to="/assembly">
                <button>NEXT</button>
            </Link>
        </div>
    );
};

export default PartsSelection;

