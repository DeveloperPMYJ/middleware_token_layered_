require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    return res.status(200).json({ message: "Welcome to Team6's server!" });
  } catch (err) {
    console.log(err);
  }
});

app.get("/users", async (req, res) => {
  try {
    const userData = await myDataSource.query(
      "SELECT id, nickname, email FROM USERS "
    );

    console.log("USER DATA:", userData);

    return res.status(200).json({
      users: userData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
});

//회원가입, 로그인
app.post("/users", userService.signUp)
app.post("/logIn", userService.logIn)
//게시물 Create, Read
app.post ("/createpost", postService.createPost)
app.get("/readpost", postService.readPost)
// 게시물 삭제 Delete (create랑 비슷한 로직), Update
app.delete("/deletepost", postService.deletePost)
app.put("/updatepost", postService.updatePost)

  // 서버 구동 
  const portNumber = process.env.PORT || 8000;
  
  const start = async () => {
    try {
      await server.listen(portNumber);
      console.log(`Server is listening on ${portNumber}`);
    } catch (err) {
      console.error(err);
    }
  };
  
  start();
  
  myDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
  });
  