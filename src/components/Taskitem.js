import classes from './Taskitem.module.css';
import { ArrowPathIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({task,deleteTask,enterEditMode}) => {
 
  return (
    <li className={classes.task}>
      <div className={classes.taskGroup}>
        <label
          htmlFor={task.id}
          className={classes.label}>
            {task.name}
            </label>
      </div>
      <div className={classes.taskGroup}>
        <button
          aria-label={`Update ${task.name} Task`}
          onClick ={() => enterEditMode(task)}
          >
          <ArrowPathIcon  width={23} height={23} />
        </button>
        <button
          className={classes.delete}
          aria-label={`Delete ${task.name} Task`}
          onClick = {() => deleteTask(task.id)}
          >
          <TrashIcon width={23} height={23} />
        </button>
      </div>
    </li>
  )
}
export default TaskItem;