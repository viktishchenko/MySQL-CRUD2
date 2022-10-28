const express = require("express");
const app = express();
const cors = require("cors");
const postRouter = require("./routes/Posts");
const commentsRouter = require("./routes/Comments");

const PORT = 8800;

app.use(express.json());
app.use(cors());

const db = require("./models");

/* // test route
app.get("/", (req, res) => { 
  res.json("Hello from backend!")
}) */

// routers
app.use("/posts", postRouter);
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
  /* anfn */
  app.listen(PORT, () => {
    console.log(`Server starts on port: ${PORT}!`);
  });
});
