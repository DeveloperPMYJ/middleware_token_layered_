// 외부에서 들어노는 요청을 하위 폴더로 안내하는 길잡이 역할
const express = require("express");
const router = express.Router();

const { userRouter } = require("./userRouter"); 
const { postRouter } = require("./postRouter");

router.use ("/users", userRouter)
router.use ("/posts", postRouter)

module.exports = { router };


// user가 있으면 userRouter로 보내고, 
// threads가 있으면 threadsRouter로 보내는 역할 