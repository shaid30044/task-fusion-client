import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.png";
import Button from "../Components/Button";
import { useRef } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const formRef = useRef();

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
      page: "Prices",
      path: "/prices",
    },
    {
      page: "Task Dashboard",
      path: "/taskDashboard",
    },
  ];

  const handleContact = (e) => {
    e.preventDefault();

    toast.success("Thank you for subscribing!");

    formRef.current.reset();
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-gradient-to-t from-primary/60 px-4 md:px-10 lg:px-20 py-20">
        <div>
          <img src={logo} alt="" className="sm:w-60" />
        </div>

        <div>
          {pages.map((page, idx) => (
            <div key={idx} className="py-1">
              <span>
                <Link
                  to={page.path}
                  className="hover:text-primary duration-300"
                >
                  {page.page}
                </Link>
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold text-primary pb-4">
            Stay up to date on the latest from Task Fusion
          </p>

          <form
            ref={formRef}
            onSubmit={handleContact}
            className="flex flex-col w-full"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-past/70 outline-none w-full px-4 py-2 mt-4 mb-3"
            />

            <div>
              <Button value={"Subscribe"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
