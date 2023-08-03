import "./App.css";
import { useEffect, useState } from "react";
import ProjectTable from "./Components/ProjectTable";
import AddProjectForm from "./Components/AddProjectForm";
import Navbar from "./Components/Navbar";

function App() {
  const URL = "https://648b4e4317f1536d65eac305.mockapi.io/api/homeprojects";

  const [projects, setProjects] = useState([]);

  /**In the future I want to add the ability to sort the table by priority or cost.  */
  // const [projectsData, setProjectsData] = useState({ ...props.projects });
  const [order, setOrder] = useState("ASC");
  // console.log(projectsData);

  const sortPriority = () => {
    if (order === "ASC") {
      const sortedData = [...projects].sort(
        (a, b) => Number(a.priority) - Number(b.priority)
      );

      setProjects(sortedData);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sortedData = [...projects].sort(
        (a, b) => Number(b.priority) - Number(a.priority)
      );
      setProjects(sortedData);
      setOrder("ASC");
    }
  };

  //READ - get the projects from the API and set them as the state for the project
  const getProjects = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProjects(data);
    //.then((data) => data.json())
    //.then((data) => setProjects(data));
  };

  //use the useEffect hook so that when the App component renders for the first time, getProjects will be called to populate the project table
  useEffect(() => {
    getProjects();
  }, []);

  //DELETE a project - deletes a project by passing in the id of the project to delete and sending the delete method to our API via FETCH
  const deleteProject = async (idToDelete) => {
    await fetch(`${URL}/${idToDelete}`, {
      method: "DELETE",
    });
    setProjects(projects.filter((project) => project.id !== idToDelete));
    //.then(() => getProjects());
  };

  //CREATE a new project by gathering new project data and then passing that to the API using the POST method
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

  /*UPDATE a project by gathering the updated project data as a new object and then sending it to the correct API endpoint using the project ID,
    and using PUT to replace the old data. Map over the projects array until I find the project that has the same id as the one that was updated and 
    then replace that project with the new one received in response from the API */
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
        sortPriority={sortPriority}
      />
      <footer className="pageFooter p-2 bg-success text-center text-white">
        Created by RKVanHorn 2023
      </footer>
    </div>
  );
}

export default App;
