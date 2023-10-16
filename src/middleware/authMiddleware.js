require("dotenv").config();

const {userService} = require('./src/services')
const jwt = require("jsonwebtoken");

const { throwError } = require("../utils");



const checkToken (req, res, next) => {
    const token = req.headers.authorization;

    if(!token){
    const error = new Error ("TOKEN_ERROR 게시물 작성 권한이 없습니다");
        error.statusCode = 400;
        error.code = "TOKEN_ERROR"
    return next (error);
    }

    // 'token' 변수를 요청 객체에 저장하여 나중에 사용할 수 있도록 함
    req.token = token; 

  // 다음 미들웨어로 전달
    next();
};

const verifyToken = (req, res, next) => {
    const { token } = req;
    // token 검증 로직을 추가해야 합니다
    if (!id) {
        const error = new Error ("verify_token_ERROR 게시물 작성 권한이 없습니다");
        error.statusCode = 400;
        error.code = "verify_token_ERROR";
      throw error;
      }