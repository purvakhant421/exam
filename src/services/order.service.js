const { Order } = require("../models");

// Create Order
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

// Get Order list
const getOrderList = async (filter, options) => {
  return Order.find().populate("Cart");
};


// Get Order details by id
const getOrderById = async (orderId) => {
  return Order.findById(orderId);
};

// Delete Order
const deleteOrder = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};

// Update Order
const updateOrder = async (orderId,reqBody) => {
  return Order.findByIdAndUpdate(orderId,{$set:reqBody});
};

// Get user by email
const getOrderByEmail = async (email) => {
  return Order.findOne({ email });
};

module.exports = {
    createOrder,
    getOrderList,
    getOrderById,
    deleteOrder,
    updateOrder,
    getOrderByEmail
};