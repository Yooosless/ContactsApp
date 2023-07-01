const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel")

const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contact);
  });
  

const getContact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});


const postContact=asyncHandler(async(req,res)=>{
    console.log("The request body is:", req.body);
    const {name, email, phone}=req.body;
    if(!name || !email || !phone){
        res.status(401);
        throw new Error("All fields are mandatory")
    }
    const contact= await Contact.create({
        name,email,phone,user_id: req.user.id
    });
    res.status(200).json(contact);
});


const updateContact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(403);
        throw new Error("User is not authorized to update");
    }
    const updatedContact= await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(updatedContact);
});

const deleteContact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString()!==req.user.id){
        res.status(403);
        throw new Error("User is not authorized to delete");
    }
    await Contact.deleteOne({_id:req.params.id})
    res.status(200).json(`Contact deleted, id: ${req.params.id}`);
});




module.exports={getContacts,getContact, postContact, updateContact, deleteContact }