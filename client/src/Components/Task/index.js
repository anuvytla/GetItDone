import "./index.css"
import { Draggable } from "react-beautiful-dnd";

const Task = ({task, index}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div className='card'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    >
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            )}
        </Draggable>
    )
}

export default Task;