const Joi = require("joi");

/** create  */
const createOrder = {
  body: Joi.object().keys({
    ammount: Joi.number().required(),
    order_address: Joi.string().required().trim(),
    order_email: Joi.string().required().trim(),
    order_date: Joi.string().required().trim(),
    total_items: Joi.string().required(),
  }),
};

/** Send mail */
const sendMail = {
  body: Joi.object({
    email: Joi.string().required().trim().email(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim(),
  }),
};


module.exports = {
    createOrder,
    sendMail
}