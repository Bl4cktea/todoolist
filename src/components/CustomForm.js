import { useState } from 'react';
import classes from './CustomForm.module.css';
import { PlusIcon } from '@heroicons/react/24/outline';

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form
      className={classes.todo}
      onSubmit={handleFormSubmit}
      >
      <div className={classes.wrapper}>
        <input
          type="text"
          id="task"
          className={classes.input}
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="type here"
        />
        <label
          htmlFor="task"
          className={classes.label}
        >type here</label>
      </div>
      <button
        className={classes.btn}
        aria-label="Add Task"
        type="submit"
        >
        <PlusIcon />
      </button>
    </form>
  )
}
export default CustomForm;