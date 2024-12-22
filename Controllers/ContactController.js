const asyncHandler = require("express-async-handler");
const Contact = require("../Models/ContactModel");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id: req.user.id});
  res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({message : "Please provide name, email and phone"});
  }
  const contact = await Contact.create({ name, email, phone, user_id: req.user.id });
  res.status(201).json(contact);
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json({message : "Contact not found"});
  }
  res.status(200).json(contact);
});
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json({message :"Contact not found"});
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(401).json({message : "Not authorized to update contact"});
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json({message :"Contact not found"});
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(401).json({message : "Not authorized to delete contact"});
  }
  await Contact.deleteOne({_id : req.params.id});
  res.status(200).json({ message: "Contact removed" });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
