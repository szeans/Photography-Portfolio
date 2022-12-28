import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/archive", (req, res, next) => {
  res.render("archive", {title:"Express"});
});

export default router;