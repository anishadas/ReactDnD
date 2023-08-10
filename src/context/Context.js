import React, { useState } from "react";
import window from '../assets/windows.png';
import door from '../assets/door.png';
import wall from '../assets/wall.png';
import stairs from '../assets/stairs.png';
import garage from '../assets/garage.png';
import roof from '../assets/roof.png';
import fence from '../assets/fence.png';
export const UserContext = React.createContext();

const Context = ({ children }) => {
    const [selectedParts, setSelectedParts] = useState([]);
    // let selectedPartsData = [];
    const togglePartSelection = (partId) => {
        // const selectedObj = partsData.find(part => part.id == partId);
        // setSelectedParts([...selectedParts,selectedObj]);
        if (selectedParts.includes(partId)) {
            setSelectedParts(selectedParts.filter((id) => id !== partId));
        } else {
            setSelectedParts([...selectedParts, partId]);
        }
    };

    console.log(selectedParts)
    const partsData = [
        { id: 'windows', name: 'Windows', image: window },
        { id: 'walls', name: 'Walls', image: wall },
        { id: 'doors', name: 'Doors', image: door },
        { id: 'roof', name: 'Roof', image: roof },
        { id: 'garage', name: 'Garage', image: garage },
        { id: 'stairs', name: 'Stairs', image: stairs },
        { id: 'fence', name: 'Fence', image: fence },
    ];

    let value = {
        partsData,
        selectedParts,
        togglePartSelection,
        setSelectedParts,
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default Context
