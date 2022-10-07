import './index.css'
import ProjectCard from '../../Components/ProjectCard';
import { DragDropContext } from 'react-beautiful-dnd';
import { useProjectContext } from '../../utils/context/ProjectContext';
import { InfinitySpin } from 'react-loader-spinner';

const Dashboard = () => {

    const { state, moveTask, isLoading } = useProjectContext();

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
        {isLoading ? (
            <InfinitySpin 
                width='200'
                color="#4fa94d"
            />
        ) : (
            state.projects.map(function(project) {
                return <ProjectCard key={project._id} project={project}/>
            })
        )}
        </>
    )
}

export default Dashboard;