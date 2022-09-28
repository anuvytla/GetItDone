import "./index.css"

const Task = ({task}) => {
    return (
        <>
            <div className='card'>
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            </div>
        </>
    )
}

export default Task;