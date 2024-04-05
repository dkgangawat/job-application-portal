import express from "express";
import cors from "cors";

require("dotenv").config();

import db from "./config/db";
db();

// Prepare express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


// admin Routes
import adminRouter from "./routes/admin";
app.use("/api/admin", adminRouter);

// user Routes
import userRouter from "./routes/user";
app.use("/api", userRouter);

export default app;
