import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Logo from "./logo";
import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {
    const navlinks = <>
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
    
      isBordered
      maxWidth='2xl'
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

      <NavbarContent  className="hidden text-lg sm:flex gap-4" justify="center">
        {navlinks}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="">
         <Link to='/login'>
         <Button color="primary" variant="ghost" >Login</Button>
         </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent text-center text-white text-lg space-y-5">
            
            {navlinks}
        
      </NavbarMenu>
    </Navbar>
  );
};

export default NavMenu;
