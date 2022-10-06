import KanbanTask from '../KanbanTask';
import './index.css';
import { Droppable } from 'react-beautiful-dnd';

const KanbanTaskGroup = ({status, tasks, boardId}) => {
    tasks = tasks.filter((task) => task.status === status) 
    return(
        <>
        <div className='task-group'>
        <Droppable droppableId={status}>
            {(provided) => (
                <div ref={provided.innerRef} 
                    {...provided.droppableProps}
                >
                    {tasks.map((item, index) => (
                        <KanbanTask task={item} key={item._id} index={index}/>
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