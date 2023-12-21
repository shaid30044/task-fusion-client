import Button from "../Components/Button";

const Banner = () => {
  return (
    <div className="bg-gradient-to-t from-primary/30 to-white px-4 sm:px-10 lg:px-40 py-20">
      <div>
        <h3 className="text-4xl sm:text-5xl text-black font-bold text-center leading-[50px] sm:leading-[60px]">
          Organize Your Daily Task Easily <br className="hidden lg:block" />
          with Task
          <span className="text-primary">.Fusion</span>
        </h3>

        <p className="text-center text-black/50 font-medium pt-4 md:pt-10">
          Elevate your productivity and simplify your daily routine. Task.Fusion
          is your go-to platform <br className="hidden lg:block" />
          for seamless task management, whether you&apos;re a developer,
          corporate professional, <br className="hidden lg:block" />
          banker, or anyone striving for efficiency.
        </p>

        <div className="flex justify-center pt-10">
          <Button value={"Let's Explore"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
