import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const pages = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: "Features",
      path: "/features",
    },
    {
      page: "Price",
      path: "/price",
    },
    {
      page: "Dashboard",
      path: "/dashboard",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-white grid grid-cols-2 sm:grid-cols-4 items-center px-4 md:px-10 lg:px-20 py-2 md:py-4">
      <div className="w-32 py-3">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32" />
        </Link>
      </div>

      {/* large device nav links */}

      <div className="hidden col-span-2 sm:flex justify-center">
        <ul className="flex gap-2">
          {pages.map(({ page, path }) => (
            <li key={page}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary shadow-xl shadow-primary rounded-md px-3 py-1.5"
                    : "hover:text-white hover:bg-primary rounded-md hover:shadow-xl hover:shadow-primary duration-300 px-3 py-1.5"
                }
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end items-center">
        {/* small and medium device nav links */}

        <div className="sm:hidden">
          <button
            onClick={toggleDrawer}
            className="btn btn-sm bg-transparent hover:bg-transparent text-2xl shadow-none border-none drawer-button pr-0"
          >
            <CgMenuRight />
          </button>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="top"
            duration={400}
            size={280}
          >
            <div>
              <ul className="flex flex-col justify-center items-center gap-8 bg-white py-10">
                {pages.map(({ page, path }) => (
                  <li key={page}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                      }
                    >
                      {page}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
