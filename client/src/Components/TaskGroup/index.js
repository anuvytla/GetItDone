import Task from "../Task";
import AddTask from "../AddTask";
import "./index.css";
import { Droppable } from "react-beautiful-dnd";
import { QUERY_TASKS_IN_BOARD } from "../../utils/queries/queries";
import { useQuery } from "@apollo/client";
import { InfinitySpin } from "react-loader-spinner";
import { useProjectContext } from "../../utils/context/ProjectContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TaskGroup({ taskBoard, boardId, projectId }) {
  let { getTasks, state } = useProjectContext();
  let [myTasks, setMyTasks] = useState([]);

  useEffect(() => {
    let tasks = getTasks(projectId, boardId);
    console.log("Updating my tasks");
    if (tasks) {
      console.log(tasks);
      setMyTasks(tasks);
    }
  }, [state]);

  return (
    <>
      
        
        <div className="task-group mt-3">
          <Link to={`/kanban/${boardId}`} >
            <h3>{taskBoard.title}</h3>
            <p style={{ opacity: "50%" }}>(Click above to open kanban view)</p>
          </Link>
          
            {myTasks.length ? (
              <Droppable droppableId={boardId}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {myTasks.map((task, index) => (
                      <Task task={task} key={task._id} index={index} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ) : (
              <div></div>
            )}
          <AddTask boardId={boardId} /> 
          
        </div>
      
    </>
  );
}

export default TaskGroup;
