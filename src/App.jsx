import NewProject from './components/NewProject.jsx';
import NoProjectSelcted from './components/NoProjectSelected.jsx';
import ProjectSideBar from './components/ProjectSideBar';
function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSideBar handleClick />
      <NoProjectSelcted />
    </main>
  );
}

export default App;
