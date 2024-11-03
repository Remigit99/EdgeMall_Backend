import { Product } from "../Models/ProductModel.js";

// Create Product
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    await newProduct.save();
    res
      .status(200)
      .json({ msg: "New Product created Successfully", newProduct });
  } catch (error) {
    res.status(500).json({ msg: "Error creating Product" });
  }
};

// Get All Products

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: "error getting products" });
  }
};

// Get A Specific Product

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: "error getting product" });
  }
};

// Search For Product(s)

export const searchProducts = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $search: {
          index: "product",
          text: {
            query: req.params.key,
            path: {
              wildcard: "*",
            },
          },
        },
      },
    ]);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ msg: "Error getting product" });
  }
};
