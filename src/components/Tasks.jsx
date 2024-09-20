import { useState } from 'react';
import { useRef } from 'react';
import Modal from './Modal';
export default function Tasks() {
  const [task, setTask] = useState([]);
  const taskName = useRef();
  const dialog = useRef();

  function handleAdd() {
    const text = taskName.current.value;
    if (text.trim() !== '') {
      setTask((prevState) => {
        return [{ toDo: text, id: Math.random() }, ...prevState];
      });
      taskName.current.value = '';
    } else {
      dialog.current.open();
    }
  }

  function handleClear(id) {
    setTask((prevState) => {
      return prevState.filter((toDo) => toDo.id !== id);
    });
  }

  return (
    <>
      <Modal ref={dialog} buttonCaption='Understood'>
        Oops looks like you forgot to type!
      </Modal>
      <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>Title</h2>
        <div className='flex item-center gap-4'>
          <input type='text' ref={taskName} className='w-64 px-2 py-1 rounded-sm bg-stone-200' />
          <button onClick={handleAdd} className='text-stone-700 hover:text-red-500'>
            Add task
          </button>
        </div>
        {task.length == 0 ? (
          <p className='text-stone-800 my-4'>This project does not have any tasks yet.</p>
        ) : (
          <ul className='p-4 mt-8 rounded-md bg-stone-100'>
            {task.map((task) => (
              <li key={task.id} className='flex justify-between my-4'>
                <span>{task.toDo}</span>
                <button onClick={() => handleClear(task.id)} className='text-stone-700 hover:text-red-500'>
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
