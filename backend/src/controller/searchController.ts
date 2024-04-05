import { Request, Response } from "express";
import Job from "../models/job";

// Search controller
export const searchJobs = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    console.log("query", query)

    // Check if query is provided and is a non-empty string
    if (!query || typeof query !== "string" || query.trim() === "") {
      return res
        .status(400)
        .json({ message: "Query is required and must be a non-empty string" });
    }

    // Search for jobs
    const jobs = await Job.find({
      $or: [
        { company: { $regex: query, $options: "i" } }, // Case-insensitive search for company
        { title: { $regex: query, $options: "i" } }, // Case-insensitive search for title
      ],
    });

    return res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error searching jobs:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
