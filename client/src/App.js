import './App.css';
import Task from './Components/Task';
import TaskGroup from './Components/TaskGroup';

const task_list = [
  {
    title:"Task 1",
    description:"This is the first task"
  },
  {
    title:"Task 2",
    description:"This is the second task"
  },
  {
    title:"Task 3",
    description:"This is the third task"
  },
]

function App() {
  return (
    <div className="App">
      <TaskGroup title='To-Do' tasks={task_list}/>
      <TaskGroup title='In Progress' tasks={task_list}/>
      <TaskGroup title='Completed' tasks={task_list}/>
    </div>
  );
}

export default App;
