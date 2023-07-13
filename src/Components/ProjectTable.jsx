import { useState } from "react";
import Project from "./Project";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export default function ProjectTable(props) {
  // const [projectsData, setProjectsData] = useState(props.projects);
  // const [order, setOrder] = useState("ASC");
  // console.log(projectsData);

  // const sorting = (col) => {
  //   if (order === "ASC") {
  //     const sortedData = [...projectsData].sort(
  //       (a, b) => a[col].parseInt() > b[col].parseInt()
  //     );
  //     setProjectsData(sortedData);
  //     setOrder("DSC");
  //   }
  //   if (order === "DSC") {
  //     const sortedData = [...projectsData].sort(
  //       (a, b) => a[col].parseInt() < b[col].parseInt()
  //     );
  //     setProjectsData(sortedData);
  //     setOrder("ASC");
  //   }
  // };

  return (
    <Card className="m-3 bg-success">
      <Card.Header className="text-center text-white fs-4 fw-bold">
        Current Projects
      </Card.Header>
      <Card.Body className="table-responsive">
        <Table variant="success" striped bordered hover>
          <thead>
            <tr>
              <th>Done</th>
              <th>Project Name</th>
              <th /*onClick={() => sorting("priority")}*/>Priority</th>
              <th /*onClick={() => sorting("cost")}*/>Cost</th>
              <th /*onClick={() => sorting("time")}*/>Time</th>
              <th>Notes</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.projects.map((project, index) => (
              <Project
                // key={project.id} Why doesn't this work????
                key={index}
                project={project}
                clickDelete={props.clickDelete}
                clickUpdate={props.clickUpdate}
              />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
