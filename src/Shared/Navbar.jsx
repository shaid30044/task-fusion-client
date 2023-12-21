import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { FaCircleUser } from "react-icons/fa6";
import { useContext, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AuthContext } from "../Providers/AuthProvider";
import Button from "../Components/Button";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Banner from "./Banner";
import Prices from "../pages/Prices";
import Categories from "../pages/Categories";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleProfileDrawer = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          toast.success("Sign Out successful!");
        });
      }
    });
  };

  return (
    <div>
      <div className="fixed grid grid-cols-2 sm:grid-cols-4 items-center bg-white px-4 md:px-10 lg:px-20 py-4 w-full">
        <div className="w-32">
          <Link to="/">
            <img src={logo} alt="logo" className="w-32" />
          </Link>
        </div>

        {/* large device nav links */}

        <div className="hidden col-span-2 sm:flex justify-center">
          <ul className="flex gap-6">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-black hover:text-white hover:bg-primary hover:shadow-xl hover:shadow-primary rounded-full duration-300 px-3 py-1"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("categories")}
                className="text-black hover:text-white hover:bg-primary hover:shadow-xl hover:shadow-primary rounded-full duration-300 px-3 py-1"
              >
                Categories
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("prices")}
                className="text-black hover:text-white hover:bg-primary hover:shadow-xl hover:shadow-primary rounded-full duration-300 px-3 py-1"
              >
                Prices
              </button>
            </li>
            <li>
              <Link to="/dashboard">
                <button className="text-black hover:text-white hover:bg-primary hover:shadow-xl hover:shadow-primary rounded-full duration-300 px-3 py-1">
                  Dashboard
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-end items-center gap-4">
          {/* small and medium device nav links */}

          <div>
            <div className="sm:hidden">
              <button
                onClick={toggleDrawer}
                className="btn btn-sm bg-transparent hover:bg-transparent text-2xl shadow-none border-none drawer-button px-0"
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
                    <li>
                      <button onClick={() => scrollToSection("home")}>
                        Home
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection("categories")}>
                        Categories
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection("prices")}>
                        Prices
                      </button>
                    </li>
                  </ul>
                </div>
              </Drawer>
            </div>
          </div>

          {user ? (
            <div className="flex justify-end">
              <div onClick={toggleProfileDrawer}>
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-10 h-10 rounded-full cursor-pointer -mt-1"
                  />
                ) : (
                  <div className="text-4xl text-black/50 cursor-pointer">
                    <FaCircleUser />
                  </div>
                )}
              </div>

              <Drawer
                open={isProfileOpen}
                onClose={toggleProfileDrawer}
                direction="right"
                duration={400}
                size={280}
              >
                <div className="text-center px-4 py-6">
                  <p className="font-medium">{user?.displayName}</p>
                  <p className="font-medium pt-2 pb-6">{user?.email}</p>

                  <div onClick={handleLogout}>
                    <Button value={"Sign Out"} />
                  </div>
                </div>
              </Drawer>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div id="home">
        <Banner />
      </div>
      <div id="categories">
        <Categories />
      </div>
      <div id="prices">
        <Prices />
      </div>
    </div>
  );
};

export default Navbar;
