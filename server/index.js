const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnect");


const port = process.env.PORT || 5000

// handle uncaught Exception 
process.on("uncaughtException", err => {

  console.log(`Err : ${err.message}`);

  console.log(` Shutting down the server due to uncaught Exception `);

  process.exit(1);
});

//path of config
dotenv.config({ path: "./config/config.env" })

// database connection 
connectDB();
const server = app.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}`)

})


// UnHandle Promise Rejection 
process.on("unhandledRejection", err => {

  console.log(`Err : ${err.message}`);

  console.log(` Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });

});