import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelcted from './components/NoProjectSelected.jsx';
import ProjectSideBar from './components/ProjectSideBar';
import Modal from './components/Modal.jsx';

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

  function handleAddProject(projectData) {
    setProject((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return { ...prevState, projects: [...prevState.projects, newProject] };
    });
  }

  let content;
  if (project.projectSelcted === null) {
    content = <NewProject handleClose={handleProjectClose} setProjectDetails={handleAddProject} />;
  } else content = <NoProjectSelcted handleSelect={handleProjectClick} />;

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSideBar handleSelect={handleProjectClick} projects={project.projects} />
      {content}
      <Modal />
    </main>
  );
}

export default App;
