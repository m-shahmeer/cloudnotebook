const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");

//Route 1: Get All the notes: Get "/api/auth/getuser". Login Required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
       
            console.error(error.message);
            res.status(500).send("Internal Server Error");
          
    }
 
});

//Route 2: Add a new note using: Post "/api/auth/addnote". Login Required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description should be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {

    try {
        
    
    const {title, description, tag} = req.body;
    //if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Note({
title, description, tag, user: req.user.id
    })
    const savedNote = await note.save()
    res.json(savedNote);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
  });

module.exports = router;
