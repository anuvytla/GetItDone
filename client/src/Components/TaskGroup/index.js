import Task from '../Task';
import AddTask from '../AddTask';
import './index.css';
import { Droppable } from 'react-beautiful-dnd';
import { QUERY_TASKS_IN_BOARD } from '../../utils/queries/queries';
import { useQuery } from '@apollo/client';
import { InfinitySpin } from 'react-loader-spinner';
import { useProjectContext } from '../../utils/context/ProjectContext';
import { useEffect, useState } from 'react';

function TaskGroup({taskBoard, boardId, projectId}) {

    let {setTasks, getTasks, state} = useProjectContext();
    let [myTasks, setMyTasks] = useState([]);

    const { loading, data } = useQuery(QUERY_TASKS_IN_BOARD, {
        variables: { boardId: boardId },
      });


      
    useEffect(() => {
            if (data) {
            let tasks = data.tasksById;
            setTasks(projectId, boardId, tasks);
            console.log("update tasks");
        }
    }, [data]);

    useEffect(() => {
        let tasks = getTasks(projectId, boardId);
        console.log("Updating my tasks");
        if(tasks) {
            setMyTasks(tasks);
        }
    }, [state]);

    return(
        <>
        {loading ? (
            <InfinitySpin 
                width='50'
                color="#4fa94d"
            />
        )
         :
        (
            <div className='task-group'>
            <h1>{taskBoard.title}</h1>
            {myTasks.length ? (<Droppable droppableId={boardId}>
                {(provided) => (
                    <div ref={provided.innerRef} 
                        {...provided.droppableProps}
                    >
                        {myTasks.map((task, index) => (
                            <Task task={task} key={task._id} index={index}/>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>) : (<div></div>)}
            <AddTask boardId={boardId}/>
            </div>
        )}
        </>
    )
}

export default TaskGroup;