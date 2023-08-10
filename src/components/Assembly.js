import React, { useContext, useState } from 'react';
import { useDrop } from 'react-dnd';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/Context';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AssembleParts from './AssembleParts';

import window from '../assets/windows.png';
import door from '../assets/door.png';
import wall from '../assets/wall.png';
import stairs from '../assets/stairs.png';
import garage from '../assets/garage.png';
import roof from '../assets/roof.png';
import fence from '../assets/fence.png';

const Assembly = () => {
    const { partsData, selectedParts, setSelectedParts } = useContext(UserContext);
    const [assembledParts, setAssembledParts] = useState([]);
    console.log("parts", selectedParts);
    const selectedPartDetails = {
        windows: { name: 'Windows', image: window },
        walls: { name: 'Walls', image: wall },
        doors: { name: 'Doors', image: door },
        roof: { name: 'Roof', image: roof },
        garage: { name: 'Garage', image: garage },
        fence: { name: 'Fence', image: fence },
        stairs: { name: 'Stairs', image: stairs },
    };
    const onDragEnd = (result) => {
        console.log(result)
        if (!result.destination) {
            return;
        }
        // const reorderedParts = [...selectedParts];
        // const [reorderedPart] = reorderedParts.splice(result.source.index, 1);
        // reorderedParts.splice(result.destination.index, 0, reorderedPart);
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
            active.splice(destination.index, 0,add);
        } else {
            assembled.splice(destination.index, 0,add);
        }
        setAssembledParts(assembled);
        setSelectedParts(active);
    }


    return (
        <div className="assembly-container">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='selectedParts'>
                    {
                        (provided,snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} className={`parts-list ${snapshot.isDraggingOver?"dragactive":""}`}>
                                <h2>selected part</h2>
                                {
                                    selectedParts.map((partId, index) => (
                                        <Draggable key={partId} draggableId={partId} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={`part-card ${snapshot.isDragging ? "drag" : ""}`}
                                                >
                                                    <img src={selectedPartDetails[partId].image} alt={selectedPartDetails[partId].name} />
                                                    <p>{selectedPartDetails[partId].name}</p>
                                                </div>
                                            )}
                                        </Draggable>

                                    ))}
                                {provided.placeholder}
                            </div>
                        )
                    }
                </Droppable>

                <Droppable droppableId='assembledParts'>
                    {
                        (provided,snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} className={`assembly-stage ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}>
                                {/* <h2>assemble area</h2>  */}
                                {assembledParts.map((partId, index) => (
                                    <Draggable key={partId} draggableId={partId} index={index}>
                                        {(provided,snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`assembled-part-card ${snapshot.isDragging?"drag":""}`}
                                            >
                                                <img src={selectedPartDetails[partId].image} alt={selectedPartDetails[partId].name} />
                                                <p>{selectedPartDetails[partId].name}</p>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>

                        )}
                </Droppable>
                {/* </div> */}
            </DragDropContext>
        </div>
    );
};

export default Assembly;

