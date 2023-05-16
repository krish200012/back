const express=require('express');
const router=express.Router();
const{userLogin, userRegister, userCurrent}=require('../controllers/userController')

router.get("/", userCurrent)
router.route("/register").post(userRegister);
router.route("/login").post(userLogin)

module.exports=router
