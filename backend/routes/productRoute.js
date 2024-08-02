import express from 'express';
import { createProduct,deleteProduct,getAllProducts,getProductDetails,updateProduct } from '../controller/productController.js';

const router = express.Router();

router.post ('/create', createProduct);
router.get('/products',getAllProducts);
router.get('/product/:id',getProductDetails);

router.put('/product/:id',updateProduct);
router.delete('/product/:id',deleteProduct);

export default router;