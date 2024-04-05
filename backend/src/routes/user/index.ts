import { Router } from "express";
import { jobController } from "../../controller/jobController";
import { searchJobs } from "../../controller/searchController";

const router = Router();

//get all jobs
router.get("/all-jobs", jobController.getJobs);
router.get('/search', searchJobs)

export default router;
