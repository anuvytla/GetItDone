const mongoose = require("mongoose");
require('dotenv').config();

// mongoose.connect(
// 	process.env.MONGODB_URI || "mongodb://localhost:27017/GetItDone_db",
// 	{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
  
// );

mongoose.connect(process.env.MONGODB_URI)
	.then(() => {
   
    console.log(`Running on MongoDB assigned port: ${mongoose.connection.port} !!!`);
  })
  .catch((err => console.log(err)) );


module.exports = mongoose.connection;




