import UpdateProjectForm from "./UpdateProjectForm";
import Button from "react-bootstrap/Button";
import { useState } from "react";
export default function Project(props) {
  const [checked, setChecked] = useState(props.project.checked);
  //console.log(checked);
  return (
    <tr className={checked ? "checked" : " "}>
      <td>
        <input type="checkbox" onClick={() => setChecked(!checked)} />
      </td>
      <td>{props.project.name}</td>
      {props.project.priority === "1" && <td>High</td>}
      {props.project.priority === "2" && <td>Medium</td>}
      {props.project.priority === "3" && <td>Low</td>}
      <td>${props.project.cost}</td>
      <td>
        {props.project.time} {props.project.time === "1" ? "hour" : "hours"}
      </td>
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
