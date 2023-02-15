import './App.css';
import CustomForm from './components/CustomForm';
import { useState } from 'react';
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';

function App() {
  const [task,settask] = useState([]);
  const [editTask,seteditTask] = useState(null);

  const addTask = (task) => {
    settask(prevState => [...prevState,task])
  }

  const deleteTask = ((id) => {
    settask(prevState => prevState.filter(t => t.id !== id )); 
  })

  const enterEditMode = (task) => {
    seteditTask(task);
    setediting(true);
  }

  const [editing,setediting] = useState(false);

  const updateTask = (task) => {
    settask(prevState => prevState.map(t => (t.id === task.id
      ? {...t, name: task.name}
      : t
      )))
      closeEditMode();
  }

  const closeEditMode = () => {
    setediting(false);
  }

  return (
    <div className='mainContainer'>
      <header>
        <h2>My todo-list</h2>
        </header>
        {
          editing && (
            <EditForm 
            editTask={editTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
            />
          )
        }
     
      <CustomForm addTask = {addTask}/>
      {task && <TaskList 
      task={task}
      deleteTask={deleteTask}
      enterEditMode ={enterEditMode}
      />}
    </div>
  )
}

export default App;


