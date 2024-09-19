import Tasks from './Tasks';
export default function SelctedProject({ projects, selectProjectId, handleDelete }) {
  function formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return formattedDate;
  }

  return (
    <div className='w-[35rem] mt-16'>
      {projects.map((project) => {
        if (selectProjectId === project.id) {
          return (
            <header className='pb-4 mb-4 border-b-2 border-stone-300'>
              <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h1>
                <button className='text-stone-600 hover:text-stone-950' onClick={() => handleDelete(project.id)}>
                  Delete
                </button>
              </div>
              <p className='mb-4 text-stone-400'>{formatDate(project.dueDate)}</p>
              <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
            </header>
          );
        }
      })}
      TASKS
      <Tasks />
    </div>
  );
}
