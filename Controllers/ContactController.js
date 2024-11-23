const asyncHandler = require("express-async-handler");


const getContacts = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
});

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please provide name, email and phone");
  }

  res.status(201).json({ message: "Create Contact" });
});

const getContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});
const updateContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

const deleteContact = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
