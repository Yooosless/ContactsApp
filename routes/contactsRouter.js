const express=require("express");
const router= express.Router();
const {getContacts,getContact, postContact, updateContact, deleteContact }=require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(postContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports= router;