const express = require("express");
const router = express.Router();
const { Posts, Likes } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", validateToken, async (req, res) => {
  const listOfPosts = await Posts.findAll({ include: [Likes] });
  const likedPosts = await Likes.findAll({ where: { UserId: req.user.id } });
  res.json({ listOfPosts, likedPosts: likedPosts });
});

/* anfn */
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.get("/userPosts/:id", async (req, res) => {
  const id = req.params.id;
  const listsOfPosts = await Posts.findAll({ where: { UserId: id } });
  res.json(listsOfPosts);
});

router.post("/", validateToken, async (req, res) => {
  const post = req.body;
  // add new element post object
  post.username = req.user.username;
  // add user id
  post.UserId = req.user.id;
  await Posts.create(post);
  res.json(post);
});

router.delete("/:postId", validateToken, async (req, res) => {
  const postId = req.params.postId;

  await Posts.destroy({
    where: {
      id: postId,
    },
  });
  res.json("deleted successfully");
});

module.exports = router;
