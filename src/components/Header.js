import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
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
          <img
            src={Logo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
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
                img={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
                // img={user?.photoURL ? user?.photoURL : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
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
            <Dropdown.Item>Add a review</Dropdown.Item>
            <Dropdown.Item>My Review</Dropdown.Item>
            <Dropdown.Item>Add a Service</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/login'>
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

        <Link to="/about">
          <Navbar.Link className="font-semibold uppercase">About</Navbar.Link>
        </Link>

        <Link to="/services">
          <Navbar.Link className="font-semibold uppercase">
            Services
          </Navbar.Link>
        </Link>
        <Link to="/blogs">
          <Navbar.Link className="font-semibold uppercase">Blogs</Navbar.Link>
        </Link>
        <Link to="/contact">
          <Navbar.Link className="font-semibold uppercase">Contact</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
