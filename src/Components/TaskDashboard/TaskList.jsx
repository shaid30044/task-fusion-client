import Swal from "sweetalert2";
import useComplete from "../../Hooks/useComplete";
import useOnGoing from "../../Hooks/useOnGoing";
import useToDo from "../../Hooks/useToDO";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Button from "../Button";
import { useForm } from "react-hook-form";

const TaskList = () => {
  const [toDo, toDoRefetch] = useToDo();
  const [onGoing, onGoingRefetch] = useOnGoing();
  const [complete, completeRefetch] = useComplete();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newTask = {
      title: data.title,
      description: data.description,
      priority: data.priority,
      deadline: data.deadline,
    };

    toast.promise(
      axiosPublic.post("/toDo", newTask).then(() => {
        toDoRefetch();
        document.getElementById("my_modal_2").close();
      }),
      {
        loading: "Adding...",
        success: <b>New Task Added successful!</b>,
        error: <b>New Task Added failed!</b>,
      },
      {
        duration: 4000,
      }
    );
  };

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
    <div className="px-4 sm:px-10 lg:px-20 pt-10 pb-32">
      <div>
        <Toaster />
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <div>
            <div
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <Button value={"Add Task"} />
            </div>

            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-y-4 w-full"
                >
                  <input
                    type="text"
                    {...register("title", { required: true })}
                    placeholder="Title"
                    className="bg-past/70 outline-none w-full px-4 py-2"
                  />
                  {errors.title && (
                    <span className="text-red font-medium">
                      Title is required
                    </span>
                  )}

                  <input
                    type="text"
                    {...register("description", { required: true })}
                    placeholder="Description"
                    className="bg-past/70 outline-none w-full px-4 py-2"
                  />
                  {errors.description && (
                    <span className="text-red font-medium">
                      Description is required
                    </span>
                  )}

                  <input
                    type="text"
                    {...register("priority", { required: true })}
                    placeholder="Priority"
                    className="bg-past/70 outline-none w-full px-4 py-2"
                  />
                  {errors.priority && (
                    <span className="text-red font-medium">
                      Priority is required
                    </span>
                  )}

                  <input
                    type="text"
                    {...register("deadline", { required: true })}
                    placeholder="Day, DD/MM/YYYY"
                    className="bg-past/70 outline-none w-full px-4 pt-2 pb-4"
                  />
                  {errors.deadline && (
                    <span className="text-red font-medium">
                      Deadline is required
                    </span>
                  )}

                  <div>
                    <Button value={"Add"} />
                  </div>
                </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>

        <div className="h-[80vh]">
          {/* toDo */}

          <div className="overflow-y-scroll border-2 bg-white rounded-3xl h-1/3 px-6">
            <h3 className="text-2xl font-bold text-primary py-4">To-Do List</h3>
            <div>
              {toDo.map((todo, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center gap-10 bg-primary/20 rounded-3xl p-6 my-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-medium">{todo.title}</p>
                      <div className="flex justify-center">
                        <span className="text-[11px] font-medium text-white bg-primary rounded-full px-2 py-0.5">
                          {todo.priority}
                        </span>
                      </div>
                    </div>

                    <p className="text-black/60 font-medium pt-1 pb-2">
                      {todo.description}
                    </p>

                    <p className="text-black/60 text-sm">{todo.deadline}</p>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4">
                    <button
                      onClick={() => handleToDoDelete(todo._id)}
                      className="btn btn-sm normal-case text-xl bg-transparent hover:bg-transparent text-red-500 duration-300 shadow-none border-none hover:scale-125 hover:border-none"
                    >
                      <MdDelete />
                    </button>

                    <button
                      onClick={() => handleToDoEdit(complete._id)}
                      className="btn btn-sm normal-case text-xl bg-transparent hover:bg-transparent text-red-500 duration-300 shadow-none border-none hover:scale-125 hover:border-none"
                    >
                      <MdModeEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* onGoing */}

          <div className="overflow-y-scroll border-2 bg-white rounded-3xl h-1/3 px-6 my-4">
            <h3 className="text-2xl font-bold text-primary py-4">
              OnGoing List
            </h3>
            <div>
              {onGoing.map((ongoing, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center gap-10 bg-primary/20 rounded-3xl p-6 my-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-medium">{ongoing.title}</p>
                      <div className="flex justify-center">
                        <span className="text-[11px] font-medium text-white bg-primary rounded-full px-2 py-0.5">
                          {ongoing.priority}
                        </span>
                      </div>
                    </div>

                    <p className="text-black/60 font-medium pt-1 pb-2">
                      {ongoing.description}
                    </p>

                    <p className="text-black/60 text-sm">
                      {ongoing.start_date} - present
                    </p>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4">
                    <button
                      onClick={() => handleOnGoingDelete(ongoing._id)}
                      className="btn btn-sm normal-case text-xl bg-transparent hover:bg-transparent text-red-500 duration-300 shadow-none border-none hover:scale-125 hover:border-none"
                    >
                      <MdDelete />
                    </button>

                    <button
                      onClick={() => handleOnGoingEdit(complete._id)}
                      className="btn btn-sm normal-case text-xl bg-transparent hover:bg-transparent text-red-500 duration-300 shadow-none border-none hover:scale-125 hover:border-none"
                    >
                      <MdModeEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* complete */}

          <div className="overflow-y-scroll border-2 bg-white rounded-3xl h-1/3 px-6">
            <h3 className="text-2xl font-bold text-primary py-4">
              Complete List
            </h3>
            <div>
              {complete.map((complete, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center gap-10 bg-primary/20 rounded-3xl p-6 my-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-medium">{complete.title}</p>
                      <div className="flex justify-center">
                        <span className="text-[11px] font-medium text-white bg-primary rounded-full px-2 py-0.5">
                          {complete.priority}
                        </span>
                      </div>
                    </div>

                    <p className="text-black/60 font-medium pt-1 pb-2">
                      {complete.description}
                    </p>

                    <p className="text-black/60 text-sm">
                      {complete.start_date} - {complete.complete_date}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4">
                    <button
                      onClick={() => handleCompleteDelete(complete._id)}
                      className="btn btn-sm normal-case text-xl bg-transparent hover:bg-transparent text-red-500 duration-300 shadow-none border-none hover:scale-125 hover:border-none"
                    >
                      <MdDelete />
                    </button>

                    <button
                      onClick={() => handleCompleteEdit(complete._id)}
                      className="btn btn-sm normal-case text-xl bg-transparent hover:bg-transparent text-red-500 duration-300 shadow-none border-none hover:scale-125 hover:border-none"
                    >
                      <MdModeEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
