import "./App.css";
import { useEffect, useState } from "react";
import ProjectTable from "./Components/ProjectTable";
import AddProjectForm from "./Components/AddProjectForm";
import Navbar from "./Components/Navbar";

function App() {
  const URL = "https://648b4e4317f1536d65eac305.mockapi.io/api/homeprojects";

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProjects(data);
    //.then((data) => data.json())
    //.then((data) => setProjects(data));
  };

  useEffect(() => {
    getProjects();
  }, []);

  const deleteProject = async (idToDelete) => {
    await fetch(`${URL}/${idToDelete}`, {
      method: "DELETE",
    });
    setProjects(projects.filter((project) => project.id !== idToDelete));
    //.then(() => getProjects());
  };

  const postNewProject = async (newProject) => {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });
    const newProjectWithId = await response.json();
    setProjects([...projects, newProjectWithId]);
    // .then(() => getProjects());
  };

  const updateProject = async (updatedProject) => {
    const response = await fetch(`${URL}/${updatedProject.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    });
    const updatedProjectResponse = await response.json();
    const newProjectArray = projects.map((project) => {
      if (project.id === updatedProjectResponse.id) {
        return updatedProjectResponse;
      } else {
        return project;
      }
    });
    setProjects(newProjectArray);

    //.then(() => getProjects());
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
      <footer className="pageFooter p-2 bg-success text-center text-white">
        Created by RKVanHorn 2023
      </footer>
    </div>
  );
}

export default App;
