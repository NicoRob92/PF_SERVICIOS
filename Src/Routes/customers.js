const router = require("express").Router();
const {
  getOrderForUser,
  getOrderDetailId,
} = require("../Controllers/OrderControllers");
const {
  createQuestion,
  replyQuestion,
  deleteQuestion,
} = require("../Controllers/QuestionController");

router.get("/order-user", getOrderForUser);
router.get("/order-detail/:id", getOrderDetailId);
router.post("/question", createQuestion);
router.put("/question", replyQuestion);
router.delete("/question/:id", deleteQuestion);
module.exports = router;
