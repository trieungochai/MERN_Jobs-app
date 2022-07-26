const Job = require("../models/Job.model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const newJob = await Job.create(req.body);
  return res.status(StatusCodes.CREATED).json({ newJob });
};

const getAllJobs = async (req, res) => {
  const allJobs = await Job.find({ createdBy: req.user.userId });
  return res.status(StatusCodes.OK).json({ count: allJobs.length, allJobs });
};

const getSingleJob = async (req, res) => {
  const {
    params: { id },
    user: { userId },
  } = req;
  const job = await Job.findById({ _id: id, createdBy: userId });
  if (!job) {
    throw new NotFoundError(`No job with id ${id}`);
  }
  return res.status(StatusCodes.OK).json({ job });
};

const updateJob = async (req, res) => {
  const {
    params: { id },
    user: { userId },
    body: { company, position },
  } = req;
  if ((!company, !position)) {
    throw new BadRequestError("Company/Position fields can not be empty");
  }

  const updatedJob = await Job.findByIdAndUpdate(
    {
      _id: id,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!updatedJob) {
    throw new NotFoundError(`No job with id ${id}`);
  }

  return res.status(StatusCodes.OK).json({ updatedJob });
};

const deleteJob = async (req, res) => {
  return res.send("deleteJob");
};

module.exports = { getAllJobs, createJob, getSingleJob, updateJob, deleteJob };
