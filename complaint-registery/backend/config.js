const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://kinjal:<AB123cde>@cluster0.7usv4.mongodb.net/")
.then(()=>{
   console.log("connected to mongodb")
})
