import "./env.js";

import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import logger from "morgan";
import path from "node:path";
import {fileURLToPath} from "node:url";

import archiveRouter from "./routes/archive.js";
import bnwRouter from "./routes/BNW.js";
import colorRouter from "./routes/Color.js";
import contactRouter from "./routes/Contact.js";
import indexRouter from "./routes/index.js";

const app = express();
const __dirname = fileURLToPath(new URL(".", import.meta.url));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/archive",
  (req, res, next) => {
    next();
  },
  archiveRouter
);

app.use(
  "/bnw",
  (req, res, next) => {
    next();
  },
  bnwRouter
);

app.use(
  "/color",
  (req, res, next) => {
    next();
  },
  colorRouter
);

app.use(
  "/contact",
  (req, res, next) => {
    next();
  },
  contactRouter
);

export default app;
