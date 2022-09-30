import Task from '../Task';
import AddTask from '../AddTask';
import './index.css';
import { Droppable } from 'react-beautiful-dnd';

const TaskGroup = ({taskBoard, boardId}) => {
    return(
        <>
        <div className='task-group'>
        <h1>{taskBoard.title}</h1>
        <Droppable droppableId={boardId}>
            {(provided) => (
                <div ref={provided.innerRef} 
                    {...provided.droppableProps}
                >
                    {taskBoard.tasks.map((item, index) => (
                        <Task task={item} key={item.id} index={index}/>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
        <AddTask/>
        </div>
        </>
    )
}

export default TaskGroup;