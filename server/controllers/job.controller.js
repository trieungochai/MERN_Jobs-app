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
  return res.send("getAllJobs");
};

const getSingleJob = async (req, res) => {
  return res.send("getSingleJob");
};

const updateJob = async (req, res) => {
  return res.send("updateJob");
};

const deleteJob = async (req, res) => {
  return res.send("deleteJob");
};

module.exports = { getAllJobs, createJob, getSingleJob, updateJob, deleteJob };
