import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider";

const SignIn = () => {
  const axiosPublic = useAxiosPublic();
  const { signIn, googleSignIn } = useContext(AuthContext) || {};
  const navigate = useNavigate();

  const [signInError, setSignInError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(() => {
        toast.error("Sign In successfully.");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        if (error.message === "Invalid email") {
          toast.error("Invalid email. Please check your email address");
        } else if (error.message === "Invalid password") {
          toast.error("Invalid password. Please check your password");
        } else {
          toast.error("Sign In failed. Please check your credentials.");
        }
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          displayName: res.user?.displayName,
          email: res.user?.email,
          photoURL: res.user?.photoURL,
        };
        toast
          .promise(
            axiosPublic.post("/users", userInfo, { withCredentials: true }),
            {
              loading: "Signing Ip...",
              success: <b>Sign In successful!</b>,
              error: <b>Sign In failed!</b>,
            },
            {
              duration: 4000,
            }
          )
          .then(() => {
            navigate("/");
          });
      })
      .catch((error) => {
        setSignInError(error.message);
      });
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>

      <Helmet>
        <title>Task Fusion | Sign In</title>
      </Helmet>

      <div className="flex justify-center items-center h-screen px-4 sm:px-20 lg:px-40">
        <div className="w-full md:w-[600px]">
          <ul className="flex gap-4 text-xl font-semibold pb-20">
            <li>
              <NavLink
                to="/signIn"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary shadow-xl shadow-primary rounded-full px-3 py-1.5"
                    : "hover:text-white hover:bg-primary rounded-full hover:shadow-xl hover:shadow-primary duration-300 px-3 py-1.5"
                }
              >
                Sign In
              </NavLink>
            </li>

            <p className="text-2xl font-medium">/</p>

            <li>
              <NavLink
                to="/signUp"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary shadow-xl shadow-primary rounded-full px-3 py-1.5"
                    : "hover:text-white hover:bg-primary rounded-full hover:shadow-xl hover:shadow-primary duration-300 px-3 py-1.5"
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>

          <form onSubmit={handleLogin} className="flex flex-col gap-y-4 w-full">
            <p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-past/70 outline-none w-full px-4 py-2"
              />
            </p>

            <p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-past/70 outline-none w-full px-4 py-2"
              />
            </p>

            {/* sign up error */}

            <div className="text-center">
              {signInError && (
                <p className="text-sm text-red-600">{signInError}</p>
              )}
            </div>

            <div>
              <Button value={"Sign In"} />
            </div>
          </form>

          <div className="divider my-6">Or</div>

          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-sm font-medium shadow-none bg-transparent hover:bg-transparent border-2 border-past hover:border-primary rounded-full duration-300 h-10 w-full"
            >
              <FcGoogle className="text-xl" />
              <span>Sign In With Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
