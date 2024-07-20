const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken.js");
const {
  createPost,
  getAllPosts,
  getMyPosts,
} = require("../controllers/postController.js");

router.post("/post/create", verifyToken, createPost);
router.get("/post/getAll", getAllPosts);
router.get("/post/myPosts", verifyToken, getMyPosts);

module.exports = router;
