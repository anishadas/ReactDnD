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
    const [assembledParts, setAssembledParts] = useState([]);

    const togglePartSelection = (partId) => {
        
        let partIds=partsData.map(part=>part.id)
        if (partId === "all") {
            setSelectedParts(partIds);
        }
        else if (selectedParts.includes(partId)) {
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

    const onDragEnd = (result) => {
        console.log(result)
        if (!result.destination) {
            return;
        }

        const { source, destination } = result;
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        let add, active = selectedParts, assembled = assembledParts;
        if (source.droppableId === "selectedParts") {
            add = active[source.index];
            console.log("add", add);
            active.splice(source.index, 1);
        } else {
            add = assembled[source.index];
            console.log("add", add);
            assembled.splice(source.index, 1);
        }

        if (destination.droppableId === "selectedParts") {
            active.splice(destination.index, 0, add);
        } else {
            assembled.splice(destination.index, 0, add);
        }
        setAssembledParts(assembled);
        setSelectedParts(active);
    }

    const selectedPartDetails = {
        windows: { name: 'Windows', image: window },
        walls: { name: 'Walls', image: wall },
        doors: { name: 'Doors', image: door },
        roof: { name: 'Roof', image: roof },
        garage: { name: 'Garage', image: garage },
        fence: { name: 'Fence', image: fence },
        stairs: { name: 'Stairs', image: stairs },
    };

    let value = {
        partsData,
        selectedParts,
        togglePartSelection,
        setSelectedParts,
        assembledParts,
        setAssembledParts,
        onDragEnd,
        selectedPartDetails
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default Context
