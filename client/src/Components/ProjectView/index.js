import './index.css'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { DragDropContext } from 'react-beautiful-dnd';
import { InfinitySpin } from 'react-loader-spinner';
import { QUERY_PROJECT_DETAILED_INFO } from '../../utils/queries/queries';
import TaskGroup from '../../Components/TaskGroup';

const Project = () => {

    const onDragEnd = result => {
    
    }

    const { projectId } = useParams();
    
  const { isLoading, project } = useQuery(QUERY_PROJECT_DETAILED_INFO, {
    variables: { projectId: projectId },
  });
      
  console.log(project);

    return (
        <>
        {isLoading ? (
            <InfinitySpin 
                width='200'
                color="#4fa94d"
            />
        ) : (
            <DragDropContext onDragEnd={onDragEnd}>
                {
                    project.taskBoards.map(function(taskBoard) {
                        return <TaskGroup key={taskBoard._id.toString()} taskBoard={taskBoard} boardId={taskBoard._id.toString()}/>
                    })
                }
            </DragDropContext>
        )}
        </>
    )
}

export default Project;