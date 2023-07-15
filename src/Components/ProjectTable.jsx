import { useState } from "react";
import Project from "./Project";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export default function ProjectTable(props) {
  /**Sets up the project table and then takes the projects from the App component where they are held in state and
   * maps over them, creating an instance of Project for each project which populates the table
   */
  return (
    <Card className="m-3 bg-success">
      <Card.Header className="text-center text-white fs-4 fw-bold">
        Current Projects
      </Card.Header>
      <Card.Body className="table-responsive">
        <Table variant="success" striped hover>
          <thead>
            <tr>
              <th>Project Name</th>
              <th
                className="priorityColumn"
                onClick={props.sortPriority}
                title="Click to sort by priority"
              >
                Priority
              </th>
              <th>Cost</th>
              <th>Time</th>
              <th>Notes</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.projects.map((project) => (
              <Project
                key={project.id}
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
