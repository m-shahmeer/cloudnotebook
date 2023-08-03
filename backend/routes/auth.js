const express = require('express');
const User = require ('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "Shahmeer$ecret";
// Dont need Authorizaton. Creating a user
router.post('/createuser', [
        body('name', 'Enter a valid name').isLength({min: 3}),
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Please enter atleast 5 characters').isLength({min: 5}),
]
    ,  async (req, res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        //check whether the user with this email exists already

        try {

       

     let user = await User.findOne ({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry a user with this email already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const secPass =  await bcrypt.hash(req.body.password, salt)
        //Creating a user
       user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email, 
          })

          const data = {
            user:{
                id: user.id
            }
          }
          const authtoken = jwt.sign(data, JWT_SECRET);
         

    //   res.json(user)
    res.json({authtoken})
    } catch(error){
            console.error(error.message);
            res.status(500).send ("User Added Successfully");
    }
})
 
module.exports = router