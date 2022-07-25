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

module.exports = { getAllJobs, getSingleJob, updateJob, deleteJob };
