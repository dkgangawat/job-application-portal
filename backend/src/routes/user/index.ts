import { Router } from "express";
import { jobController } from "../../controller/jobController";

const router = Router();

//get all jobs
router.get("/", jobController.getJobs);

export default router;
