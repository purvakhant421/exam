const express = require("express");
const { orderValidation } = require("../validations");
const { orderController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create order */
router.post(
  "/create-order",
  validate(orderValidation.createOrder),
  orderController.createOrder
);

/** order list */
router.get(
  "/list",
  orderController.getOrderList
)
/** order delete */
router.delete(
  "/delete/:orderId",
  orderController.deleteOrder
)
/** order update */
router.put(
  "/update-order/:orderId",
  orderController.updateOrder
)

/** Send mail */
router.post(
  "/send-mail",
  validate(orderValidation.sendMail),
  orderController.sendMail
);


module.exports = router;