const mongo = require("mongoose");
mongo.connect("mongodb://localhost:27017/student_api")
.then(() => {console.log("connection successful....")})
.catch((err) => {console.log(err);})