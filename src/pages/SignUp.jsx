import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { signUp, updateUserProfile, googleSignIn } =
    useContext(AuthContext) || {};
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [signUpError, setSignUpError] = useState("");

  const onSubmit = (data) => {
    signUp(data.email, data.password).then(() => {
      updateUserProfile(data.name)
        .then(() => {
          const userInfo = {
            displayName: data.name,
            email: data.email,
          };

          toast
            .promise(
              axiosPublic.post("/users", userInfo, { withCredentials: true }),
              {
                loading: "Signing Up...",
                success: <b>Sign Up successful!</b>,
                error: <b>Sign Up failed!</b>,
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
          setSignUpError(error.message);
        });
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
              loading: "Signing Up...",
              success: <b>Sign Up successful!</b>,
              error: <b>Sign Up failed!</b>,
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
        setSignUpError(error.message);
      });
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>

      <Helmet>
        <title>Task Fusion | Sign Up</title>
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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 w-full"
          >
            <p>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="bg-past/70 outline-none w-full px-4 py-2"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </p>

            <p>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="bg-past/70 outline-none w-full px-4 py-2"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </p>

            <p>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 24,
                  pattern:
                    /(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                className="bg-past/70 outline-none w-full px-4 py-2"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">
                  Password must be less than 24 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase, one lower case, one number
                  and one special character.
                </p>
              )}
            </p>

            {/* sign up error */}

            <div className="text-center">
              {signUpError && (
                <p className="text-sm text-red-600">{signUpError}</p>
              )}
            </div>

            <div>
              <Button value={"Sign Up"} />
            </div>
          </form>

          <div className="divider my-6">Or</div>

          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-sm font-medium shadow-none bg-transparent hover:bg-transparent border-2 border-past hover:border-primary rounded-full duration-300 h-10 w-full"
            >
              <FcGoogle className="text-xl" />
              <span>Sign Up With Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
