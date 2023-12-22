import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useOnGoing = () => {
  const axiosPublic = useAxiosPublic();

  const { data: onGoing = [], refetch: onGoingRefetch } = useQuery({
    queryKey: ["onGoing"],
    queryFn: async () => {
      const res = await axiosPublic.get("/onGoing");
      return res.data;
    },
  });

  return [onGoing, onGoingRefetch];
};

export default useOnGoing;
