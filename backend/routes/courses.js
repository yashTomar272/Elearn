const router=require("express").Router();
const User=require("../models/user")
const {authenticatetoken}=require("./userAuth")
const Courses=require("../models/courses")
const upload=require("../utils/multer")


//add course with admin and teacher
router.post("/add-course", authenticatetoken, upload.single("thumbnail"), async (req, res) => {
  try {
    const { language, subject, title, valid, lesson, teachername } = req.body;
    const { id } = req.headers;

    const user = await User.findById(id);
   if (user.role !== "admin" && user.role !== "teacher") {
      return res.status(400).json({ message: "You are not having access to perform admin work" });
    }

    const courses = new Courses({
      thumbnail: req.file.path,  // 🔥 Cloudinary URL
      language,
      subject,
      title,
      valid,
      lesson,
      teachername
    });

    await courses.save();
    res.status(200).json({ message: "Course added successfully", data: courses });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// update course
router.put("/update-course", authenticatetoken, upload.single("thumbnail"), async (req, res) => {
  try {
    const { courseid } = req.headers;
    const { language, subject, title, valid, lesson, teachername } = req.body;

    const user = await User.findById(req.user.id); // From token

    if (user.role !== "admin" && user.role !== "teacher") {
      return res.status(403).json({ message: "Only Admin or Teacher can update the course" });
    }

    const updateData = {
      language,
      subject,
      title,
      valid,
      lesson,
      teachername,
    };

    if (req.file) {
      updateData.thumbnail = req.file.path;
    }

    await Courses.findByIdAndUpdate(courseid, updateData);

    return res.status(200).json({ message: "Course update successful!" });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ message: "An error occurred" });
  }
});

//delete course
router.delete("/delete-course",authenticatetoken,async(req,res)=>{
    try{
        const {courseid}=req.headers;
await Courses.findByIdAndDelete(courseid);
return res.status(200).json({message:"course Delete successfull!"})

    }catch(err){
        console.log("err",err)
      res.status(500).json({ message: "An error occurred" });
    }
})

// get-all-course
router.get("/get-all-course",async(req,res)=>{
    try{

        const course =await Courses.find().sort({createdAt:-1});
        return res.json({
            status:200,
            data:course,
        })
    }catch(err){
        console.log("err",err)
      res.status(500).json({ message: "An error occurred" });
    }
})

// get-recent-course
router.get("/get-recent-course",async(req,res)=>{
    try{

        const course =await Courses.find().sort({createdAt:-1}).limit(4);
        return res.json({
            status:200,
            data:course,
        })
    }catch(err){
        console.log("err",err)
      res.status(500).json({ message: "An error occurred" });
    }
})

// get-course-by-id
router.get("/get-course-by-id/:id",async(req,res)=>{
    try{
const {id}=req.params;

        const course =await Courses.findById(id)
        return res.json({
            status:200,
            data:course,
        })
    }catch(err){
        console.log("err",err)
      res.status(500).json({ message: "An error occurred" });
    }
})

// get-course-by-teachername
router.get("/get-course-by-teachername/:teachername", async (req, res) => {
    try {
        const { teachername } = req.params;

        // teachername ke basis pe course filter karna
        const course = await Courses.find({ teachername: teachername }).sort({ createdAt: -1 });

        return res.json({
            status: 200,
            data: course,
        });
    } catch (err) {
        console.log("err", err);
        res.status(500).json({ message: "An error occurred" });
    }
});

// Search course route
router.get("/search-course", async (req, res) => {
    try {
      const { query } = req.query;  // Query parameter se search term lena
      const course = await Courses.find({
        $or: [
          { title: { $regex: query, $options: "i" } },  // course title ke liye search
          { teachername: { $regex: query, $options: "i" } },  // course teachername ke liye search
        ]
      }).sort({ createdAt: -1 });  // Latest course ko first show karna
  
      res.json({
        status: 200,
        data: course,  // course ko response ke roop mein bhejna
      });
    } catch (err) {
      console.log("Error:", err);
      res.status(500).json({ message: "An error occurred" });
    }
  });
  
  //get my all course by my name 
  router.get("/my-courses", authenticatetoken, async (req, res) => {
  try {
    // 🔐 Token se user ki info le rahe hain
    const user = await User.findById(req.user.id);

    // 🔒 Sirf teachers access kar sakte hain
    if (user.role !== "teacher") {
      return res.status(403).json({ message: "Only teachers can access their courses" });
    }

    // 👨‍🏫 Teacher ke naam ke basis par courses fetch karo
    const myCourses = await Cources.find({ teachername: user.username }).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Courses fetched successfully",
      data: myCourses,
    });

  } catch (err) {
    console.error("Error fetching teacher's courses:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports=router;