import { Navbar, Dropdown, Avatar, Button, Badge } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Logo from "../assets/lens-poetry.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <Navbar rounded={true}>
      <Link to="/">
        <Navbar.Brand>
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        </Navbar.Brand>
      </Link>
      <div className="flex md:order-2">
        {user?.uid ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                // img={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
                img={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                }
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to="my-review">My Review</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="add-service">Add a Service</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/login">
            <Button
              gradientDuoTone="greenToBlue"
              className="uppercase font-semibold "
            >
              Login
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/home">
          <Navbar.Link className="font-semibold uppercase">Home</Navbar.Link>
        </Link>

        <Link to="/services">
          <Navbar.Link className="font-semibold uppercase">
            Services
          </Navbar.Link>
        </Link>
        <Link to="/blogs">
          <Navbar.Link className="font-semibold uppercase">Blogs</Navbar.Link>
        </Link>
        {/* Navbar conditional rendering */}
        {user?.uid && (
          <>
            <Link to="my-review">
              <Navbar.Link className="font-semibold uppercase">
                My Review
              </Navbar.Link>
            </Link>
            <Link to="add-service">
              <Navbar.Link className="font-semibold uppercase">
                Add a Service
              </Navbar.Link>
            </Link>
            <Badge onClick={logOut} className="cursor-pointer">Sign out</Badge>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
