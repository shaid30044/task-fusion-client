import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useToDo = () => {
  const axiosPublic = useAxiosPublic();

  const { data: toDo = [], refetch: toDoRefetch } = useQuery({
    queryKey: ["toDo"],
    queryFn: async () => {
      const res = await axiosPublic.get("/toDo");
      return res.data;
    },
  });

  return [toDo, toDoRefetch];
};

export default useToDo;
