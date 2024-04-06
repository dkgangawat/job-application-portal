

import axiosClient from "@/utils/axiosClient";

export const getJobs = async (page?:number) => {
  let currentPage = page || 1;
  const response = await axiosClient.get("/all-jobs", { params: { page:currentPage ,limit:10 } });
  console.log(response)
  return response.data;
};

export const getJob = async (id: string) => {
  const response = await axiosClient.get(`/admin/job/${id}`);
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

export const updateJob = async (job: any) => {
  const response = await axiosClient.put(`/admin/${job._id}`, job);
  return response.data;
};

export const deleteJob = async (id: string) => {
  const response = await axiosClient.delete(`/admin/${id}`);
  return response.data;
};
