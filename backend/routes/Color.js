import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/color", (req, res, next) => {
  res.render("color", {title:"Express"});
});

export default router;