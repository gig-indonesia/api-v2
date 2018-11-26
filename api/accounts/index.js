const express = require("express");
const router = express.Router();
const controller = require("./controller");

// router.get("/:id", controller.search);
// router.get("/", controller.getAll);
router.post("/login", controller.login);
router.post("/register", controller.register);
// router.delete("/:id", controller.deleteOne);
router.put("/:id/email", controller.updateEmail);
router.put("/:id/password", controller.updatePassword);

module.exports = router;
