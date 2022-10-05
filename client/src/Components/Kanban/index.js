import './index.css'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import TaskGroup from '../TaskGroup';
import { DragDropContext } from 'react-beautiful-dnd';
import { QUERY_TASKS_IN_BOARD } from '../../utils/queries/queries';
import { InfinitySpin } from 'react-loader-spinner';

const Kanban = () => {

  const { boardId } = useParams();

  const { isLoading, data } = useQuery(QUERY_TASKS_IN_BOARD, {
    variables: { boardId: boardId },
  });

  console.log(data);

    // const { project, moveTask, isLoading } = useProjectContext();
    const kanbanBoards = ["To Do", "Doing", "Done"]

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

        // moveTask(sourceBoardId, destinationBoardId, source.index, destination.index);
      }

      
    return (
        <>
        {isLoading ? (
            <InfinitySpin 
                width='200'
                color="#4fa94d"
            />
        ) : (
            <DragDropContext onDragEnd={onDragEnd}>
                {/* {
                    kanbanBoards.map(function(status) {
                        return <TaskGroup key={taskBoardId} taskBoard={project.taskBoards[taskBoardId]} boardId={taskBoardId}/>
                    })
                } */}
            </DragDropContext>
        )}
        </>
    )
}

export default Kanban;