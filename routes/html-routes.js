const router = require("express").Router();


router.get("/", function(req, res){
    db.Thread.findAll({})
      
  });