import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelcted from './components/NoProjectSelected.jsx';
import ProjectSideBar from './components/ProjectSideBar';

function App() {
  const [project, setProject] = useState({ projectSelcted: undefined, projects: [] });
  function handleProjectClick() {
    setProject((prevState) => {
      return { ...prevState, projectSelcted: null };
    });
  }
  function handleProjectClose() {
    setProject((prevState) => {
      return { ...prevState, projectSelcted: undefined };
    });
  }
  let content;
  if (project.projectSelcted === null) {
    content = <NewProject handleClose={handleProjectClose} />;
  } else content = <NoProjectSelcted handleSelect={handleProjectClick} />;
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSideBar handleSelect={handleProjectClick} />
      {content}
    </main>
  );
}

export default App;
