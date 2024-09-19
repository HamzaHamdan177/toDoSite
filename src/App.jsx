import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelcted from './components/NoProjectSelected.jsx';
import ProjectSideBar from './components/ProjectSideBar';
import Modal from './components/Modal.jsx';
import SelctedProject from './components/SelectedProject.jsx';
let selectedProjectId;
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
  function handleSelectedProject(id) {
    setProject((prevState) => {
      return { ...prevState, projectSelcted: true };
    });
    selectedProjectId = id;
  }
  function handleDeleteProject(id) {
    setProject((prevState) => {
      return {
        ...prevState,
        projectSelcted: undefined,
        projects: prevState.projects.filter((item) => item.id !== id),
      };
    });
    //  setProject((prevState) => prevState.projects.filter((item) => item.id !== id));
  }

  let content;
  if (project.projectSelcted === null) {
    content = <NewProject handleClose={handleProjectClose} setProjectDetails={handleAddProject} />;
  } else if (project.projectSelcted === true)
    content = (
      <SelctedProject
        projects={project.projects}
        selectProjectId={selectedProjectId}
        setProject={setProject}
        handleDelete={handleDeleteProject}
      />
    );
  else content = <NoProjectSelcted handleSelect={handleProjectClick} />;
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSideBar
        handleSelect={handleProjectClick}
        projects={project.projects}
        selectProject={handleSelectedProject}
        selectProjectId={selectedProjectId}
      />
      {content}
      <Modal />
    </main>
  );
}

export default App;
