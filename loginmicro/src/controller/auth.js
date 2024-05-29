const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req,res)=> {
   const { firstname, lastname, email, password } = req.body;

   try {
    let user = await User.findOne({email});
    if(user) {
       console.log(`API Key for ${email}: ${user.apiKey}`);
       return res.status(400).json({message: "User already exists!"});}

    const password_hashed = await bcrypt.hash(password, 10);
    
    let newUser = new User({ firstname, lastname, email, password: password_hashed });
    await newUser.save();
    console.log(newUser)

    const payload = {user:{id: newUser.id}};
    jwt.sign(payload,
        process.env.SEC_JWT,
        {expiresIn: '10m'},
        (err,token)=>{
        if (err) {
        console.error("error by jwt:",err.message);
        return res.status(500).json({ message: "Internal server error" });
        }
        
        res.json({token});
    });

   } catch (error) {
    console.error("catch error in register user:",error.message);
    res.status(500).send('Get some server error');
   }
}

exports.login = async (req,res)=>{
    const {email,password} = req.body;

    try {
        const user = await User.findOne({ email });
        
        if (!user){ return res.status(400).json({ message: "Invalid email" });}
        
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword){ return res.status(400).json({message: "Invalid Credentials"});}
        console.log(user.firstname)

        const payload = { user: { id: user.id } };
        jwt.sign(
          payload,
          process.env.SEC_JWT,
          { expiresIn: "10m" },
          (err, token) => {
            if (err) {
              console.error("error by jwt login:", err.message);
              return res.status(500).json({ message: "Internal server error" });
            }
            res.json({ token });
          }
        );
    } catch (error) {
        console.error("Catched login error:",error.message);
        res.status(500).send("Get some server error");
    }
}

exports.protected = (req,res)=>{
    res.json({message: "This is Protected"});
}