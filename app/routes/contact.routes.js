const express = require("express");
const contacts = require("../controllers/contact.controller");

module.exports = (app)=>{
    const router = express.Router();

    //Retrieve all contacts
    router.get("/", contacts.findAll);

    // Create a new contact
    router.post("/", contacts.create);

    // Delete all contacts
    router.get("/", contacts.deleteAll);

    // Retrieve all favorite contacts
    router.get("/favorite", contacts.findAllFavorite);

    router.get("/:id",contacts.findOne);
    
    router.put("/:id",contacts.update);
    
    router.delete("/:id",contacts.delete);
    
    app.use("/api/contacts", router);
}