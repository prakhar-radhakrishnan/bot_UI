 const express = require('express');
const app = express();
app.use("/", (req,res)=>{
  res.send("Servre is running")
});
app.listen (5000, console.log("Server started on port 5000"));
