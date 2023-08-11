import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/Context';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles3.css';
import nextIcon from '../../assets/next.png';
import restart from '../../assets/refresh.png';
import { motion } from 'framer-motion';
const Assembly = () => {
    const { selectedParts, assembledParts, onDragEnd, selectedPartDetails } = useContext(UserContext);



    return (
        <motion.div className="assembly-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='header'>
                <p className='heading'>Let's Assemble...</p>
                <div className='final-view-button'>
                    <Link to='/loading'>
                        <button>
                            Final View
                            <img src={nextIcon} alt='icon' />
                        </button>
                    </Link>
                    <Link to='/select-parts'>
                        <button>
                            Restart
                            <img src={restart} alt='icon' />
                        </button>
                    </Link>
                </div>
            </div>

            <div className='assemble-zone'>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='selectedParts'>
                        {
                            (provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className={`parts-list ${snapshot.isDraggingOver ? "dragactive" : ""}`}>
                                    <h2>selected parts</h2>
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
                        {/* <h2>assemble area</h2> */}
                        {
                            (provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className={`assembly-stage ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}>

                                    {assembledParts.map((partId, index) => (

                                        <Draggable key={partId} draggableId={partId} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={`assembled-part-card ${snapshot.isDragging ? "drag" : ""}`}
                                                >
                                                    <img src={selectedPartDetails[partId].image} alt={selectedPartDetails[partId].name} className={partId} />


                                                </div>
                                            )}
                                        </Draggable>

                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                    </Droppable>
                </DragDropContext>
            </div>

        </motion.div>
    );
};

export default Assembly;

