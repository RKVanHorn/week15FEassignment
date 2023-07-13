import Navbar from "react-bootstrap/Navbar";

export default function Nav() {
  return (
    <Navbar bg="success" className="navbar py-3 px-5" data-bs-theme="dark">
      <Navbar.Brand>
        <img
          className="navbar-gif"
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGRldmx4d2dmeGtkbTZid2t2NjY0a3J1OTB3bzZ3YWJ3enNoa2JsaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/h85zkjphxNfUG9NLp6/giphy.gif"
        />
      </Navbar.Brand>
      <h1 className="text-white fw-bold">Home Project Planner</h1>
    </Navbar>
  );
}
