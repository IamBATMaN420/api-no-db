import express from "express"
import crypto from "crypto";
import {
  getAllProduct,
  getProductById,
  creatingProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

const router = express.Router()

// dummy data

router.get("/", getAllProduct)
// reading all product

router.post("/", creatingProduct)
// crateing product

router.get("/:id", getProductById)
// get a product by :id

router.put("/:id", updateProduct)
// update data 

router.delete("/:id", deleteProduct)
// delteing data

export default router;


