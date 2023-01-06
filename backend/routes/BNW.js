import express from "express";
import fs from "fs";
const router = express.Router();

const all = fs.readdirSync("../frontend/photos/bnw");
const imgs = [];

for (const file of all) {
  if (file.endsWith("jpg")) {
    imgs.push(file);
  }
}

router.get("/", (req, res, next) => {
  return res.send(imgs);
});

export default router;