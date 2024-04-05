import { Request, Response } from "express";
import Job from "../models/job";

// controller to add create a new job
const addJob = async (req: Request, res: Response) => {
  try {
    const { title, company, location, salary, description } = req.body;
    const job = new Job({
      title,
      company,
      location,
      salary,
      description,
    });
    await job.save();
    res.status(201).json({
      message: "Job created successfully",
      job,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({
      message: "Error creating job",
      error: error.message,
    });
  }
};

// controller to get all jobs with pagination
const getJobs = async (req: Request, res: Response) => {
  try {
    console.log(req.query)
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skipIndex = (page - 1) * limit;
    const jobs = await Job.find({ isActive: true })
      .limit(limit)
      .skip(skipIndex)
      .exec();
    const totalJobs = await Job.countDocuments({ isActive: true });
    res.status(200).json({
      message: "Jobs fetched successfully",
      jobs,
      page,
      pages: Math.ceil(totalJobs / limit),
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({
      message: "Error getting jobs",
      error: error.message,
    });
  }
};

// controller to get a single job
const getJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json({
      message: "Job fetched successfully",
      job,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({
      message: "Error getting job",
      error: error.message,
    });
  }
};

// controller to update a job
const updateJob = async (req: Request, res: Response) => {
  try {
    const fieldsToUpdate = req.body;
    const job = await Job.findByIdAndUpdate(req.params.id, fieldsToUpdate, {
      new: true,
    });
    res.status(200).json({
      message: "Job updated successfully",
      job,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({
      message: "Error updating job",
      error: error.message,
    });
  }
};

// soft delete a job
const deleteJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, { isActive: false });
    res.status(200).json({
      message: "Job deleted successfully",
      job,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({
      message: "Error deleting job",
      error: error.message,
    });
  }
};

export const jobController = {
  addJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
};
