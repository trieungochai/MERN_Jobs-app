const getAllJobs = async (req, res) => {
  return res.send("getAllJobs");
};

const getSingleJob = async (req, res) => {
  return res.send("getSingleJob");
};

const createJob = async (req, res) => {
  return res.send("createJob");
};

const updateJob = async (req, res) => {
  return res.send("updateJob");
};

const deleteJob = async (req, res) => {
  return res.send("deleteJob");
};

module.exports = { getAllJobs, createJob, getSingleJob, updateJob, deleteJob };
