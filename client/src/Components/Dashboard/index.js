import './index.css'
import TaskGroup from '../../Components/TaskGroup';
import { DragDropContext } from 'react-beautiful-dnd';
import { useProjectContext } from '../../utils/context/ProjectContext';

const Dashboard = () => {

    const { project, moveTask } = useProjectContext();

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

        moveTask(sourceBoardId, destinationBoardId, source.index, destination.index);
      }

    return (
        <>
        <DragDropContext onDragEnd={onDragEnd}>
            {
                Object.keys(project.taskBoards).map(function(taskBoardId) {
                    return <TaskGroup key={taskBoardId} taskBoard={project.taskBoards[taskBoardId]} boardId={taskBoardId}/>
                })
            }
        </DragDropContext>
        </>
    )
}

export default Dashboard;