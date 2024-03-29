import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getAllProductByType,
  getProduct,
  getProducts,
  updatedProduct,
} from "../controllers/Product.js";
const router = express.Router();

//Create
router.post("/", createProduct);

//Update
router.put("/:id", updatedProduct);

//Delete
router.delete("/:id", deleteProduct);

//Get
router.get("/", getAllProduct);
router.get("/getByBrand", getAllProductByType);
router.get("/:id", getProduct);

//Get All

//Get By Type

export default router;
