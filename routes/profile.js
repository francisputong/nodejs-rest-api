const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check } = require("express-validator");

const profileController = require("../controllers/profile");

router.get("/me", auth, profileController.getCurrentProfile);
router.post(
  "/",
  [
    auth,
    [
      check("status", "Status is required").not().isEmpty(),
      check("skills", "Skills is required").not().isEmpty(),
    ],
  ],
  profileController.createProfile
);
router.get("/", profileController.getProfiles);
router.get("/user/:user_id", profileController.getProfileById);
router.delete("/", auth, profileController.deleteProfile);
router.put(
  "/experience",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("company", "Company is required").not().isEmpty(),
      check("from", "From date is required").not().isEmpty(),
    ],
  ],
  profileController.updateExperience
);
router.delete("/experience/:exp_id", auth, profileController.deleteExperience);
router.put(
  "/education",
  [
    auth,
    [
      check("school", "School is required").not().isEmpty(),
      check("degree", "Degree is required").not().isEmpty(),
      check("fieldofstudy", "Field of study date is required").not().isEmpty(),
      check("from", "From of study date is required").not().isEmpty(),
    ],
  ],
  profileController.updateEducation
);
router.delete("/education/:edu_id", auth, profileController.deleteEducation);

module.exports = router;
