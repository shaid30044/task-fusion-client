import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-fusion-server.vercel.app/users",
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
