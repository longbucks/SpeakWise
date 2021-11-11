const Rubric = require("../models/Rubric");

exports.createOneRubric = async (req, res) => {
  try {
    const newRubric = await Rubric.create(req.body);
    res.status(201).json({
      status: "Success",
      rubric: { newRubric }
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: "unable to create rubric"
    });
  }
};

exports.getOneRubric = async (req, res) => {
  try {
    const getRubric = await Rubric.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      rubric: { getRubric }
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "Rubric Not found"
    });
  }
};
