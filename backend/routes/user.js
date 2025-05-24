const router=require("express").Router();
const User=require("../models/user");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const KEY=process.env.KEY;
const {authenticatetoken}=require("./userAuth")


// sing-up
router.post("/signup", async (req, res) => {
  try {
    const { fullname, email, password, mobilenumber, role, qualification } = req.body;
    console.log("fullname",fullname)
    console.log("fullname",email)
    console.log("fullname",password)
    console.log("fullname",mobilenumber)
    console.log("fullname",role)

    // Check fullname already exists
    const existingUser = await User.findOne({ fullname });
    if (existingUser) {
      return res.status(400).json({ message: "User name already exists" });
    }

    // Check email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Check password length
    if (password.length <= 5) {
      return res.status(400).json({ message: "Password's length should be greater than 5" });
    }

    // Validate qualification for teacher
    if (role === "teacher" && (!qualification || qualification.trim() === "")) {
      return res.status(400).json({ message: "Qualification is required for teachers" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      email,
      password: hashPass,
      mobilenumber,
      role,
      qualification: role === "teacher" ? qualification : undefined
    });

    const savedUser = await newUser.save();

    return res.status(200).json({ message: "Registered Successfully" });
  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// sign-in
router.post("/signin", async (req, res) => {
  try {
    const { fullname, password } = req.body;

    const existingUser = await User.findOne({ fullname });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    bcrypt.compare(password, existingUser.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const authClaim = [
        { name: existingUser.fullname },
        { role: existingUser.role }
      ];

      const token = jwt.sign({ authClaim }, KEY, { expiresIn: "7d" });

      res.status(200).json({
        id: existingUser._id,
        role: existingUser.role,
        token
      });
    });

  } catch (err) {
    console.error("Signin Error:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// get-user-information
router.get("/get-user-information", authenticatetoken, async (req, res) => {
    try {
      const { id } = req.headers; // Ensure `id` is sent in headers
      console.log("id",id)
      if (!id) {
        return res.status(400).json({ message: "User ID is required in headers" });
      }
  
      const data = await User.findById(id).select('-password');
      if (!data) {
        return res.status(404).json({ message: "User not found" });
      }
    
      return res.status(200).json(data);
    } catch (err) {
      console.error("Error fetching user data:", err.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });


//   update mobilenumber
router.put("/update-mobilenumber",authenticatetoken,async(req,res)=>{
    try{
        const { id } = req.headers;
        const {mobilenumber}=req.body;
        await User.findByIdAndUpdate(id,{mobilenumber:mobilenumber});
      return res.status(200).json({message:"mobilenumber Updated SuccessFully"});
    }catch(err){
        res.status(500).json({ message: "Internal Server Error" });

    }
})
router.get("/get-all-user",async(req,res)=>{
    try{

        const user =await User.find();
        return res.json({
            status:"200",
            data:user,
        })
    }catch(err){
        console.log("err",err)
      res.status(500).json({ message: "An error occurred" });
    }
})

module.exports=router; 