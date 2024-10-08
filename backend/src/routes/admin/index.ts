import { Router } from "express";
import { jobController } from "../../controller/jobController";

const router = Router();

router.get("/all-jobs", jobController.getJobs);
router.post("/", jobController.addJob);
router.get("/job/:id", jobController.getJob);
router.put("/:id", jobController.updateJob);
router.delete("/:id", jobController.deleteJob);

export default router;
