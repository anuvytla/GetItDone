import './index.css';
import { useState } from 'react';

const AddTask = () => {
    const [newTask, setNewTask] = useState('');
    const [task, setTask] = useState([]);
    return (
        <>
            <label htmlFor='newTask'> New Task</label>
            <input
                id='newTask'
                value={newTask}
                onChange={event => setNewTask(event.target.value)} />

            <button className='newInput'
                onClick={() => {
                    if (newTask.trim().length === 0) {
                        alert('Must enter valid task!');
                        return;
                    }

                    task.push(newTask);
                    setTask(task);
                }}>
                Add Task
            </button>
                

                 
        </>
    )
}

export default AddTask