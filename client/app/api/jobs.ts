
import axiosClient from "@/utils/axiosClient";

export const getJobs = async () => {
  const response = await axiosClient.get("/");
  console.log(response)
  return response.data;
};
