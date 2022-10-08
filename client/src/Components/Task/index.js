import "./index.css"
import { Draggable } from "react-beautiful-dnd";
import { QUERY_TASK_STATUS } from "../../utils/queries/queries";

const Task = ({task, index}) => {
      const status = task.status || 'To Do';
      
      let bgClass = 'card-todo';
      if (status === "Doing") {
        bgClass = 'card-doing';
      } else if (status === "Done"){
        bgClass = 'card-done';
      }

      let cName = 'card '+bgClass;

    return (
        <Draggable draggableId={task._id} index={index}>
            {(provided) => (
                <div className={cName}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                    <h5>{task.title}</h5>
                    <p>{task.description}</p>
                </div>
            )}
        </Draggable>
    )
}

export default Task;



