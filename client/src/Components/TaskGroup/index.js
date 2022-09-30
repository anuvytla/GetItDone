import Task from '../Task';
import './index.css';
import { Droppable } from 'react-beautiful-dnd';

const TaskGroup = ({title, tasks, groupId}) => {
    return(
        <>
        <div className='task-group'>
        <h1>{title}</h1>
        <Droppable droppableId={groupId}>
            {(provided) => (
                <div ref={provided.innerRef} 
                    {...provided.droppableProps}
                >
                    {tasks.map((item, index) => (
                        <Task task={item} key={item.id} index={index}/>
                    ))}
                </div>
            )}
        </Droppable>
        </div>
        </>
    )
}

export default TaskGroup;