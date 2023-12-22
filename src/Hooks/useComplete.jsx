import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useComplete = () => {
  const axiosPublic = useAxiosPublic();

  const { data: complete = [], refetch: completeRefetch } = useQuery({
    queryKey: ["complete"],
    queryFn: async () => {
      const res = await axiosPublic.get("/complete");
      return res.data;
    },
  });

  return [complete, completeRefetch];
};

export default useComplete;
