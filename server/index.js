const express = require("express")
const app = express()
const postRouter = require("./routes/Posts")

const PORT = 8800
const db = require("./models")

/* // test route
app.get("/", (req, res) => { 
   res.json("Hello from backend!")
 }) */

// routers
app.use("/posts", postRouter)

db.sequelize.sync().then( () => { 
   /* anfn */
   app.listen(PORT, () => { 
       console.log(`Server starts on port: ${PORT}!`)
    } )
 } )

