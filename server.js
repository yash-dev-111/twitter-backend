const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user_route");
const tweetRoute = require("./routes/tweet_route");
const fileRoute = require("./routes/file_route");
const OtherUserProfileRoute = require("./routes/otheruserprofile_route");

const { MONGODB_URL } = require("./config");

const PORT = 8081;
global.__basedir = __dirname;
const port = process.env.PORT || 4000;
const baseUrl = process.env.BASE_URL;
mongoose.connect(MONGODB_URL)



let db = mongoose.connection;
db.on("connected", () => {
    console.log(`Database connection Successful`)
})

db.on("error", () => {
    console.log('Database Connection Failed')
})

app.use(cors());
app.use(express.json());

//usage of routes
app.use("/", userRoute);
app.use("/", tweetRoute);
app.use("/", fileRoute);
app.use("/", OtherUserProfileRoute);

app.listen(port, () => {
  console.log(`Server started at ${baseUrl}:${port}`);
});
