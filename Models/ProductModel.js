import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            require: true
        },
        description:{
            type: String,
            require: true
        },
        price:{
            type: Number,
            require:true
        },
        productImgUrl:{
            type: String,
            require: true
        },
        supplier:{
            type: String,
            require: true
        },
        productLocation:{
            type: String,
            require: true
            
        }

    },
    {timestamps: true}
)



const Product  = mongoose.model("Product", productSchema)

export {Product}