const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const auth = require("../middleware/auth");
const postsController = require("../controllers/posts");

router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  postsController.createPost
);
router.get("/", auth, postsController.getPosts);
router.get("/user", auth, postsController.getPostsByUserId);
router.get("/:id", auth, postsController.getPostbyId);
router.delete("/:id", auth, postsController.deletePost);
router.put("/like/:id", auth, postsController.likePost);
router.put("/unlike/:id", auth, postsController.unlikePost);
router.post(
  "/comment/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  postsController.createComment
);
router.delete("/comment/:id/:comment_id", auth, postsController.deleteComment);

module.exports = router;
