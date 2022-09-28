import Task from '../Task';
import './index.css';

const TaskGroup = ({title, tasks}) => {
    return(
        <>
        <div className='task-group'>
            <h1>{title}</h1>
            {tasks.map(item => (
                <Task task={item}/>
            ))}
        </div>
        
        </>
    )
}

export default TaskGroup;