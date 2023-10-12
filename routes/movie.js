const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController.js");
const upload = require("../middlewares/multer.js");

router.get("/", moviesController.findAll);
router.get("/:id", moviesController.findOne);
router.post("/", upload.single("photo"), moviesController.create);
router.put("/:id", upload.single("photo"), moviesController.update);
router.delete("/:id", moviesController.destroy);

module.exports = router;
