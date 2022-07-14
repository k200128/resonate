const router = require ("express").Router();
const User = require ("../models/User");

// Register
router.post("/register", async(req, res) =>{
    const newUser =  new User({
        // username:"parth",
        // email:"parth@gmail.com",
        // password:"1234"
        username: req.body.username,
        email: req.body.email,
        password:req.body.password,

    });
    try {
        const user = await newUser.save();
        res.status(200).json(user);

    }
    catch(err){
        console.log(err);

    }
})
// await user.save();
// res.send("ok");
// });

module.exports = router;