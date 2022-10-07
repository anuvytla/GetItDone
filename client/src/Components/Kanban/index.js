import './index.css'

import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import KanbanTaskGroup from '../KanbanTaskGroup';
import { DragDropContext } from 'react-beautiful-dnd';
import { QUERY_TASKS_IN_BOARD } from '../../utils/queries/queries';
import { UPDATE_TASK_STATUS } from '../../utils/mutations/mutations'
import { InfinitySpin } from 'react-loader-spinner';

const moveKanbanTask = async (updateStatus, taskId, newStatus) => {
  try {
    
    const data = await updateStatus({      
      variables: { _id: taskId, status: newStatus }
    });
    
  } catch (err) {
    console.error(err);
  }
}

const Kanban = () => {

  const { boardId } = useParams();

  const { isLoading, data } = useQuery(QUERY_TASKS_IN_BOARD, {
    variables: { boardId: boardId },
  });

  const [updateStatus, { error }] = useMutation(UPDATE_TASK_STATUS);

  const tasks = data?.tasks || [];
  console.log(tasks)
  if (tasks.length === 0) {
    return <></>
  }

    // const { project, moveTask, isLoading } = useProjectContext();
    const kanbanBoards = ["To Do", "Doing", "Done"]

      const onDragEnd = result => {
        const { destination, source, draggableId } = result;
        if(!destination) {
          return;
        }

        let sourceStatus = source.droppableId;
        let destinationStatus = destination.droppableId;
      
        if(sourceStatus === destinationStatus) {
          return;
        }

        moveKanbanTask(updateStatus, draggableId, destinationStatus);
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
                {
                    kanbanBoards.map(function(status) {
                        return <KanbanTaskGroup key={status} status={status} tasks={tasks} boardId={boardId}/>
                    })
                }
            </DragDropContext>
        )}
        </>
    )
}

export default Kanban;