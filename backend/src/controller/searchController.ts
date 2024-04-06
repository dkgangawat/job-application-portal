import { Request, Response } from "express";
import Job from "../models/job";


// Search controller
export const searchJobs = async (req: Request, res: Response) => {
  try {
    const { query, page = 1, limit = 10 } = req.query;
    console.log("query", query);

    // Check if query is provided and is a non-empty string
    if (!query || typeof query !== "string" || query.trim() === "") {
      return res
        .status(400)
        .json({ message: "Query is required and must be a non-empty string" });
    }

    // Parse page and limit as integers
    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);

    // Create a new instance of the query for counting documents
    const countQuery = Job.find({
      $or: [
        { company: { $regex: query, $options: "i" } },
        { title: { $regex: query, $options: "i" } },
      ],
    });

    const totalJobs = await countQuery.countDocuments();
    const totalPages = Math.ceil(totalJobs / limitNumber);

    // Create a new instance of the query for fetching documents
    const jobsQuery = Job.find({
      $or: [
        { company: { $regex: query, $options: "i" } },
        { title: { $regex: query, $options: "i" } },
      ],
    })
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const jobs = await jobsQuery;

    return res.status(200).json({ jobs, totalPages });
  } catch (error) {
    console.error("Error searching jobs:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


// controller to get at most 10 unique job title
export const recommendedSearch = async (req: Request, res: Response) => {
  try {
    const uniqueJobTitles = await Job.aggregate([
      { $group: { _id: "$title" } },
      { $limit: 10 },
    ]);

    const jobTitles = uniqueJobTitles.map((item) => item._id);

    return res.status(200).json({ jobTitles });
  } catch (error) {
    console.error("Error getting unique job titles:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


