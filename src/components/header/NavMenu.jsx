import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import Logo from "./logo";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";

const NavMenu = () => {
  const {user, logOut} = UseAuth()
  const handleLogOut = () => {
    logOut()
    .then(res => {
      toast.success("Log Out Successfuly")
    })
    .catch(err => {
      console.log(err);
    })
  }

  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600 fontt-bold" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-jobs"
        className={({ isActive }) =>
          isActive ? "text-blue-600 fontt-bold" : "text-white"
        }
      >
        All Jobs
      </NavLink>

      <NavLink
        to="/applied-jobs"
        className={({ isActive }) =>
          isActive ? "text-blue-600 fontt-bold" : ""
        }
      >
        Applied Jobs
      </NavLink>
      <NavLink
        to="/add-job"
        className={({ isActive }) =>
          isActive ? "text-blue-600 fontt-bold" : ""
        }
      >
        Add Job
      </NavLink>
      <NavLink
        to="/my-jobs"
        className={({ isActive }) =>
          isActive ? "text-blue-600 fontt-bold" : ""
        }
      >
        My Jobs
      </NavLink>
    </>
  );
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      isBordered
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden text-lg sm:flex gap-4" justify="center">
        {navlinks}
      </NavbarContent>
      {user?.email ? (
        <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={user?.photoURL}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user?.displayName}</p>
          </DropdownItem>
          
          <DropdownItem onClick={handleLogOut} key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="">
            <Link to="/login">
              <Button color="primary" variant="ghost" className="font-bold">
                Login
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu className="bg-transparent text-center text-white text-lg space-y-5">
        {navlinks}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavMenu;
