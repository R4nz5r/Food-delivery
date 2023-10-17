const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors"); // Import the cors middleware

connectToMongo();

const app = express();
const port = 5000;

// Configure CORS to allow requests from the client's origin (http://localhost:5173)
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", require("./routes/CreateUser"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
