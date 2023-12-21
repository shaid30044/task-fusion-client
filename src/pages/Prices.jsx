import { IoMdCheckmark } from "react-icons/io";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import Button from "../Components/Button";

const Prices = () => {
  return (
    <div className="flex flex-col justify-center items-center md:h-screen px-4 md:px-10 lg:px-20 py-20 md:py-0">
      <div>
        <h3 className="text-5xl font-bold pb-20">
          Pick up the best plan for you
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="border-2 border-primary shadow-2xl hover:shadow-primary duration-300 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <span className="text-primary text-sm font-medium bg-primary/20 rounded-full px-4 py-1">
              Beginner
            </span>

            <p className="flex justify-center items-center text-lg text-black bg-primary/80 rounded-full h-6 w-6">
              <HiOutlineEmojiHappy className="" />
            </p>
          </div>

          <p className="text-black/50 font-semibold py-4">
            Fit for your team if your team around 1-10 people!
          </p>

          <p className="text-3xl font-bold border-b-2 border-dashed pb-4">
            $60 <span className="text-lg text-black/70">/ Month</span>
          </p>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-medium pt-4">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>1 - 10 People</span>
            </p>
            <p className="flex items-center gap-2 font-medium">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>10 Project Files</span>
            </p>
            <p className="flex items-center gap-2 font-medium">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>Unlimited Access</span>
            </p>
            <p className="flex items-center gap-2 font-medium pb-4">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>Lifetime Update Features</span>
            </p>
            <Button value={"Choose"} />
          </div>
        </div>

        <div className="border-2 border-primary shadow-2xl hover:shadow-primary duration-300 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <span className="text-primary text-sm font-medium bg-primary/20 rounded-full px-4 py-1">
              Beginner
            </span>

            <p className="flex justify-center items-center text-lg text-black bg-primary/80 rounded-full h-6 w-6">
              <HiOutlineEmojiHappy className="" />
            </p>
          </div>

          <p className="text-black/50 font-semibold py-4">
            Fit for your team if your team around 1-10 people!
          </p>

          <p className="text-3xl font-bold border-b-2 border-dashed pb-4">
            $60 <span className="text-lg text-black/70">/ Month</span>
          </p>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-medium pt-4">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>1 - 10 People</span>
            </p>
            <p className="flex items-center gap-2 font-medium">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>10 Project Files</span>
            </p>
            <p className="flex items-center gap-2 font-medium">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>Unlimited Access</span>
            </p>
            <p className="flex items-center gap-2 font-medium pb-4">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>Lifetime Update Features</span>
            </p>
            <Button value={"Choose"} />
          </div>
        </div>

        <div className="border-2 border-primary shadow-2xl hover:shadow-primary duration-300 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <span className="text-primary text-sm font-medium bg-primary/20 rounded-full px-4 py-1">
              Beginner
            </span>

            <p className="flex justify-center items-center text-lg text-black bg-primary/80 rounded-full h-6 w-6">
              <HiOutlineEmojiHappy className="" />
            </p>
          </div>

          <p className="text-black/50 font-semibold py-4">
            Fit for your team if your team around 1-10 people!
          </p>

          <p className="text-3xl font-bold border-b-2 border-dashed pb-4">
            $60 <span className="text-lg text-black/70">/ Month</span>
          </p>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-medium pt-4">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>1 - 10 People</span>
            </p>
            <p className="flex items-center gap-2 font-medium">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>10 Project Files</span>
            </p>
            <p className="flex items-center gap-2 font-medium">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>Unlimited Access</span>
            </p>
            <p className="flex items-center gap-2 font-medium pb-4">
              <IoMdCheckmark className="text-primary text-lg" />
              <span>Lifetime Update Features</span>
            </p>
            <Button value={"Choose"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
