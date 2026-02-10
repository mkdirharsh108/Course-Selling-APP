const { Router } = require("express")
const courseRouter = Router();

courseRouter.get("/preview", function(req, res){
    res.json({
        message : "preiew lelo"
    })
});

courseRouter.get("/purchase", function(req, res){
    res.json({
        message : "purchase krlo"
    })
});

module.exports = {
    courseRouter: courseRouter
}