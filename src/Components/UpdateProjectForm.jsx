import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function UpdateProjectForm(props) {
  /**Setting up state for the modal as well as to hold the updatedProject. I set the original project in state so that the
   * form could be populated with the original data for each project.
   */
  const [show, setShow] = useState(false);
  const [updatedProject, setUpdatedProject] = useState({ ...props.project });

  /**Functions to handle the modal */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**Catching the changes to the project so that the updatedProject object can be passed to the updateProject method.
   * If the form field is a checkbox then the change that is captured is whether it is checked or not, otherwise the value of the field is used
   * to set the updatedProject
   */
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setUpdatedProject((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  /**Calling the updateProject method using the updatedProject object as the argument and then close the modal */
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(updatedProject);
    props.clickUpdate(updatedProject);
    handleClose();
  }

  return (
    <>
      <Button variant="info" size="sm" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-3 fw-bold">
            Updates to:<br></br> {props.project.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group className="mb-3">
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  placeholder="Enter updated project name"
                  type="text"
                  id="nameUpdate"
                  name="name"
                  onChange={handleChange}
                  value={updatedProject.name}
                  required
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="col-4 mb-3">
                <Form.Label>Priority Level</Form.Label>
                <Form.Select
                  id="priorityUpdate"
                  name="priority"
                  onChange={handleChange}
                  value={updatedProject.priority}
                  required
                >
                  <option value="">--Priority--</option>
                  <option value="1">High</option>
                  <option value="2">Medium</option>
                  <option value="3">Low</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-4 mb-3">
                <Form.Label>Updated Cost</Form.Label>
                <Form.Control
                  placeholder="Update cost"
                  type="number"
                  id="costUpdate"
                  name="cost"
                  onChange={handleChange}
                  value={updatedProject.cost}
                />
              </Form.Group>
              <Form.Group className="col-4 mb-3">
                <Form.Label>Updated Time</Form.Label>
                <Form.Control
                  placeholder="Update time"
                  type="text"
                  id="timeUpdate"
                  name="time"
                  onChange={handleChange}
                  value={updatedProject.time}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3">
                <Form.Label>Updated Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter updated notes"
                  id="notesUpdate"
                  name="notes"
                  onChange={handleChange}
                  value={updatedProject.notes}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3">
                <Form.Label>Check to mark this project completed</Form.Label>
                <Form.Check
                  type="checkbox"
                  id="checked"
                  name="checked"
                  onChange={handleChange}
                  checked={updatedProject.checked}
                />
              </Form.Group>
            </div>
            <Button variant="primary" type="Submit">
              Update Project
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateProjectForm;
