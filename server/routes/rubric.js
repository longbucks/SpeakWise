const express = require("express");
const router = express.Router();
const rubricControllers = require("../controllers/rubriccontrollers");

router.route("/").post(rubricControllers.createOneRubric);

router.route("/:id").get(rubricControllers.getOneRubric);

module.exports = router;
