const express = require("express");
const mongoose = require("mongoose");
const userRouter=require('./routes')

const url =
  "mongodb+srv://daniel:123@cluster0.t51gu.mongodb.net/CS571?retryWrites=true&w=majority";
mongoose.connect(url, (err) => {
  if (err) {
    console.log("DB error: ", err);
  } else {
    console.log("DB connected");
  }
});




const app = express();

app.use(express.json())

app.use('/users',userRouter)


app.listen(4040, () => {
  console.log("listening on port 4040...");
});
