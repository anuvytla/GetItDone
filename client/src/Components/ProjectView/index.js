import './index.css'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import { InfinitySpin } from 'react-loader-spinner';
import { QUERY_TASKBOARDS_IN_PROJECT } from '../../utils/queries/queries';
import TaskGroup from '../../Components/TaskGroup';
import { useProjectContext } from '../../utils/context/ProjectContext';


function ProjectView({...props}) {
    const [myBoards, setMyBoards] = useState([]);
    const {state, setTaskBoards, getTaskBoards, moveTask} = useProjectContext();
    const { projectId } = useParams();
    const onDragEnd = result => {
        const { destination, source } = result;
        if(!destination) {
          return;
        }

        let sourceBoardId = source.droppableId;
        let destinationBoardId = destination.droppableId;
      
        if(sourceBoardId === destinationBoardId && destination.index === source.index ) {
          return;
        }
        
        moveTask(projectId, sourceBoardId, destinationBoardId, source.index, destination.index);
    }

    const { loading, data } = useQuery(QUERY_TASKBOARDS_IN_PROJECT, {
        variables: { projectId: projectId },
    });
    useEffect(() => {
        if (data) {
            let boards = data.taskBoardsByProject;
            setTaskBoards(projectId, boards);
            console.log("update taskboards");
        }
      }, [data]);
    
    useEffect(() => {
        let boards = taskBoardsInProject();
        console.log("Updating my boards");
        if(boards) {
            setMyBoards(boards);
        }
    }, [state]);

    function taskBoardsInProject () {
        let project = state.projects.find(element => element._id === projectId);
        if(project) {
            return project.taskBoards;
        }

        return [];
    }

    return (
        <div>
        {loading ? (
            <InfinitySpin 
                width='200'
                color="#4fa94d"
            />
        ) : (
            myBoards.length ? 
            (<DragDropContext onDragEnd={onDragEnd}>
                {
                    myBoards.map(function(taskBoard) {
                        return <TaskGroup key={taskBoard._id.toString()} taskBoard={taskBoard} boardId={taskBoard._id.toString()} projectId={projectId}/>
                    })
                }
            </DragDropContext>) :
            (
                <div></div>
            )
        )}
        </div>
    )
}

export default ProjectView;