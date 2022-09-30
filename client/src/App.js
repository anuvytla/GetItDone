import './App.css';
import TaskGroup from './Components/TaskGroup';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';

function App() {

  const [taskList, setTaskList] = useState([
    {
      id: "1",
      title:"Task 1",
      description:"This is the first task"
    },
    {
      id: "2",
      title:"Task 2",
      description:"This is the second task"
    },
    {
      id: "3",
      title:"Task 3",
      description:"This is the third task"
    },
  ]); 

  const onDragEnd = result => {
    const { destination, source } = result;
    if(!destination) {
      return;
    }
  
    if(destination.droppableId === source.droppableId && destination.index === source.index ) {
      return;
    }
  
    const newTaskList = Array.from(taskList);
    newTaskList.splice(source.index, 1);
    newTaskList.splice(destination.index, 0, taskList[source.index]);
    setTaskList(newTaskList);
  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskGroup title='To-Do' tasks={taskList} groupId='To-Do'/>
      </DragDropContext>
    </div>
  );
}

export default App;
