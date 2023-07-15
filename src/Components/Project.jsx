import UpdateProjectForm from "./UpdateProjectForm";
import Button from "react-bootstrap/Button";

export default function Project(props) {
  return (
    /*ProjectTable calls this component and maps over the projects creating a table row for each project */
    <tr className={props.project.checked ? "checked" : " "}>
      <td>{props.project.name}</td>
      {props.project.priority === "1" && <td>High</td>}
      {props.project.priority === "2" && <td>Medium</td>}
      {props.project.priority === "3" && <td>Low</td>}
      <td>${props.project.cost}</td>
      <td>{props.project.time}</td>
      <td>{props.project.notes}</td>
      <td>
        <UpdateProjectForm
          project={props.project}
          clickUpdate={props.clickUpdate}
        />
      </td>
      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => props.clickDelete(props.project.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
