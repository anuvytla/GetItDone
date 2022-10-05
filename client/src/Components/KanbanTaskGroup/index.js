import Task from '../Task';
import AddTask from '../AddTask';
import './index.css';
import { Droppable } from 'react-beautiful-dnd';

const KanbanTaskGroup = ({status, tasks, boardId}) => {
    tasks = tasks.filter((task) => task.status === status) 
    return(
        <>
        <div className='task-group'>
        <Droppable droppableId={boardId}>
            {(provided) => (
                <div ref={provided.innerRef} 
                    {...provided.droppableProps}
                >
                    {tasks.map((item, index) => (
                        <Task task={item} key={item.id} index={index}/>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
        </div>
        </>
    )
}

export default KanbanTaskGroup;