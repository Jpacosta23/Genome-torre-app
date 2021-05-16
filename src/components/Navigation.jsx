import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://www.igneous.cl/assets/images/empresas/Torre-DarkIconLime.png"
              width="50px"
              alt=""
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Torre
            </Nav.Link>
            <Nav.Link as={Link} to={`/bios`}>
              Genome
            </Nav.Link>
            <Nav.Link as={Link} to="/jobs">
              Jobs
            </Nav.Link>
          </Nav>
          <Form inline onSubmit="">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-secondary" type="submit">
              Search
            </Button>
          </Form>
        </Navbar>
      </>
    </>
  );
};

export default Navigation;
