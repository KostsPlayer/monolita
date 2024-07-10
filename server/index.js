import express from "express";
import configurationMiddleware from "./config/middleware.js";
import authRouter from "./controller/auth.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
configurationMiddleware(app);

app.use("/auth", authRouter);

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`${process.env.APP_ENV} with debug=${process.env.APP_DEBUG}`);

  console.log(`running server on port ${port}`);
});
