import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

export default function AddProjectForm(props) {
  const [show, setShow] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    priority: "",
    cost: "",
    time: "",
    notes: "",
    checked: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewProject((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  // console.log(newProject);

  // function handleKeyDown(e) {
  //   if (e.key === "Enter") {
  //     handleSubmit(e);
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault;
    if (newProject.name === "" || newProject.priority === "") {
      setShow(true);
      return;
    }
    // console.log(newProject);
    props.clickAdd(newProject);
    setNewProject({
      name: "",
      priority: "",
      cost: "",
      time: "",
      notes: "",
      checked: false,
    });
  }

  return (
    <Card className="my-3 mx-5 bg-primary text-white">
      <Card.Header className="text-center fs-4 fw-bold">
        Add a new project
      </Card.Header>
      <Card.Body>
        <Alert
          show={show}
          variant="warning"
          onClose={() => setShow(false)}
          dismissible
        >
          You must enter a project name AND assign a priority level to continue
        </Alert>
        <Form className="p-3">
          <div className="row">
            <Form.Group className="col-8 mb-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                placeholder="Enter new project name"
                type="text"
                id="nameInput"
                name="name"
                onChange={handleChange}
                value={newProject.name}
                required
              />
            </Form.Group>
            <Form.Group className="col-4 mb-3">
              <Form.Label>Choose Priority Level</Form.Label>
              <Form.Select
                id="priorityInput"
                name="priority"
                onChange={handleChange}
                value={newProject.priority}
                required
              >
                <option value="">--Assign priority--</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-6 mb-3">
              <Form.Label>Cost</Form.Label>
              <Form.Control
                placeholder="Enter cost estimate"
                type="number"
                id="costInput"
                name="cost"
                onChange={handleChange}
                value={newProject.cost}
              />
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                placeholder="Enter estimated time"
                type="text"
                id="timeInput"
                name="time"
                onChange={handleChange}
                value={newProject.time}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-12 mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter any notes"
                id="notesInput"
                name="notes"
                onChange={handleChange}
                value={newProject.notes}
              />
            </Form.Group>
          </div>
          <Button variant="success" onClick={handleSubmit}>
            Add Project
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
