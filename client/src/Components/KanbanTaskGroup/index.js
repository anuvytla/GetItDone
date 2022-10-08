import KanbanTask from '../KanbanTask';
import './index.css';
import { Droppable } from 'react-beautiful-dnd';

const KanbanTaskGroup = ({status, tasks, boardId}) => {
    tasks = tasks.filter((task) => task.status === status) 

    let bgColor = {border: '4px solid #d8572a'}
    if (status === "Doing") {
      bgColor = {border: "4px solid #ffd23f"}
    } else if (status === "Done"){
      bgColor = {border: "4px solid #0ead69"}
    }
    return(
        <>
        <div className='k-task-group' style={bgColor}>
            <h3 className='text-center'>{status}</h3>
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