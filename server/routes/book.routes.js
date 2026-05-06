const express = require("express");

const {
  handleBookStoreController,
  handleBookListController,
  handleBookDeleteController,
  handleBookUpdateController,
} = require("../controller/book.controller");

const router = express.Router();

router.post("/addbook", (req,res,next)=>{
    console.log("POST /book/addbook HIT ✅");
    next();
}, handleBookStoreController);

router.get("/booklists", (req,res,next)=>{
    console.log("GET /book/booklists HIT ✅");
    next();
}, handleBookListController);

router.post("/deletebook", (req,res,next)=>{
    console.log("POST /book/deletebook HIT ✅");
    next();
}, handleBookDeleteController);

router.put("/updatebook", (req,res,next)=>{
    console.log("PUT /book/updatebook HIT ✅");
    next();
}, handleBookUpdateController);

module.exports = router;