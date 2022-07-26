const Job = require("../models/Job.model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createJob = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;
    const newJob = await Job.create(req.body);
    return res.status(StatusCodes.CREATED).json({ newJob });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const getAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find({ createdBy: req.user.userId });
    return res.status(StatusCodes.OK).json({ count: allJobs.length, allJobs });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const getSingleJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const job = await Job.findById({ _id: id, createdBy: userId });
    if (!job) {
      throw new NotFoundError(`No job with id ${id}`);
    }
    return res.status(StatusCodes.OK).json({ job });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const updateJob = async (req, res) => {
  return res.send("updateJob");
};

const deleteJob = async (req, res) => {
  return res.send("deleteJob");
};

module.exports = { getAllJobs, createJob, getSingleJob, updateJob, deleteJob };
