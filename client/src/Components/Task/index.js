import "./index.css"
import { Draggable } from "react-beautiful-dnd";
import { useQuery } from "@apollo/client";
import { QUERY_TASK_STATUS } from "../../utils/queries/queries";

const Task = ({task, index}) => {
    const { isLoading, data } = useQuery(QUERY_TASK_STATUS, {
        variables: { taskId: task._id },
      });
      const status = data?.taskStatus.status || 'To Do';
      
      let bgColor = '#f7887d'
      if (status === "Doing") {
        bgColor = "#ffda61"
      } else if (status === "Done"){
        bgColor = "#68d89b"
      }

    return (
        <Draggable draggableId={task._id} index={index}>
            {(provided) => (
                <div className='card'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{backgroundColor: bgColor}}>
                    <h5>{task.title}</h5>
                    <p>{task.description}</p>
                </div>
            )}
        </Draggable>
    )
}

export default Task;



