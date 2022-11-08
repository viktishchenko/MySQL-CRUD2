const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("success");
  });
});

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   const user = await Users.findOne({ where: { username: username } });

//   if (!user) {
//     res.json({ error: "User does not exist" });
//   } else {
//     bcrypt.compare(password, user.password).then((match) => {
//       if (!match) {
//         res.json({ error: "Wrong username and password combination" });
//       } else {
//         res.json("You logged in!");
//       }
//     });
//   }
// });

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // check if user exists
  const user = await Users.findOne({ where: { username: username } });
  if (!user) {
    res.json({ error: "User Doesn't Exist" });
  } else {
    // check password
    const match = await bcrypt.compare(password, user.password);
    //     console.log("match", match);
    if (match) {
      // create jwt token
      const accessToken = sign(
        { username: user.username, id: user.id },
        "verySecretString"
      );
      res.json({ token: accessToken, username: username, id: user.id });
    } else {
      res.json({ error: "Wrong Username And Password Combination" });
    }
  }
});

//check valid token endpoint
router.get("/check", validateToken, (req, res) => {
  res.json(req.user);
});

//get data about user // anfn
router.get("/userinfo/:id", async (req, res) => {
  const id = req.params.id;

  // get users id w/o password
  const userInfo = await Users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });

  res.json(userInfo);
});

router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await Users.findOne({ where: { username: req.user.username } });

  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Password Entered!" });

    bcrypt.hash(newPassword, 10).then(async (hash) => {
      await Users.update(
        { password: hash },
        { where: { username: req.user.username } }
      );
      res.json("success");
    });
  });
});

module.exports = router;
