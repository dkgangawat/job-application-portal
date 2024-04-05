

import axiosClient from "@/utils/axiosClient";

export const getJobs = async (page?:number) => {
  let currentPage = page || 1;
  const response = await axiosClient.get("/all-jobs", { params: { page:currentPage, limit:2 } });
  console.log(response)
  return response.data;
};

export const searchJobs = async (query: string) => {
  const response = await axiosClient.get(`/search?query=${query}`);
  return response.data;
};

export const addJob = async (job: any) => {
  const response = await axiosClient.post("/admin", job);
  return response.data;
};
