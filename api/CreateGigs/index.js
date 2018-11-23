const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/:id", controller.search);
router.get("/", controller.getAll);
router.post("/", controller.createGig);
router.delete("/:id", controller.deleteOne);
router.put("/:id", controller.update);

module.exports = router;
