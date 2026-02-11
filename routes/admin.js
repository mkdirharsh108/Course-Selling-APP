const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
// adminRouter.use(adminMiddleware) when need more
const { JET_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");


adminRouter.post("/signup", async function(req, res){
    const { email, password, firstName, lastName } = req.body;
    
    await adminModel.create({
        email, // == emial: email
        password,
        firstName,
        lastName
    })
    res.json({
        message : "signup succeeded"
    })
})

adminRouter.post("/signin", async function(req, res){
    const { email, password } = req.body;
    const admin = await adminModel.findOne({ // Implement bcrypt further in future 
        // either use findOne or else use user.length === 1 
        email: email,
        password: password
    })

    if(admin) {
        const token = jwt.sign({
            id: admin._id

        }, JWT_USER_PASSWORD);
        
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message : "Incorrect credentials"
        })
    }
})

adminRouter.get("/purchases", function(req, res){
    res.json({
        message : "admin ji !! You have purchased eerything!!"
    })
});

adminRouter.post("/course", adminMiddleware, async function(req, res){
    const adminId  = req.userId;
    const {title, description, imageUrl, price } = req.body;

    // for image as image only not url watch
    // creating a web3 saas in 6 hours
    const course = await courseModel.create({
        title, description, imageUrl, price, creatorId: adminId
    })
    res.json({
        message : "Course Created",
        courseId: courseModel._id
    })
});

adminRouter.put("/course", function(req, res){
    res.json({
        message : "put course endpoint"
    })
});

module.exports = {
    adminRouter: adminRouter
}