import "./index.css"
import { Draggable } from "react-beautiful-dnd";

const KanbanTask = ({task, index}) => {
   
    return (
        <Draggable draggableId={task._id} index={index}>
            {(provided) => (
                <div className='k-card'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} 
                    >
                    <h5>{task.title}</h5>
                    <p>{task.description}</p>
                </div>
            )}
        </Draggable>
    )
}

export default KanbanTask;