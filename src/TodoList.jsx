import {useState} from 'react';

function TodoList() {
   const[tasks, setTasks] = useState(['Eat', 'shower', 'go to school']);
   const[newTask, setNewTask] = useState('')

   function handleInputChange(e) {
   setNewTask(e.target.value)
   }

   function importTask() {
   if(newTask.trim() !== "") {
    setTasks(t => [...t, newTask])
        setNewTask(' ')
   }
   }

   function removeTask(index) {
   const updatedTasks = tasks.filter((_,id) => id !== index)
   setTasks(updatedTasks)
   }

   function moveTaskUp(index) {
   if(index > 0) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
    setTasks(updatedTasks)
   }
   }

   function moveTaskDown(index) {
    if(index < tasks.length - 1) {
     const updatedTasks = [...tasks];
     [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
     setTasks(updatedTasks)
    }
    }

    return (
        <>
        <div className='to-do-list'>
            <h1>To-do-list</h1>
            <div>
                <input 
                type='text'
                placeholder='enter a task'
                value={newTask}
                onChange={handleInputChange}
                />
                <button className='add-button' onClick={importTask} >
                    Add new task
                </button>
            </div>
            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => removeTask(index)}>delete</button>
                    <button className='up-button' onClick={() => moveTaskUp(index)}>up</button>
                    <button className='down-button' onClick={() => moveTaskDown(index)}>down</button>
                </li>
                )}
            </ol>
        </div>
        </>
    )
}

export default TodoList