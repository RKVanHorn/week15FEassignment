import "./App.css";
import { useEffect, useState } from "react";
import ProjectTable from "./Components/ProjectTable";
import AddProjectForm from "./Components/AddProjectForm";
import Navbar from "./Components/Navbar";

function App() {
  const URL = "https://648b4e4317f1536d65eac305.mockapi.io/api/homeprojects";

  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    fetch(URL)
      .then((data) => data.json())
      .then((data) => setProjects(data));
  };

  useEffect(() => {
    getProjects();
  }, []);

  const deleteProject = (id) => {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then(() => getProjects());
  };

  const postNewProject = (newProject) => {
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    }).then(() => getProjects());
  };

  const updateProject = (updatedProject) => {
    fetch(`${URL}/${updatedProject.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    }).then(() => getProjects());
  };

  return (
    <div>
      <Navbar />
      <AddProjectForm clickAdd={postNewProject} />
      <ProjectTable
        projects={projects}
        clickDelete={deleteProject}
        clickUpdate={updateProject}
      />
    </div>
  );
}

export default App;
