import express from "express";
import {isAdmin,requireSignIn} from "../middlewares/authMiddleware.js";
import {
    createProductController,
    getProductController,
    getSingleProductController,
    productPhotoController,
    deleteProductController,
    updateProductController,
    productFiltersController,
    productCountController,
    searchController,
    productCategoryController
} from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();


//routes
router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController);


//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);


//get photo
router.get("/product-photo/:pid", productPhotoController);


//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);


//update product
router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController);

//filter product
router.post('/product-filters',productFiltersController);

//product count
router.get('/product-count',productCountController);

//Search product 
router.get('/search/:keyword',searchController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

export default router;