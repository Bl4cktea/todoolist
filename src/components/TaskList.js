import Taskitem from './Taskitem';
import classes from './TaskList.module.css';

const TaskList = ({task,deleteTask,enterEditMode}) => {
return (
    <ul className={classes.task}>
  {task.sort((z,y) => y.id - z.id).map(task => (
    <Taskitem 
      key={task.id}
      task={task}
      deleteTask = {deleteTask}
      enterEditMode = {enterEditMode}
    />
  ))
  }
</ul>

   )
}

export default TaskList;