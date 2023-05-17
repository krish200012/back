const express=require('express');
const { getOutlets, createOutlet, updateOutlet, deleteOutlet, getOne } = require('../controllers/outletsController');
const router=express.Router();

router.route("/get").get(getOutlets);
router.route("/createOutlet").post(createOutlet)
router.route("/update/:id").patch(updateOutlet)
router.route("/delete/:id").delete(deleteOutlet)
router.route("/getone/:id").get(getOne)

module.exports=router
 
