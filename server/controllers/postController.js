const Post = require("../models/Post.js");
const User = require("../models/User.js");

const createPost = async (req, res) => {
  //before createPost verify token middleware will run and we will get the author id
  const authorId = req.id;
  const accountType = req.accountType;

  if (accountType == "buyer") {
    return res
      .status(403)
      .json({ success: false, message: "Forbidden, only sellers can post" });
  }
  const { title, author, price, image, publicId } = req.body;

  try {
    const post = new Post({
      title,
      author,
      price,
      image,
      publicId,
      authorId,
    });
    await post.save();

    await User.findByIdAndUpdate(authorId, {
      $push: { uploads: post._id },
    });

    return res
      .status(201)
      .json({ sucess: true, message: "Post created successfully.", post });
  } catch (err) {
    return res.status(500).json({ sucess: false, message: err.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (posts.length === 0)
      return res
        .status(404)
        .json({ success: false, message: "No posts Found!" });

    return res.status(404).json({ success: true, data: posts });
  } catch (err) {
    return res.status(500).json({ sucess: false, message: err.message });
  }
};

const getMyPosts = async (req, res) => {
  const authorId = req.id;
  const accountType = req.accountType;

  try {
    if (accountType === "buyer") {
      const { purchased } = await User.findById(authorId).populate("purchased");
      console.log(purchased);

      if (!purchased)
        return res
          .status(404)
          .json({ success: true, message: "No posts found" });

      return res.status(200).json({ success: true, data: purchased });
    } else {
      const { uploads } = await User.findById(authorId).populate("uploads");

      f(!uploads);
      return res.status(404).json({ success: true, message: "No posts found" });

      return res.status(200).json({ success: true, data: uploads });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ sucess: false, message: "Internal server error" });
  }
};

module.exports = { createPost, getAllPosts, getMyPosts };
