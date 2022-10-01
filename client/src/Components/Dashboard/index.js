import './index.css'
import TaskGroup from '../../Components/TaskGroup';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';

const Dashboard = () => {

    const [taskBoards, setTaskBoards] = useState({
        "1" : {
                id: "1",
                title: "create a full stack web notes app",
                description: "make sure to find a creative name",
                tasks: [
                    {
                        id: "1",
                        title: "Create the express server",
                        description: "start the routes afterwards",
                        urgency: 1,
                        board_id: 1,
                    },
                    {
                        id: "2",
                        title: "generate the react app",
                        description: "make sure it is set up in a separate 'client' folder",
                        urgency: 1,
                        board_id: 1,
                    },
                    {
                        id: "3",
                        title: "CSS for the home page",
                        description: "style the nav bar",
                        urgency: 2,
                        board_id: 1,
                    },
                ]
            },
        "2" : {
                id: "2",
                title: "Lemonade Sales",
                description: "tracking all tasks for lemonade stand",
                tasks: [
                    {
                        id: "4",
                        title: "server folder structure created",
                        description: "schema, connection, models, and seeds created",
                        urgency: 3,
                        board_id: 2,
                    },
                    {
                        id: "5",
                        title: "get more lemons",
                        description: "need by friday",
                        urgency: 1,
                        board_id: 2,
                    },
                    {
                        id: "6",
                        title: "create advertisements",
                        description: "poster, and signs to put around town",
                        urgency: 1,
                        board_id: 2,
                    },
                    {
                        id: "7",
                        title: "get a cooler to have ice and a pitcher",
                        description: "at least 64oz",
                        urgency: 2,
                        board_id: 2,
                    },
                ]
            }
    })
    
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

        let sourceBoard = taskBoards[sourceBoardId];
        let destinationBoard = taskBoards[destinationBoardId];
        
        let sourceBoardTasks = Array.from(sourceBoard.tasks);
        let [movedTask] = sourceBoardTasks.splice(source.index, 1);

        let destinationBoardTasks = Array.from(destinationBoard.tasks);
        destinationBoardTasks.splice(destination.index, 0, movedTask);

        let updatedSourceBoard = {...sourceBoard, tasks: sourceBoardTasks};
        let updatedDestinationBoard = {...destinationBoard, tasks: destinationBoardTasks};

        const updatedTaskBoards = {...taskBoards, [sourceBoardId]: updatedSourceBoard, [destinationBoardId]: updatedDestinationBoard};

        setTaskBoards(updatedTaskBoards);
      }

    return (
        <>
        <DragDropContext onDragEnd={onDragEnd}>
            {
                Object.keys(taskBoards).map(function(taskBoardId) {
                    return <TaskGroup key={taskBoardId} taskBoard={taskBoards[taskBoardId]} boardId={taskBoardId}/>
                })
            }
        </DragDropContext>
        </>
    )
}

export default Dashboard;