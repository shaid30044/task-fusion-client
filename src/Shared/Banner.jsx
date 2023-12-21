import { Link } from "react-router-dom";
import Button from "../Components/Button";

const Banner = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-t from-white via-primary/60 to-white h-[90vh] px-4 sm:px-10 lg:px-40">
      <div>
        <h3 className="text-4xl sm:text-5xl lg:text-7xl text-black font-bold text-center leading-[50px] sm:leading-[60px] lg:leading-[90px]">
          Organize Your Daily Task Easily <br className="hidden lg:block" />
          with Task
          <span className="text-primary">.Fusion</span>
        </h3>

        <p className="text-center lg:text-lg text-black/50 font-medium pt-6 md:pt-10 lg:pt-10">
          Elevate your productivity and simplify your daily routine. Task.Fusion
          is your go-to platform <br className="hidden lg:block" />
          for seamless task management, whether you&apos;re a developer,
          corporate professional, <br className="hidden lg:block" />
          banker, or anyone striving for efficiency.
        </p>

        <div className="flex justify-center pt-10 lg:pt-16">
          <Link to="/signIn">
            <Button value={"Let's Explore"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
