const express=require('express');
const router=express.Router();
const{getAllPizza, createPizza, updatePizza, deletePizza, getOne}=require('../controllers/pizzaController')

router.route("/get").get(getAllPizza);
router.route("/createPizza").post(createPizza)
router.route("/update/:id").patch(updatePizza)
router.route("/delete/:id").delete(deletePizza)
router.route("/getone/:id").get(getOne)

module.exports=router
