const express=require('express');
const router=express.Router();
const {getLogin,postLogin, getAllPizza}=require('../controllers/pizzaController')

router.get('/', getLogin)
router.post('/',postLogin)
// router.post('/',getAllPizza)



module.exports=router;

