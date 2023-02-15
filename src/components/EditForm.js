import { useState } from 'react';
import classes from './CustomForm.module.css';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const EditForm = ({ editTask, updateTask}) => {
  const [updateTaskname, setupdateTaskname] = useState(editTask.name);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editTask,name : updateTaskname});
  }

  return (
    <div role={'dialog'} aria-label="editTask">
    <form
      className={classes.todo}
      onSubmit={handleFormSubmit}
      >
      <div className={classes.wrapper}>
        <input
          type="text"
          id="editTask"
          className={classes.input}
          value={updateTaskname}
          onInput={(e) => setupdateTaskname(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Update Task"
        />
        <label
          htmlFor="editTask"
          className={classes.label}
        >Update</label>
      </div>
      <button
        className={classes.btn}
        aria-label={`Confirm edited ${updateTaskname}`}
        type="submit"
        >
        <CheckCircleIcon strokeWidth={2} width={24} height={24}/>
      </button>
    </form>
    </div>
  )
}
export default EditForm;