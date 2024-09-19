import Input from './Input';
import { useRef } from 'react';
import Modal from './Modal';
export default function NewProject({ handleClose, setProjectDetails }) {
  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // VALIDATION;
    if (enteredTitle.trim() == '' || enteredDescription.trim() == '' || enteredDueDate.trim() == '') {
      modal.current.open();
      return console.log('error');
    }
    // setProjectDetails((prevState) => {
    //   return {
    //     ...prevState,
    //     projects: [
    //       ...prevState.projects,
    //       {
    //         title: enteredTitle,
    //         description: enteredDescription,
    //         dueDate: enteredDueDate,
    //       },
    //     ],
    //   };
    // }); my way !!
    setProjectDetails({ title: enteredTitle, description: enteredDescription, dueDate: enteredDueDate });
    handleClose();
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='Okay'>
        <h2>Invalid input</h2>
        <p>Oops... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button className='text-stone-800 hover:text-stone-950' onClick={handleClose}>
              Cancel
            </button>
          </li>
          <li>
            <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950' onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label='Title' isTextArea={false} type='text' />
          <Input ref={descriptionRef} label='Description' isTextArea={true} />
          <Input ref={dueDateRef} label='DUE DATE' isTextArea={false} type='date' />
        </div>
      </div>
    </>
  );
}
