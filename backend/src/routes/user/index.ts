import { Router } from "express";
import { jobController } from "../../controller/jobController";
import { recommendedSearch, searchJobs } from "../../controller/searchController";

const router = Router();

//get all jobs
router.get("/all-jobs", jobController.getJobs);
router.get('/search', searchJobs)
router.get('/recommendedSearch', recommendedSearch)

export default router;
