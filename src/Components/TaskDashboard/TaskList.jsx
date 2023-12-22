import Swal from "sweetalert2";
import useComplete from "../../Hooks/useComplete";
import useOnGoing from "../../Hooks/useOnGoing";
import useToDo from "../../Hooks/useToDO";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const TaskList = () => {
  const [toDo, toDoRefetch] = useToDo();
  const [onGoing, onGoingRefetch] = useOnGoing();
  const [complete, completeRefetch] = useComplete();
  const axiosPublic = useAxiosPublic();

  const handleToDoDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes.",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.promise(
          axiosPublic.delete(`/toDo/${id}`),
          {
            loading: "Deleting...",
            success: (res) => {
              if (res.data.deletedCount) {
                toDoRefetch();
                return "Deleted successfully!";
              } else {
                throw new Error("Deletion failed.");
              }
            },
            error: "An error occurred while deleting the ToDo.",
          },
          {
            position: "top-center",
            duration: 1500,
          }
        );
      }
    });
  };

  const handleOnGoingDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes.",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.promise(
          axiosPublic.delete(`/onGoing/${id}`),
          {
            loading: "Deleting...",
            success: (res) => {
              if (res.data.deletedCount) {
                onGoingRefetch();
                return "Deleted successfully!";
              } else {
                throw new Error("Deletion failed.");
              }
            },
            error: "An error occurred while deleting the OnGoing.",
          },
          {
            position: "top-center",
            duration: 1500,
          }
        );
      }
    });
  };

  const handleCompleteDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes.",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.promise(
          axiosPublic.delete(`/complete/${id}`),
          {
            loading: "Deleting...",
            success: (res) => {
              if (res.data.deletedCount) {
                completeRefetch();
                return "Deleted successfully!";
              } else {
                throw new Error("Deletion failed.");
              }
            },
            error: "An error occurred while deleting the Complete.",
          },
          {
            position: "top-center",
            duration: 1500,
          }
        );
      }
    });
  };

  return (
    <div className="">
      <div>
        <Toaster />
      </div>
      <div className="grid grid-cols-1 gap-20 h-[90vh]">
        {/* toDo */}

        <div className="border-2 border-primary rounded-xl overflow-y-scroll duration-300 p-6">
          {toDo.map((todo, idx) => (
            <div key={idx} className="grid grid-cols-4 items-center gap-2 py-1">
              <p>
                <span>{idx + 1}. </span>
                {todo.title}
              </p>

              <div className="flex justify-center">
                <p>{todo.deadline}</p>
              </div>

              <div className="flex justify-center">
                <span className="text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                  {todo.priority}
                </span>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => handleToDoDelete(todo._id)}
                  className="btn btn-sm normal-case text-base bg-transparent hover:bg-red-500 text-red-500 hover:text-white duration-300 shadow-none border-2 border-red-500 hover:border-none"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* onGoing */}

        <div className="border-2 border-primary rounded-xl overflow-y-scroll duration-300 p-6">
          {onGoing.map((ongoing, idx) => (
            <div key={idx} className="grid grid-cols-4 items-center gap-2 py-1">
              <p>
                <span>{idx + 1}. </span>
                {ongoing.title}
              </p>

              <div className="flex justify-center">
                <p>{ongoing.deadline}</p>
              </div>

              <div className="flex justify-center">
                <span className="text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                  {ongoing.priority}
                </span>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => handleOnGoingDelete(ongoing._id)}
                  className="btn btn-sm normal-case text-base bg-transparent hover:bg-red-500 text-red-500 hover:text-white duration-300 shadow-none border-2 border-red-500 hover:border-none"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* complete */}

        <div className="border-2 border-primary rounded-xl overflow-y-scroll duration-300 p-6">
          {complete.map((complete, idx) => (
            <div key={idx} className="grid grid-cols-4 items-center gap-2 py-1">
              <p>
                <span>{idx + 1}. </span>
                {complete.title}
              </p>

              <div className="flex justify-center">
                <p>{complete.deadline}</p>
              </div>

              <div className="flex justify-center">
                <span className="text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                  {complete.priority}
                </span>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => handleCompleteDelete(complete._id)}
                  className="btn btn-sm normal-case text-base bg-transparent hover:bg-red-500 text-red-500 hover:text-white duration-300 shadow-none border-2 border-red-500 hover:border-none"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
