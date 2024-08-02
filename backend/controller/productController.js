import Product from "../models/productModels.js";

// Create Product -- Admin (can do);
export const createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            product
        })
    } catch (error) {
        console.log(error);
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json({ success:true, product })
    } catch (error) {
        console.log(error);
    }
}

export const getProductDetails = async (req,res) =>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                message:"Product not found"
            })
        }

        res.status(200).json({
            success:true,
            product
        })

    } catch (error) {
        
    }
}
// update product -- Admin
export const updateProduct = async (req,res) =>{
    try {
        let product =await Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                message:"Product not found"
            })
        }
        product = await Product.findByIdAndUpdate(req.params.id,req.body,
            {   new:true,
                runValidator:true,
                useFindAndModify:false
            });

        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async(req,res) =>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                message:"Product not found"
            })
        }
        await product.deleteOne();

        res.status(200).json({
            success:true,
            message:"Product is deleted"
        })

    } catch (error) {
        console.log(error)
    }
} 

