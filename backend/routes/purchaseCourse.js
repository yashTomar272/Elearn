const router=require("express").Router();
const Courses=require("../models/courses")
const Purchases=require("../models/purchases");
const {authenticatetoken}=require("./userAuth")
const User = require('../models/user')

//purchases place
router.post("/place-purchases", authenticatetoken, async (req, res) => {
    try {
        const id = req.user.id; // ✅ Secure way

        const { order } = req.body;
        if (!order || !Array.isArray(order) || order.length === 0) {
            return res.status(400).json({ message: "Order array is empty or invalid" });
        }

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const orderIds = [];

        for (const orderData of order) {
            if (!orderData._id) {
                return res.status(400).json({ message: "Invalid purchases data" });
            }

            const newOrder = new Purchases({ user: id, courses: orderData._id });
            const orderDataFromDb = await newOrder.save();
            orderIds.push(orderDataFromDb._id);

            await User.findByIdAndUpdate(id, {
                $push: { purchases: orderDataFromDb._id }
            });
        }

        return res.json({
            status: "success",
            message: "Order placed successfully",
            purchases: orderIds
        });

    } catch (err) {
        console.error("Error placing order:", err);
        res.status(500).json({ message: "An error occurred" });
    }
});



// GET user history of particular user
router.get("/get-purchases-history", authenticatetoken, async (req, res) => {
    try {
        const id = req.user.id; // ✅ Secure

        const userData = await User.findById(id).populate({
            path: "purchases",
            populate: { path: "courses" },
        });

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        const purchasesData = userData.purchases.reverse();

        return res.json({
            status: "success",
            data: purchasesData,
        });

    } catch (err) {
        console.error("Error fetching purchases history:", err.message);
        res.status(500).json({ message: "An error occurred", error: err.message });
    }
});



// get all purchases 
router.get("/get-all-purchases", authenticatetoken, async (req, res) => {
    try {
        const purchases = await Purchases.find()
            .populate("courses user") // Combined for efficiency
            .sort({ createdAt: -1 });

        return res.status(200).json({
            status: "success",
            data: purchases
        });

    } catch (err) {
        console.error("Error fetching purchases:", err); // Added error logging
        return res.status(500).json({ message: "An error occurred" });
    }
});


// update order admin
router.put("/update-status/:id",authenticatetoken,async(req,res)=>{
    try{
const {id}=req.params;
await Purchases.findByIdAndUpdate(id,{status:req.body.status});
return res.json({
    status:"success",
    message:"status update successfully"
})
    }catch(err){
        res.status(500).json({ message: "An error occurred" });
    }
})
module.exports=router;