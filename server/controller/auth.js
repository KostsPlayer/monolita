import express from "express";
import configurationMiddleware from "../config/middleware.js";
import supabase from "../config/supabase.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const app = express();
configurationMiddleware(app);
const router = express.Router();

const isNotProduction = process.env.APP_DEBUG;

router.post("/registration", async (req, res) => {
  try {
    const { name, userClass } = req.body;

    const { data, error } = await supabase
      .from("users")
      .insert({ name: name, class: userClass })
      .select("*");

    if (error && isNotProduction === true) {
      return res.json(error.message);
    } else if (error && isNotProduction === false) {
      return res.json({ message: "Registration has problem!" });
    }

    return res.json({ message: "Registration successfully!", data });
  } catch (error) {
    return res.json(error);
  }
});

router.post("/login", async (req, res) => {
  const { name, userClass } = req.body;

  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .or(`name.eq.${name}`, `class.eq.${userClass}`);

    if (error && isNotProduction === true) {
      return res.json(error.message);
    } else if (error && isNotProduction === false) {
      return res.json({ message: "Login has problem!" });
    }

    if (data.length > 0) {
      const user = data[0];
      const getToken = process.env.JWT_TOKEN;
      const token = jwt.sign(
        { id: user.id, name: user.name, class: user.class },
        getToken,
        { expiresIn: "24h" }
      );

      res.cookie("monolitaToken", token, {
        httpOnly: false,
        secure: process.env.APP_ENV === "production",
        sameSite: "strict",
      });

      return res.json({
        message: `Welcome to Monolita, ${user.name}`,
        token: token,
        dataUser: user,
      });
    } else {
      return res.json({ message: "User doesn't exist" });
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
});

router.delete("/logout", async (req, res) => {
  res.clearCookie("monolitaToken");

  return res.json({ message: "Logout successfully!" });
});

export default router;
