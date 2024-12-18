import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const configurationMiddleware = (app) => {
  app.use(
    cors({
      origin: [
        "https://monolita.vercel.app",
        "https://kostsplayer.github.io",
        "http://localhost:5173",
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      optionsSuccessStatus: 200,
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};

export default configurationMiddleware;
