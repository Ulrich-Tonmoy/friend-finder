import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
function Header() {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user-info'));
    console.warn(user);
    function logout() {
        localStorage.clear();
        history.push('/register');
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Business Portal</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to="/1">Product List</Link>
                                    <Link to="/add">Add Product</Link>
                                    <Link to="/update">Update Product</Link>
                                    <Link to="/search">Search Product</Link>
                                </>
                                :
                                <>
                                    <Link to="/login">Login </Link>
                                    <Link to="/register">Register </Link>

                                </>
                        }
                    </Nav>

                    {localStorage.getItem('user-info') ?


                        <Nav>
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        : null
                    }
                </Container>
            </Navbar>
        </div>
    )
}

export default Header