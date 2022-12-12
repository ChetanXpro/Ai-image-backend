require("dotenv").config();
const cors = require("cors");
const express = require("express");
const port = 5000;
const allowedOrigins = [
  "http://localhost:5173/",
  "http://localhost:5173",
  "https://ai-image-lake.vercel.app/",
];

const corsOption = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not alowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./Routes/image"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
