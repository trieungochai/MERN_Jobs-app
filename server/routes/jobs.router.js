const express = require("express");
const {
  getAllJobs,
  getSingleJob,
  deleteJob,
  updateJob,
  createJob,
} = require("../controllers/job.controller");

const jobsRouter = express.Router();

jobsRouter.route("/").get(getAllJobs).post(createJob);
jobsRouter.route("/:id").get(getSingleJob).patch(updateJob).delete(deleteJob);

module.exports = jobsRouter;
