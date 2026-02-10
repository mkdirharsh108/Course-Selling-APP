const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
// adminRouter.use(adminMiddleware) when need more

adminRouter.post("/signup", function(req, res){
    res.json({
        message : "admin signup endpoint"
    })
});

adminRouter.post("/signin", function(req, res){
    res.json({
        message : "admin signin endpoint"
    })
});

adminRouter.get("/purchases", function(req, res){
    res.json({
        message : "admin ji !! You have purchased eerything!!"
    })
});

module.exports = {
    adminRouter: adminRouter
}